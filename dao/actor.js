"use strict";

var db = require('../middleware/db');

function ActorDAO(){};
ActorDAO.prototype = (function(){

	return {
		findbyId: function findbyId(id, callback) {
			var values = [
				id
			];

			var sql = 'SELECT actor_id, first_name, last_name from actor AS u '+
				'WHERE u.actor_id = ? ';
			db.query({
				sql : sql, 
				values: values,
				callback : callback
			});
		}
	};
})();

var actorDAO = new ActorDAO();
module.exports = actorDAO;