"use strict";

var actorController = require('../controllers/actor');

module.exports = [
     { method: 'GET', path: '/actor/{actor_id}', handler: actorController.findByID }
];