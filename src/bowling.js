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
	this.isUp = true;
};


Frame.prototype.addRoll = function(roll) {
	this.rolls.push(roll)


};

Frame.prototype.assessPins = function() {
	for (i = 0 ; i <10 ; i++)
		if(this.pins[i].isUp === false){
			this.pinsDown.push(this.pins[i])
		};
	this.pins.splice(0,1)
	
};

Frame.prototype.receivePins = function() {
	for (i = 0 ; i <10 ; i++)
		this.pins.push(new Pin);
	
};

Frame.prototype.knockDown = function(pin) {
	pin.down();
};

Roll.prototype.strike = function(frame) {
	frame.pins.forEach(function(pin) {
		pin.down(this);
	}) ;
};

Pin.prototype.down = function() {
	this.isUp = false;
};

	

