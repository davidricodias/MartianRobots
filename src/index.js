/*
 * José David Rico Días
 * MartianRobots
 */
const Mars = require('./modules/Mars.js');

// Load input
const fs = require('fs');
const data = fs.readFileSync('./data/input.txt', {encoding:'utf8', flag:'r'}).split('\n');

// Create map
let max_x = data[0].split(" ")[0];
let max_y = data[0].split(" ")[1];
mars = new Mars(max_x, max_y);

// Add robots
for(var i=1; i<data.length; i+=2){
	initial_position = data[i].split(" ");
	instructions = data[i+1];
	mars.addRobot(initial_position[0], initial_position[1], initial_position[2], instructions);
}

// Execute instructions
mars.executeRobots();

// Write ouput
console.log(mars.toString());
