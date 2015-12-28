//quando quiser q a versao do modulo nao seja carregada toda vez q o modulo
//for chamado coloque a var app e set fora da funcao, exemplo abaixo.
//var app = require('express')();
var express = require('express');
var load = require('express-load'); //load e usado para carregamento automatico
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

module.exports = function() {

	var app = express();
	app.use(express.static('./app/public')); //usado pelo css da pagina web achar o diretorio dos arquivos css
	app.set('view engine','ejs');
	app.set('views','./app/views');

	//use recebe requisicoes q serao usadas no request, conhecido como middleware
	app.use(bodyParser.urlencoded({extended: true}));//formato q o formulario envia os dados para o servidor
	app.use(bodyParser.json());
	app.use(expressValidator());

	load('routes',{cwd: 'app'})
		.then('infra')
		.into(app);
		//return app;

	app.use(function(req,res,next){
		res.status(404).render('erros/404');
		next();
	});

	app.use(function(error,req,res,next){
		if(process.env.NODE_ENV == 'production'){
		res.status(500).render('erros/500');
		return;
	}
		next(error);
	});

	return app;
}