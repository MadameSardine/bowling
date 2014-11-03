
function Pin(){
	this.isUp = true;
};

function Roll(){
	this.type = "roll";
	this.rollScore = 0;
	this.isStrike = false;
};

function Frame(){
	this.type = 'frame';
	this.frameScore = 0;
	this.roll1 = new Roll;
	this.roll2 = new Roll;
	this.hasStrike = false;
	this.hasSpare = false;
}


Pin.prototype.down = function() {
	this.isUp = false;
};

Roll.prototype.knockDown = function(pin) {
	pin.down();
	this.rollScore +=1;
	if(this.rollScore === 10){this.isStrike = true};
};

Frame.prototype.calculateScore = function() {
	this.frameScore = this.roll1.rollScore + this.roll2.rollScore
	if (this.roll1.rollScore === 10){this.hasStrike = true}
	if (this.frameScore === 10) {this.hasSpare = true}
};



	

