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

function Pin(){
	this.isUp = true
};



Frame.prototype.addRoll = function(roll) {
	this.rolls.push(roll)

};

Roll.prototype.knockDownPins = function(numberOfPinsDown) {
	this.pinsDown = numberOfPinsDown;
};

Pin.prototype.knockedDown = function() {
	this.isUp = false;
};

	

