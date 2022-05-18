const fs = require('fs');

module.exports = function read(file_name){
	const data = fs.readFileSync(file_name, {encoding:'utf8', flag:'r'}).split('\n');
	var output = {};	
	
	// max_x and max_y
	max_x_y = data[0].split(" ");
	output.max_x = parseInt(max_x_y[0]);
	output.max_y = parseInt(max_x_y[1]);

	// Extracts robots
	robots = [];
	for(let i=1; i < data.length; i+=2){
		robot = {};
		robot_initial_position = data[i].split(" ");
		robot.x = parseInt(robot_initial_position[0]);
		robot.y = parseInt(robot_initial_position[1]);
		robot.orientation = robot_initial_position[2];

		robot.instructions = data[i+1];
		robots.push(robot);
	}

	output.robots = robots;

	return output;
}
