function ProdutosDAO(connection){
	this._connection = connection;

}

ProdutosDAO.prototype.lista = function(callback){
	//Forma correta de chamar uma funcao o processador nao fica parado esperando finalizar o processamento da consulta
	this._connection.query('select * from produtos',callback);
	//Forma errada de executar uma consulta, o processador fica parado esperando finalizar a consulta, se existir soh 1 porcessador as outras requisicoes ficam esperando, no caso acima nao.
	/*var resultados = this._connection.query('select * from produtos');
	return resultados;
	*/
}

ProdutosDAO.prototype.salva = function(produto,callback){
	this._connection.query('insert into produtos set ?',produto,callback)};
	

module.exports = function(){
		return ProdutosDAO;
}
