function Game(){

	this.frames = [];

};

function Frame(){
	this.rolls = [];
};

function Roll(){
	this.pins = [];
	this.pinsCount = 10;
	this.pinsDownCount = 0;

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

Roll.prototype.receivePins = function() {
	for (i = 0 ; i <10 ; i++)
		this.pins.push(new Pin);
	
};

Pin.prototype.knockedDown = function() {
	this.isUp = false;
};

	

