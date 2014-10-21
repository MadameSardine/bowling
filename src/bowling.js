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

Game.prototype.addFrame = function(frame) {
	this.frames.push(frame);
};
Game.prototype.totalScore = function(frames) {
	return 0;
};

Frame.prototype.addRoll = function(roll) {
	this.rolls.push(roll)

};


Frame.prototype.assessPins = function() {
	for (i = this.pins.length-1 ; i >=0 ; i--)
		if(this.pins[i].isUp === false){
			this.pinsDown.push(this.pins[i])
		};
	for (i = this.pins.length-1 ; i >=0 ; i--)
		if(this.pins[i].isUp === false){
		this.pins.splice(i, 1)
	};
};

Frame.prototype.receivePins = function() {
	for (i = 0 ; i <10 ; i++)
		this.pins.push(new Pin);
	
};


// Frame.prototype.strike = function() {
// 	this.pins.forEach(function(pin) {
// 		pin.down(this);
// 	}) ;
// };

Frame.prototype.score = function() {
	return this.pinsDown.length;
};

Pin.prototype.down = function() {
	this.isUp = false;
};

	

