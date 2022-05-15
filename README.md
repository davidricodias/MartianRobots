# MartianRobots

# Logic
The problem can be defined based on the next elements:
- State:
-- Map of mars
-- List of vectors of <position x, position y, angle alpha> for each robot
-- List of traces produced by lost robots
- Operators:
-- L : turns 90º to the left
-- R : turns 90º to the right
-- F : goes forward one square

## Running
To run this program you shall:
1. Clone it using git clone
2. Install the program locally using npm install
3. Run the program using node main.js < cases.txt
3.1. The file cases.txt should have the following syntax:
upper_right_coordinate_x upper_right_coordinate_y
position_x position_y orientation
...

