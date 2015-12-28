//referenciando um modulo/pasta que iremos criar dentro do projeto
var app = require('./config/express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('io',io);

//carregando modulo
//var rotasProdutos = require('./app/routes/produtos')(app);
/* este codigo foi para a pasta app/routes/produtos.js
app.get('/produtos',function(req,res){
	res.render("produtos/lista")
})
*/
//app.listen(3000,function(){
http.listen(3000,function(){
	console.log("servidor rodando");
});
