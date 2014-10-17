function Game(){

	this.frames = [];

};

function Frame(){

	this.rolls = [];
};

function Roll(){
	this.pinsCount = 10;
	this.pinsDown = 0;

};



Frame.prototype.addRoll = function(roll) {
	this.rolls.push(roll)

};

Roll.prototype.knockDownPins = function(numberOfPinsDown) {
	this.pinsDown = numberOfPinsDown;
};

	

