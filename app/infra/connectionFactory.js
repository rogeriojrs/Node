var mysql = require('mysql');
// funcao anonima
var connectMYSQL = function (){
	if(!process.env.NODE_ENV){ //banco dev
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'casadocodigo_nodejs'
	});
}

if(process.env.NODE_ENV == 'test'){ //banco test
	return mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'casadocodigo_nodejs_test'
	});
}
}

//wrapper
module.exports = function(){
	return connectMYSQL
}
