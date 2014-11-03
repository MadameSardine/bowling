describe('A Bowling game pin',function(){
 	 
 	var pin;

	beforeEach(function(){
		pin = new Pin;

	});

 	it('is up',function(){
 		expect(pin.isUp).toBe(true);

 	});

 	it('can be knocked down',function(){
 		pin.down(this);
 		expect(pin.isUp).toBe(false);
 	});

});

describe ('A roll',function(){
	var roll;

	beforeEach(function(){
		roll = new Roll
	});

	it('can knock down pins', function(){
		pin = new Pin
		roll.knockDown(pin);
		expect(pin.isUp).toBe(false);
	});

	it('has a score of zero at inception',function(){
		expect(roll.rollScore).toEqual(0)
	});

	it('knows how many pins it has knocked down',function(){
		pin1 = new Pin;
		pin2 = new Pin;
		roll.knockDown(pin1)
		expect(roll.rollScore).toEqual(1)
	});

	it('is not a strike by default',function(){
		expect(roll.isStrike).toBe(false);
	});

	it('is a strike if it knocks down 10 pins',function(){
		pin = new Pin;
		roll.rollScore = 9
		roll.knockDown(pin)
		expect(roll.isStrike).toBe(true);
	});

});

describe('A frame', function(){
	var frame;

	beforeEach(function(){
		frame = new Frame;
		roll1 = new Roll;
		roll2 = new Roll;
	});

	it('has a score of zero at inception',function(){
		expect(frame.frameScore).toEqual(0);
	});

	it("doesn't have a roll at inception",function(){
		expect(frame.roll1).toBe(null)
		expect(frame.roll2).toBe(null)
	});

	it('can add a first roll',function(){
		frame.addRoll(roll1)
		expect(frame.roll1).toEqual(roll1);
	});

	it('has a second roll',function(){
		frame.addRoll(roll1)
		frame.addRoll(roll2)
		expect(frame.roll2).toEqual(roll2);
	});

	it('can calculate its score',function(){
		frame.addRoll(roll1)
		frame.addRoll(roll2)
		frame.roll1.rollScore = 1;
		frame.roll2.rollScore = 2;
		frame.calculateScore();
		expect(frame.frameScore).toEqual(3);
	});

	it("doesn't have a strike by default",function(){
		expect(frame.hasStrike).toBe(false);
	});

	it('knows if it has a strike',function(){
		frame.addRoll(roll1)
		frame.addRoll(roll2)
		frame.roll1.rollScore = 10;
		frame.roll2.rollScore = 0;
		frame.calculateScore();
		expect(frame.hasStrike).toBe(true);
	});

	it("doesn't have a second roll if the first roll is a strike",function(){
		frame.addRoll(roll1);
		frame.roll1.isStrike = true;
		frame.addRoll(roll2)
		expect(frame.roll2).toEqual(null)
	});

	it("doesn't have a spare by default",function(){
		expect(frame.hasSpare).toBe(false);
	});

	it('knows if it has a spare',function(){
		frame.addRoll(roll1)
		frame.addRoll(roll2)
		frame.roll1.rollScore = 1;
		frame.roll2.rollScore = 9;
		frame.calculateScore();
		expect(frame.hasStrike).toBe(false);
		expect(frame.hasSpare).toBe(true);
	});


});

