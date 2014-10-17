function Game(){

	this.frames = [];

};

function Frame(){

	this.rolls = [];
};

function Roll(){
	this.pins_count = 10;
	this.pins_down = 0;

};



Frame.prototype.add_roll = function(roll) {
	this.rolls.push(roll)

};

	

