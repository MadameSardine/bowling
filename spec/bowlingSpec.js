describe('A Bowling game',function(){

	var game;

	it('has frames', function (){
		game = new Game;
		expect(game.frames).toEqual([]);

	});

});

describe('A Bowling game frame',function(){

	var frame;

	it('has rolls',function(){
		frame = new Frame;
		expect(frame.rolls).toEqual([]);

	});

	it('can have a first roll',function(){
		frame = new Frame;
		roll1 = new Roll;
		frame.add_roll(roll1);
		expect(frame.rolls).toEqual([roll1]);
	});

});

