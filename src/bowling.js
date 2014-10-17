function Game(){

	this.frames = [];

};

function Frame(){

	this.rolls = [];
};

function Roll(){};



Frame.prototype.add_roll = function(roll) {
	this.rolls.push(roll)

};

	

