# MartianRobots

## Product design
The product will implement a CLI programmed in `node`.

The entry point is `index.js`.

The design follows the following architecture:

![MartianRobots-2](https://user-images.githubusercontent.com/61278402/169009993-47127341-39ba-4b59-8b58-144039612352.jpg)


For the design I followed the encapsulation principle, By separating responsabilities, I created the classes:
- _Mars_, which contains methods to create the Mars surface, add robots and execute all its instructions.
- _Robot_, which contains methods to create a robot, validate and execute its instructions and change its state. It's important to note that in order to expand the robot capabilities in the future, the orientation was defined as an angle, that needs to be translated to a cardinal orientation for the moment.
- 
To manage the files, _MarsIO_ was created, in order to encapsulate the reading needs.
- _MarsIO_, which contains the `read` function, able to read `input.txt`.
If the reading was succesful, read should return an object with the following structure:
```
{
  max_x: <int>,
  max_y: <int>,
  robots: [
    { x: <int>, y: <int>, orientation: <str>, instructions: <str> },
    { x: <int>, y: <int>, orientation: <str>, instructions: <str> },
    { x: <int>, y: <int>, orientation: <str>, instructions: <str> },
    ...
  ]
}
```
## Installing
To install this program you shall:
1. Clone it using git clone:
```
git clone https://github.com/davidricodias/MartianRobots.git
```
2. Go inside the folder
  ```
  cd MartianRobots
  ```
3. Install the dependencies using npm
  ```
  npm install
  ```
4. Test a correct installation
  ```
  npm test
  ```
## Running
The basic input provided is written on `MartianRobots/data/input.txt`. You can check this specific input using
```
npm start
```
which will start the main program (`MartianRobots/src/index.js`).
### Giving the program an arbitrary input
You should modify `MartianRobots/src/index.js`. Be aware that the software is really sensitive to changes in the input, so take into account non-printable characters when editing the file.
