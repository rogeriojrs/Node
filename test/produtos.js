//var http = require('http'); com a biblioteca do super test nao usa esta biblioteca
//funcao assert interpretadora de erros
var express = require('../config/express')(); //nao precisa subir o servidor
var request = require('supertest')(express);
//var assert = require('assert');
//funcao para cenario de teste
// funcaoFinalizacao ou done
describe('#ProdutosController',function(){
	//limpando a tabela de banco antes de executar o teste pra nao deixa lixo
	beforeEach(function(done){
		//pesquisar biblioteca node-database-cleaner limpa tds tabelas da base de dados para teste.
		var conn = express.infra.connectionFactory();
		conn.query("delete from produtos",function(ex,result){
			if(!ex){
				done();
			}
		});
	});

	it('#listagem json',function(done){
		request.get('/produtos')
		.set('Accept','application/json')	
		.expect('Content-Type',/json/)
		.expect(200,done);
			//assert.equal(res.statusCode,200);
			//assert.equal(res.headers['content-type'],'application/json; charset=utf-8');
			//done();
	});
	//teste post cadastrando um produto
	it('#Cadastro de novo produto com dados invalidos',function(done){
		request.post('/produtos')
		.send({titulo:"",descricao:"novo livro"})
		.expect(400,done);
	});

	it('#Cadastro de novo produto com dados Validos',function(done){
		request.post('/produtos')
		.send({titulo:"teste",preco:100,descricao:"novo livro"})
		.expect(302,done); //302 status de redirect como definimos no programa de cadastro.
	});

});