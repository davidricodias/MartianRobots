/*
 * José David Rico Días
 * MartianRobots
 */

class Robot {

	constructor(position_x=null, position_y=null, orientation=null, instructions=null, is_lost=False){
		this.position_x = position_x;
		this.position_y = position_y;
		this.angle = Robot.translateOrientation(orientation);
		this.instructions = Robot.validateInstructions(instructions);
		this.is_lost = is_lost;
	}

	rotate(angle) {
		this.angle += angle;
		this.angle = this.angle % 360;
	}

	forward() {
		// East
		if (this.angle == 0) {
			this.position_x++;
		// North
		} else if (this.angle == 90) {
			this.position_y++;
		// West
		} else if (this.angle == 180) {
			this.position_x--;
		// South
		} else if (this.angle == 270) {
			this.positions_y--;
		// Error
		} else {
			throw new RangeError('Invalid angle');
		}
	}
	
	executeInstruction(map){
		instruction = this.instructions.pop()
		
		// Forward
		if (instruction == 'F'){
			this.forward();
		// Left
		} else if (instruction == 'L'){
			this.rotate(90);
		// Right
		} else if (instruction == 'R'){
			this.rotate(-90);
		// Error
		} else {
			throw new RangeError('Invalid instruction');
		}
	}

	gotLost(){
		this.is_lost = True;
	}
	
	get lost(){
		return this.is_lost;
	}

	instructionsEmpty(){
		return this.instructions.length == 0;
	}

	get x(){
		return this.position_x;
	}
	
	get y(){
		return this.position_y;
	}	

	static translateOrientation(cardinal_orientation){
		if (cardinal_orientation == 'E'){
			angle = 0;
		} else if (cardinal_orientation == 'N'){
			angle = 90;
		} else if (cardinal_orientation == 'W'){
			angle = 180;
		} else if (cardinal_orientation == 'S'){
			angle = 270;
		} else {
			throw new RangeError('Invalid orientation');
		}
		return angle;
	}

	static validateInstructions(instructions){
		// Regex for instructions parsing
		instructions_expression = new RegExp('^(F|L|R){1,100}$');
		if (instructions_expression.test(instructions)) {
			return instructions;
		} else {
			throw new Error('Invalid instructions');
		}
	}
}

// TODO: Añadir funciones de map
//		 - Salida de estado final de robot
class Mars {
	constructor(max_x_size, max_y_size){
		this.max_x_size = max_x_size;
		this.max_y_size = max_y_size;
		this.robots = [];
		
		// Initializes an empty map
		this.map = []
		for(var i=0; i < max_y_size; i++){
			this.map[i] = [];
			for(var j=0; j < max_x_size; j++){
				this.map[i][j] = undefined;
			}
		}
	}

	addRobot(position_x, position_y, orientation, instructions){
		robot = new Robot(position_x, position_y, orientation, instructions);
		this.robots.append(robot);
	}
	
	executeRobots(){
		// For each robot
		for (let robot in this.robots){
			// Execute its instructions until it gets lost or empties its stack
			while(robot.isLost() == False && robot.instructionsEmpty == False){
				last_position_x = robot.x;
				last_position_y = robot.y;
				robot.executeInstruction();
				
				// If the robot goes outside the map	
				if (!(this.validPosition(robot))) {
					robot.gotLost();
					// Marks the map with the scent
					this.map[last_position_y][last_position_x] = 'X';
				}
			}	
		}
	}

	validPosition(robot){
		if (0 <= robot.x && robot.x <= this.max_x_size &&
			0 <= robot.y && robot.y <= this.max_y_size) {
			return True;
		}
		return False;
	}

	robots(){
		return this.robots;
	}
}


// Read input



// Add robots

// Execute instructions

// Write ouput

