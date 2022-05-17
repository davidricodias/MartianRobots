const Robot = require('./Robot.js');

class Mars {
	constructor(max_x_size, max_y_size){
		this.max_x_size = max_x_size;
		this.max_y_size = max_y_size;
		this.robots = [];
		
		// Initializes an empty map
		this.map = []
		for(var i=0; i <= max_y_size; i++){
			this.map[i] = [];
			for(var j=0; j <= max_x_size; j++){
				this.map[i][j] = '.';
			}
		}
	}

	addRobot(position_x, position_y, orientation, instructions){
		var robot = new Robot(position_x, position_y, orientation, instructions, this.max_x_size, this.max_y_size);
		this.robots.push(robot);
	}
	
	executeRobots(){
		// For each robot
		for(var i=0; i<this.robots.length; i++){
			let robot = this.robots[i];
			// Execute its instructions until it gets lost or empties its stack
			while(robot.isLost() == false && robot.instructionsEmpty() == false){

				let last_position_x = robot.x;
				let last_position_y = robot.y;

				if(this.map[last_position_y][last_position_x] == 'X'){
					robot.reachedScent();
				}
				robot.executeInstruction();

				// If the robot goes outside the map	
				if (!(this.validPosition(robot))) {

					// Updates last known position of the robot
					robot.gotLost();
					robot.x = last_position_x;
					robot.y = last_position_y;

					// Marks the map with the scent
					this.map[last_position_y][last_position_x] = 'X';

				}
			}	
		}
	}

	validPosition(robot){
		if (0 <= robot.x && robot.x <= this.max_x_size &&
			0 <= robot.y && robot.y <= this.max_y_size) {
			return true;
		}
		return false;
	}

	toString(){
		let output = '';
		for(var i=0; i<this.robots.length; i++){
			output += this.robots[i].toString();
			if (i < (this.robots.length - 1)) {
				output += '\n';
			}
		}
		return output;
	}
}

module.exports = Mars;
