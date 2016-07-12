"use strict";

var Hapi = require('hapi');
//var Q = require('q');
var actorDAO = require('../dao/actor');
var _ = require('underscore');

var ReplyHelper = require('./reply-helper');

function ActorController(){};
ActorController.prototype = (function(){

	return {
		findById: function findById(request, reply) {
			console.log("*********in actor controller***********");
			var helper = new ReplyHelper(request, reply);
		//	var params = request.plugins.createControllerParams(request.params);
			var params = _.clone(request.params);

			actorDAO.findById(params, function (err, data) {
				helper.replyFindOne(err, data);
			});
		}
	};
})();

var actorController = new ActorController();
module.exports = actorController;