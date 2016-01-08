
//require the colors module in "safe mode".
//safe mode falls back basic object/method structure.
var colors = require('colors/safe');

//console log with green text
console.log(colors.green("This is green! Green means GO!"));

//console.log with red text
console.log(colors.red("This is red! Red means STOP!"));

//console.log with cyan/blue text
console.log(colors.cyan("Buurrr, it's cold in here!"));
