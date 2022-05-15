/*
 * José David Rico Días
 * MartianRobots
 */

class RobotState {
	constructor(position_x=null, position_y=null, angle=null, instructions=null, is_lost=False){
		this.position_x = position_x;
		this.position_y = position_y;
		this.angle = angle;
		this.instructions = instructions;
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
	
	executeInstruction(){
		instruction = this.instructions.pop()

		if (instruction == 'F'){
			this.forward();
		} else if (instruction == 'L'){
			this.rotate(90);
		} else if (instruction == 'R'){
			this.rotate(-90);
		} else {
			throw new RangeError('Invalid instruction');
		}
			
	}

	gotLost(){
		this.is_lost = True;
	}
}

// Read input

// Create map

// Create robots

// Execute instructions

// Write ouput

