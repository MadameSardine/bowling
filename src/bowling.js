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

Game.prototype.strikeBonus = function(frame) {
	var frameIndex = this.frames.indexOf(frame);
	if (frame.isStrike(this)){
		return this.frames[frameIndex +1].score(this)
	};
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


Frame.prototype.score = function() {
	return this.pinsDown.length;
};

Frame.prototype.isSpare = function() {
	return this.score(this) === 10;
};

Frame.prototype.isStrike = function(first_argument) {
	return (this.score(this) === 10 && !this.rolls[1]) ;
};

Roll.prototype.knockDown = function(pin) {
	pin.down(this);
};


Pin.prototype.down = function() {
	this.isUp = false;
};

	

