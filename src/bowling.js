function Game(){
	this.frames = [];

};

function Frame(){
	this.rolls = [];
	this.pins = [];
	this.pinsDown = [];
};

function Roll(){
	this.frame = null;
};

function Pin(){
	this.isUp = true;
};

Game.prototype.addFrame = function(frame) {
	this.frames.push(frame);
};

Game.prototype.totalScore = function() {
	var total = 0;
	for (i = 0 ; i < this.frames.length ; i++)
		{total += this.frames[i].score(this)
		};
		return total;
};

Frame.prototype.addRoll = function(roll) {
	this.rolls.push(roll);
	roll.frame = this;
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

Roll.prototype.knockDown = function(pin) {
	pin.down(this);
};

Roll.prototype.strike = function() {
	for (i = 0 ; i <10 ; i++)
		this.knockDown(this.frame.pins[i]);
	
};

Pin.prototype.down = function() {
	this.isUp = false;
};

	

