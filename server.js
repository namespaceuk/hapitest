'use strict';

var Database = require('./database');
var Hapi = require('hapi');
var routes = require('./routes');
var _ = require('underscore');

var database = new Database();
var server = new Hapi.Server({ debug: { request: ['info', 'error'] } });

// Expose database
if (process.env.NODE_ENV === 'development') {
    server.database = database;
}

// Create server
server.connection({
    host: 'localhost',
    port: 3000
});

/*
server.ext('onRequest', function (request, next) {
    request.plugins.createControllerParams = function (requestParams) {
        var params = _.clone(requestParams);
        params.userId = "rich";
        return params;
    };
    next();
});
*/



// Add routes
server.route(routes);

//route info log message to the console
server.on('log', (event, tags) => {

  //  if (tags.info) {
        console.log(event);
   // }
});

server.on('response', function (request) {
    console.log(request.info.remoteAddress + ': ' + request.method.toUpperCase() + ' ' + request.url.path + ' --> ' + request.response.statusCode);
});

server.start(function (err) {
    if (err) { 
        throw err;
     }
    server.log('info', 'Server running at: ' + server.info.uri);
});


module.exports = server;
