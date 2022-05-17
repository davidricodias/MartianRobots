# MartianRobots

## Product design
The product will implement a CLI using `node`.
The entry point is `index.js`.

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
