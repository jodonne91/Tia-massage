
var app = function(){
	this.funA = function(){
		//happy hour
		return this;
	}
	this.funB = function(){
		console.log('logged function B');
	}
	this.funC = function(){
		funB.call();
	}
}

