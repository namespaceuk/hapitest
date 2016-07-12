"use strict";

module.exports = function() {

	var env = process.env.NODE_ENV || 'development';
	var dbConstants = databaseConfig();

	var obj = {
		database : {
			host     : dbConstants[env]['host'],
			user     : dbConstants[env]['user'],
			password : dbConstants[env]['password'],
			database : dbConstants[env]['database']
		}
		
	};

	if (!obj.database['host']) {
		throw new Error('Missing constant database.host. ' +
			'Check your enviroment variables.');
	} else if (!obj.database['user']) {
		throw new Error('Missing constant database.user. ' +
			'Check your enviroment variables.');
	} else if (!obj.database['password']) {
		throw new Error('Missing constant database.password. ' +
			'Check your enviroment variables.');
	} else if (!obj.database['database']) {
		throw new Error('Missing constant database.database. ' +
			'Check your enviroment variables.');
	}

	return obj;

	function databaseConfig(){
		return {
			'production' : {
				'host' : '',
				'user' : '',
				'password' : '',
				'database' : ''
			},
			'development' : {
				'host' : 'Rich-LT',
				'user' : 'node',
				'password' : 'mercer',
				'database' : 'sakila'
			},
			'test' : {
				'host' : '',
				'user' : '',
				'password' : '',
				'database' : ''
			}
		};
	}


}();