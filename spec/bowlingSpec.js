describe('A Bowling game',function(){

	var game;

	it('has frames', function (){
		game = new Game;
		expect(game.frames).toEqual([]);

	});

});

describe('A Bowling game frame',function(){

	var frame;
	beforeEach(function(){
		frame = new Frame;

	});


	it('has rolls',function(){
		expect(frame.rolls).toEqual([]);

	});

	it('can have a first roll',function(){
		roll1 = new Roll;
		frame.addRoll(roll1);
		expect(frame.rolls).toEqual([roll1]);
	});

	it('can have a second roll',function(){
		roll1 = new Roll;
		roll2 = new Roll;
		frame.addRoll(roll1);
		frame.addRoll(roll2);
		expect(frame.rolls).toEqual([roll1, roll2]);

	});

});

describe ('A Bowling game roll',function(){

	var roll;

	beforeEach(function(){
		roll = new Roll;

	});

	it('has 10 pins',function(){
		expect(roll.pinsCount).toEqual(10);

	});

	it('has zero pins knocked down at inception',function(){
		expect(roll.pinsDown).toEqual(0);
	});

	it('can have pins knocked down during the game',function(){
		roll.knockDownPins(1)
		expect(roll.pinsDown).toEqual(1);
	});


});

describe('A Bowling game pin',function(){
 	 
 	var pin;

	beforeEach(function(){
		pin = new Pin;

	});


 	it('is up',function(){
 		expect(pin.isUp).toBe(true);

 	});

 	it('can be knocked down',function(){
 		pin.knockedDown(this);
 		expect(pin.isUp).toBe(false);
 	});

});

