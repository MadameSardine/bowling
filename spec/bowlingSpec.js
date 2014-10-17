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
	it ('has no pins at inception',function(){
		expect(roll.pins).toEqual([]);
	});

	it('should receive 10 pins when playing',function(){
		roll.receivePins(this);
		expect(roll.pins.length).toEqual(10);

	});

	it('has zero pins knocked down at inception',function(){
		roll.receivePins(this);
		expect(roll.pinsDown).toEqual([]);
	});

	// it('can have pins knocked down during the game',function(){
	// 	roll.knockDownPin(this);
	// 	expect(roll.pinsDown.length).toEqual(1);
	// });

	it('should know how many pins are down',function(){
		roll.receivePins(this);
		roll.pins[1].knockedDown(this);
		roll.assessPins(this);
		expect(roll.pinsDown.length).toEqual(1);
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

