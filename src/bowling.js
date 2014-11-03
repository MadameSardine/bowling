
function Pin(){
	this.isUp = true;
};

function Roll(){
	this.rollScore = 0;
	this.isStrike = false;
};

function Frame(){
	this.frameScore = 0;
	this.roll1 = null;
	this.roll2 = null;
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

Frame.prototype.addRoll = function(roll) {
	if (this.roll1) {this.roll2 = roll  }
	else {this.roll1 = roll};
};



	

