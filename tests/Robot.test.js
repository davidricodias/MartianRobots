const Robot = require('../src/modules/Robot.js');
const Mars = require('../src/modules/Mars.js');

// Valid tests

test('Superior limit of valid equivalence class for position_x, position_y, max_x_size, max_x_size', () => {
	robot = undefined;
	robot = new Robot(50, 50, 'N', 'LLLL', 50, 50);
	expect(robot).toBeDefined();
	expect(robot.toString()).toBe("50 50 N");
});

test('Inferior limit of valid equivalence class for position_x, position_y, max_x_size, max_x_size', () => {
	robot = undefined;
	robot = new Robot(0, 0, 'N', 'LLLL', 0, 0);
	expect(robot).toBeDefined();
	expect(robot.toString()).toBe("0 0 N");
});

test('Accepts north orientation', () => {
	robot = undefined;
	robot = new Robot(10, 10, 'N', 'LLLL', 50, 50);
	expect(robot).toBeDefined();
	expect(robot.toString()).toBe("10 10 N");
});

test('Accepts west orientation', () => {
	robot = undefined;
	robot = new Robot(10, 10, 'W', 'LLLL', 50, 50);
	expect(robot).toBeDefined();
	expect(robot.toString()).toBe("10 10 W");
});

test('Accepts south orientation', () => {
	robot = undefined;
	robot = new Robot(10, 10, 'S', 'LLLL', 50, 50);
	expect(robot).toBeDefined();
	expect(robot.toString()).toBe("10 10 S");
});

test('Accepts east orientation', () => {
	robot = undefined;
	robot = new Robot(10, 10, 'E', 'LLLL', 50, 50);
	expect(robot).toBeDefined();
	expect(robot.toString()).toBe("10 10 E");
});

test('Inferior limit of valid equivalence class for instructions. L case', () => {
	robot = undefined;
	robot = new Robot(10, 10, 'E', 'L', 50, 50);
	expect(robot).toBeDefined();
	expect(robot.toString()).toBe("10 10 E");
});

test('Inferior limit of valid equivalence class for instructions. F case', () => {
	robot = undefined;
	robot = new Robot(10, 10, 'E', 'F', 50, 50);
	expect(robot).toBeDefined();
	expect(robot.toString()).toBe("10 10 E");
});

test('Inferior limit of valid equivalence class for instructions. R case', () => {
	robot = undefined;
	robot = new Robot(10, 10, 'E', 'R', 50, 50);
	expect(robot).toBeDefined();
	expect(robot.toString()).toBe("10 10 E");
});

test('Superior limit of valid equivalence class for instructions', () => {
	robot = undefined;
	
	// 100 instructions
	robot = new Robot(10, 10, 'E', 'FFLFLFLFLFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRF', 50, 50);
	expect(robot).toBeDefined();
	expect(robot.toString()).toBe("10 10 E");
});

// Invalid tests

test('Superior limit of invalid equivalence class for position_x', () => {
	expect(() => { robot = new Robot(-1, 50, 'N', 'LLLL', 50, 50) }).toThrow('Invalid position');
});

test('Superior limit of invalid equivalence class for position_y', () => {
	expect(() => { robot = new Robot(50, -1, 'N', 'LLLL', 50, 50) }).toThrow('Invalid position');
});

test('Superior limit of invalid equivalence class for max_x_size', () => {
	expect(() => { robot = new Robot(50, 50, 'N', 'LLLL', -1, 50) }).toThrow('Invalid coordinates');
});

test('Superior limit of invalid equivalence class for max_y_size', () => {
	expect(() => { robot = new Robot(50, 50, 'N', 'LLLL', 50, -1) }).toThrow('Invalid coordinates');
});


test('Inferior limit of invalid equivalence class for instructions', () => {
	robot = undefined;
	
	// 100 instructions
	expect( () => { robot = new Robot(10, 10, 'E', 'FFFLFLFLFLFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRFRF', 50, 50); }).toThrow('Invalid instructions');
});

test('Superior limit of invalid equivalence class for instructions', () => {
	robot = undefined;
	
	// 100 instructions
	expect( () => { robot = new Robot(10, 10, 'E', '', 50, 50); }).toThrow('Invalid instructions');
});
