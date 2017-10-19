function Card(statement,answer){
	this.statement = statement;
	this.answer = answer;

}

Card.prototype.getStatement = function(){
	return this.statement;
}

Card.prototype.getAnswer = function(){
    return this.answer;
}

module.exports = Card;

