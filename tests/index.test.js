const Mars = require('../src/modules/Mars.js');
const read = require('../src/modules/MarsIO.js');
const fs = require('fs');

// Check ouput
test('Example provided in doc', () => {
	// Load input
	const data = read('./data/input.txt');
	const expected_data = fs.readFileSync('./tests/expected1.txt', {encoding:'utf8', flag:'r'});

	// Create map
	mars = new Mars(data.max_x, data.max_y);

	// Add robots
	for(var i=0; i<data.robots.length; i++){
		mars.addRobot(data.robots[i].x, data.robots[i].y, data.robots[i].orientation, data.robots[i].instructions);
	}

	// Execute instructions
	mars.executeRobots();

	expect(mars.toString()).toBe(expected_data);
});
