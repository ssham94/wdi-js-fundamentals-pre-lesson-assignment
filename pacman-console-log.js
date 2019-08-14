// pacman-console-log.js

console.log('Pac-Man eats ghosts for lunch.');


// const ghosts = ['Inky', 'Blinky', 'Pinky', 'Clyde']
// console.log(`There are ${ghosts.length} ghosts.`);
// console.log('Their names are: ');
// console.log(ghosts[0]);
// console.log(ghosts[1]);
// console.log(ghosts[2]);
// console.log(ghosts[3]);


// Object creation, usisn '{}'
// const inky = {};
// inky.color = 'Cyan';
// inky.personality = 'Shadow';
// console.log(inky);

// Object creation in one line
// const ghosts = {inky: 'Cyan', blinky: 'Red', pinky: 'Pink', clyde: 'Orange'}
// console.log(ghosts);
// console.log('')
// console.log(ghosts.inky);
// console.log(ghosts.blinky);
// console.log(ghosts.pinky);
// console.log(ghosts.clyde)

// ghostsp['inky'] is the proper way of getting the variable
// console.log(ghosts['inky'])

// for (let index = 0; index < ghosts.length; index++){
//     console.log('Pac-man eats ' + ghosts[index]);
// }

let powerPelletEaten = false;
let ghosts = 4;

while (true) {
  console.log('Ghosts remaining: ' + ghosts);

  if (powerPelletEaten == false) {
    console.log('Pac-Man eats the power pellet.');
    powerPelletEaten = true;
  } else if (ghosts > 0) {
    console.log('Pac-Man eats a ghost.');
    ghosts--;
  } else {
    break;
  }
}

console.log('Pac-Man returns home after a long day in the maze.');
console.log('')

// pacman-switch.js
var ghost = 'Blinky';
var colour;

switch (ghost) {
  case 'Inky':
    colour = 'Cyan';
    break;
  case 'Blinky':
    colour = 'Red';
    break;
  case 'Pinky':
    colour = 'Pink';
    break;
  case 'Clyde':
    colour = 'Orange';
    break;
}

console.log(`${ghost} is the colour ${colour}`);


// Named function
function eatDot() {
    console.log("MUNCH!");
  }
  
  // Anonymous function
  // Here we assign the function to a variable instead of giving it a name directly
  var eatDot = function() {
    console.log("MUNCH!");
  }
  
  // Arrow function (also anonymous)
  var eatDot = () => {
    console.log("MUNCH!");
  }

  function addScore(currentScore, eaten) {
    switch (eaten) {
    case 'dot':
      scoreToAdd = 10;
      break;
    case 'powerPellet':
      scoreToAdd = 50;
      break;
    case 'firstGhost':
      scoreToAdd = 200;
      break;
    case 'secondGhost':
      scoreToAdd = 400;
      break;
    }
  
    return currentScore + scoreToAdd;
  }
  
  let score = 0; // try this with const - it won't work!
  
  score = addScore(score, 'dot');
  score = addScore(score, 'dot');
  score = addScore(score, 'dot');
  score = addScore(score, 'powerPellet');
  score = addScore(score, 'firstGhost');
  console.log('Your score: ' + score);