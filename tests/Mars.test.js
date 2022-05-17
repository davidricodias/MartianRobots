const Mars = require('../src/modules/Mars.js');

// EC_V_X_SIZE
test('Inferior limit of valid equivalence class for max_x_size', () => {
	mars = undefined;
	mars = new Mars(0, 10);
	expect(mars).toBeDefined();
});

test('Superior limit of valid equivalence class for max_x_size', () => {
	mars = undefined;
	mars = new Mars(50, 10);
	expect(mars).toBeDefined();
});

test('Superior limit of invalid equivalence class for max_x_size', () => {
	expect(() => { mars = new Mars(-1, 10) }).toThrow('Invalid coordinates');
});

test('Inferior limit of invalid equivalence class for max_x_size', () => {
	expect(() => { mars = new Mars(51, 10) }).toThrow('Invalid coordinates');
});

// EC_V_MAX_Y_SIZE
test('Inferior limit of valid equivalence class for max_y_size', () => {
	mars = undefined;
	mars = new Mars(10, 0);
	expect(mars).toBeDefined();
});

test('Superior limit of valid equivalence class for max_y_size', () => {
	mars = undefined;
	mars = new Mars(10, 50);
	expect(mars).toBeDefined();
});

test('Superior limit of invalid equivalence class for max_y_size', () => {
	expect(() => { mars = new Mars(10, -1) }).toThrow('Invalid coordinates');
});

test('Inferior limit of invalid equivalence class for max_y_size', () => {
	expect(() => { mars = new Mars(10, 51) }).toThrow('Invalid coordinates');
});


// Robot movements
test('Robot leaves scent', () => {
	mars = new Mars(0, 0);
	mars.addRobot(0, 0, 'N', 'F');
	mars.executeRobots();
	expect(mars.map[0][0]).toBe('X');
	expect(mars.toString()).toBe('0 0 N LOST');
});

test('Robot does not fall of map', () => {
	mars = new Mars(1, 1);
	mars.addRobot(0, 0, 'N', 'FF'); // Leaves mark
	mars.addRobot(0, 0, 'N', 'FF'); // Shouldn't get lost
	mars.executeRobots();
	expect(mars.toString()).toBe('0 1 N LOST' + '\n' + '0 1 N');
});

test('Robot does not fall of map and can still execute instructions', () => {
	mars = new Mars(1, 1);
	mars.addRobot(0, 0, 'N', 'FF');
	mars.addRobot(0, 0, 'N', 'FFFFRF');
	mars.executeRobots();
	expect(mars.toString()).toBe('0 1 N LOST' + '\n' + '1 1 E');
});
