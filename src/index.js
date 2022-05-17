/*
 * José David Rico Días
 * MartianRobots
 */
const Mars = require('./modules/Mars.js');
const read = require('./modules/MarsIO.js');

// Load input
//'./data/input.txt'
const data = read('./data/input.txt');
// Create map
mars = new Mars(data.max_x, data.max_y);

// Add robots
for(var i=0; i<data.robots.length; i++){
	mars.addRobot(data.robots[i].x, data.robots[i].y, data.robots[i].orientation, data.robots[i].instructions);
}

// Execute instructions
mars.executeRobots();

// Write ouput
console.log(mars.toString());
