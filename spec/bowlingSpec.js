describe('A Bowling game',function(){

	var game;
	beforeEach(function(){
		game = new Game;
		frame = new Frame;
	});

	it('has no frames at inception', function (){
		expect(game.frames).toEqual([]);
	});

	it('can add a frame',function(){
		game.addFrame(frame);
		expect(game.frames).toEqual([frame]);
	});

	it('total score should be zero at inception',function(){
		game.addFrame(frame);
		expect(game.totalScore(this)).toEqual(0);
	});

	it('can calculate total score',function(){
		frame.receivePins(this);
		frame.pins[0].down(this);
		frame.assessPins(this);
		game.addFrame(frame);
		expect(game.totalScore(this)).toEqual(1);
	});



});

describe('A Bowling game frame',function(){

	var frame;
	beforeEach(function(){
		frame = new Frame;
		roll1 = new Roll;
		roll2 = new Roll;

	});


	it('has rolls',function(){
		expect(frame.rolls).toEqual([]);

	});

	it('can have a first roll',function(){
		frame.addRoll(roll1);
		expect(frame.rolls).toEqual([roll1]);
	});

	it('can have a second roll',function(){
		frame.addRoll(roll1);
		frame.addRoll(roll2);
		expect(frame.rolls).toEqual([roll1, roll2]);

	});

	it ('has no pins at inception',function(){
		expect(frame.pins).toEqual([]);
	});

	it('should receive 10 pins when playing',function(){
		frame.receivePins(this);
		expect(frame.pins.length).toEqual(10);

	});

	it('has zero pins knocked down at inception',function(){
		frame.receivePins(this);
		expect(frame.pinsDown).toEqual([]);
	});


	it('knows how many pins are knocked down',function(){
		frame.receivePins(this);
		frame.pins[0].down(this);
		frame.assessPins(this);
		expect(frame.pinsDown.length).toEqual(1);
	});

	it('knows how many pins are up',function(){
		frame.receivePins(this);
		frame.pins[0].down(this);
		frame.assessPins(this);
		expect(frame.pins.length).toEqual(9);
	});


	it('knows its score',function(){
		frame.receivePins(this);
		frame.pins[0].down(this);
		frame.assessPins(this);
		expect(frame.score(this)).toEqual(1);
	});

});

describe('A roll',function(){

	var roll;

	beforeEach (function(){
		pin = new Pin;
		roll1 = new Roll;
	});

	it('can be added to a frame',function(){
		frame = new Frame;
		frame.addRoll(roll1)
		expect(roll1.frame).toEqual(frame);
	});

	it('can knock down a pin',function(){
		roll1.knockDown(pin);
		expect(pin.isUp).toBe(false);
	});

	// it('has knocked down 10 pins if it is a strike',function(){
	// 	frame = new Frame;
	// 	frame.receivePins(this);
	// 	frame.addRoll(roll1);
	// 	frame.rolls[0].strike(this);
	// 	frame.assessPins(this);
	// 	expect(frame.pinsDown.length).toEqual(10);
	// });

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
 		pin.down(this);
 		expect(pin.isUp).toBe(false);
 	});

});

