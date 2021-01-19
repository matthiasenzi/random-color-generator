const randomColor = require('randomcolor'); // import the script random color
const kuler = require('kuler'); // import the script color text

let col = process.argv[3]; // set a variable that uses the 3rd user input
let lum = process.argv[2]; // set a variable that uses the 2nd user input

// hand over the user input to the random color function
const color = randomColor({
  luminosity: lum,
  hue: col,
});

// output in the terminal
const str = kuler(
  `
  ########################################
  ########################################
  ########################################
  #####                              #####
  #####          ` +
    randomColor() +
    `             #####
  #####                              #####
  ########################################
  ########################################
  ########################################`,
  color,
);

console.log(str);
