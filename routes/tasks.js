"use strict";

var actorController = require('../controllers/actor');

module.exports = [
     { method: 'GET', path: '/tasks/{actor_id}', handler: actorController.findById }
];