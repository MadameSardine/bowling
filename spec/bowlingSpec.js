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
		frame.add_roll(roll1);
		expect(frame.rolls).toEqual([roll1]);
	});

	it('can have a second roll',function(){
		roll1 = new Roll;
		roll2 = new Roll;
		frame.add_roll(roll1);
		frame.add_roll(roll2);
		expect(frame.rolls).toEqual([roll1, roll2]);

	});

});

describe ('A Bowling game roll',function(){

	var roll;

	beforeEach(function(){
		roll = new Roll;

	});

	it('has 10 pins',function(){
		expect(roll.pins_count).toEqual(10);

	});

	it('has zero pins knocked down at inception',function(){
		expect(roll.pins_down).toEqual(0);
	});


});

