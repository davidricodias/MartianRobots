class Robot {

	constructor(position_x=null, position_y=null, orientation=null, instructions=null, max_x_size=null, max_y_size=null, is_lost=false){
		// State
		this.position_x = position_x;
		this.position_y = position_y;
		this.angle = Robot.translateCardinalToAngle(orientation);
		this.instructions = Robot.validateInstructions(instructions).split("");

		// Aux properties
		this.max_x_size = max_x_size;
		this.max_y_size = max_y_size;
		this.is_lost = is_lost;
		this.reached_scent = false;
	}

	rotate(angle) {
		this.angle += (angle + 360);
		this.angle = this.angle % 360;
	}

	forward() {
		// East
		if (this.angle == 0) {
			if( !(this.reached_scent && (this.position_x + 1) > this.max_x_size)){
				this.position_x++;
			}
		// North
		} else if (this.angle == 90) {
			if( !(this.reached_scent && (this.position_y + 1) > this.max_y_size)){
				this.position_y++;
			}
		// West
		} else if (this.angle == 180) {
			if( !(this.reached_scent && (this.position_x - 1) < 0)){
				this.position_x--;
			}
		// South
		} else if (this.angle == 270) {
			if( !(this.reached_scent && (this.position_y - 1) < 0)){
				this.position_y--;
			}
		// Error
		} else {
			throw new RangeError('Invalid angle');
		}
		
		this.reached_scent = false;
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

	reachedScent(){
		this.reached_scent = true;
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
		var output = this.position_x.toString() + " " + this.position_y.toString() + " " + Robot.translateAngleToCardinal(this.angle); 
		if (this.is_lost){
			output += (" " + "LOST");
		}		
		return output;
	}

	static translateCardinalToAngle(cardinal_orientation){
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
	
	static translateAngleToCardinal(angle){
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

	static validateInstructions(instructions){
		// Regex for instructions parsing
		let instructions_expression = new RegExp('^(F|L|R){1,100}$');
		if (instructions_expression.test(instructions)) {
			return instructions;
		} else {
			throw new Error('Invalid instructions');
		}
	}
}

module.exports = Robot;
