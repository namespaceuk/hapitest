"use strict";

var Hapi = require('hapi');
var constants = require('../config/constants');

//var paginationLinks = require('src/util/pagination-links');
//var li = require('li');

var _ = require('underscore');

function ReplyHelper(request, reply) {
	this.request = request;
	this.reply = reply;
	this.url = request.headers.host ? 'http://' + request.headers.host : constants.server.defaultHost;
}

ReplyHelper.prototype.replyFindOne = function replyFindOne(err, data) {
	if (err) { return this.reply(Hapi.error.badImplementation(err)); }

	if (data[0]) {this.reply(data[0]).type('application/json');}
	else { this.reply().code(404); }
};

module.exports = ReplyHelper;