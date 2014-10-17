function Game(){

	this.frames = [];

};

function Frame(){
	this.rolls = [];
};

function Roll(){
	this.pins = [];
	this.pinsDown = [];

};

function Pin(){
	this.isUp = true
};


Frame.prototype.addRoll = function(roll) {
	this.rolls.push(roll)

};

Roll.prototype.assessPins = function() {
	for (i = 0 ; i <10 ; i++)
		if(this.pins[i].isUp === false){
			this.pinsDown.push(this.pins[i])

		};
	
};

Roll.prototype.receivePins = function() {
	for (i = 0 ; i <10 ; i++)
		this.pins.push(new Pin);
	
};

Pin.prototype.knockedDown = function() {
	this.isUp = false;
};

	

