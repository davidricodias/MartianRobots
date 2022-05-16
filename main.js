/*
 * José David Rico Días
 * MartianRobots
 */

class Robot {

	constructor(position_x=null, position_y=null, orientation=null, instructions=null, is_lost=false){
		this.position_x = position_x;
		this.position_y = position_y;
		this.angle = this.translateCardinalToAngle(orientation);
		this.instructions = this.validateInstructions(instructions).split("");
		this.is_lost = is_lost;
	}

	rotate(angle) {
		this.angle += (angle + 360);
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
			this.position_y--;
		// Error
		} else {
			throw new RangeError('Invalid angle');
		}
	}
	
	executeInstruction(){
		let instruction = this.instructions.shift()
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
		this.is_lost = true;
	}
	
	isLost(){
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

	set x(position){
		this.position_x = position;
	}

	set y(position){
		this.position_y = position;
	}

	// Function overloading
	toString(){
		var output = this.position_x.toString() + " " + this.position_y.toString() + " " + this.translateAngleToCardinal(this.angle); 
		if (this.is_lost){
			output += (" " + "LOST");
		}		
		return output;
	}

	translateCardinalToAngle(cardinal_orientation){
		let angle = -1;
		if (cardinal_orientation == 'E'){
			angle = 0;
		} else if (cardinal_orientation == 'N'){
			angle = 90;
		} else if (cardinal_orientation == 'W'){
			angle = 180;
		} else if (cardinal_orientation == 'S'){
			angle = 270;j
		} else {
			throw new RangeError('Invalid orientation');
		}
		return angle;
	}
	
	translateAngleToCardinal(angle){
		if(angle == 0){
			return 'E';
		} else if (angle == 90){
			return 'N';
		} else if (angle == 180){
			return 'W';
		} else if (angle == 270){
			return 'S';
		} else {
			throw new RangeError('Invalid angle');
		}
	}

	validateInstructions(instructions){
		// Regex for instructions parsing
		let instructions_expression = new RegExp('^(F|L|R){1,100}$');
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
		for(var i=0; i <= max_y_size; i++){
			this.map[i] = [];
			for(var j=0; j <= max_x_size; j++){
				this.map[i][j] = '.';
			}
		}
	}

	addRobot(position_x, position_y, orientation, instructions){
		var robot = new Robot(position_x, position_y, orientation, instructions);
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

	robots(){
		return this.robots;
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


// Read input


// Example
// Create map
mars = new Mars(5, 3);
mars.addRobot(1, 1, 'E', 'RFRFRFRF');
mars.addRobot(3, 2, 'N', 'FRRFLLFFRRFLL');
mars.addRobot(0, 3, 'W', 'LLFFFRFLFL');
mars.executeRobots();
// Add robots

// Execute instructions

// Write ouput
console.log(mars.toString());
