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

/*
if(process.env.NODE_ENV == 'production'){ //banco producao
	var urlDeConexao = process.env.CLEARDB_DATABASE_URL;
	var grupos = urlDeConexao.match(/mysql:\/(.*):(.*)@(.*)\/(.*)\?)
	return mysql.createConnection({
		host: grupos[3],
		user: 'x',
		password: 'x',
		database: 'x'
	});
}
}
*/
//wrapper
module.exports = function(){
	return connectMYSQL
}
