"use strict";

var Hapi = require('hapi');
//var Q = require('q');
var actorDAO = require('../dao/actor');
var _ = require('underscore');

var ReplyHelper = require('./reply-helper');

function ActorController(){};
ActorController.prototype = (function(){

	return {
		findByID: function findByID(request, reply) {
			console.log("in actor controller");
			var helper = new ReplyHelper(request, reply);
			var params = request.plugins.createControllerParams(request.params);

			actorDAO.findByID(params, function (err, data) {
				helper.replyFindOne(err, data);
			});
		}
	};
})();

var actorController = new ActorController();
module.exports = actorController;