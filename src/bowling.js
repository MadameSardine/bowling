function Game(){

	this.frames = [];

};

function Frame(){
	this.rolls = [];
	this.pins = [];
	this.pinsDown = [];
};

function Roll(){
	
};

function Pin(){
	this.isUp = true
};


Frame.prototype.addRoll = function(roll) {
	this.rolls.push(roll)

};

Frame.prototype.assessPins = function() {
	for (i = 0 ; i <10 ; i++)
		if(this.pins[i].isUp === false){
			this.pinsDown.push(this.pins[i])

		};
	
};

Frame.prototype.receivePins = function() {
	for (i = 0 ; i <10 ; i++)
		this.pins.push(new Pin);
	
};

Roll.prototype.knowckDown = function(pin) {
	pin.down();
};

Pin.prototype.down = function() {
	this.isUp = false;
};

	

