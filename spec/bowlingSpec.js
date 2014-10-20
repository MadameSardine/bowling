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

	it('should know how many pins are down',function(){
		frame.receivePins(this);
		frame.pins[1].down(this);
		frame.assessPins(this);
		expect(frame.pinsDown.length).toEqual(1);
	});

	it('has a strike if 10 pins are knocked down in a roll',function(){
		frame.receivePins(this);
		frame.addRoll(roll1);
		roll1.strike(frame);
		frame.assessPins(this);
		expect(frame.pinsDown.length).toEqual(10);
	});

	// it('should not have a second roll if there is a strike',function(){
	// 	frame.receivePins(this);
	// 	frame.addRoll(roll1);
	// 	roll1.strike(frame);
	// 	frame.assessPins(this);
	// 	expect(frame.addRoll(roll2).throwError("Strike already")).toBe(true);

	// });


});

describe('A roll',function(){

	var roll;
	var pin;
	var frame;

	beforeEach(function(){
		roll = new Roll;

	});

	it('can knock down pins',function(){
		pin = new Pin;
		roll.knowckDown(pin)
		expect(pin.isUp).toBe(false);

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
 		pin.down(this);
 		expect(pin.isUp).toBe(false);
 	});

});

