//require the colors module
var color = require('colors');

//create a theme object using setTheme and pass it options
var myTheme = color.setTheme({
  silly: 'rainbow',
  input: 'grey',
  verbose: 'cyan',
  prompt: 'grey',
  info: 'green',
  data: 'grey',
  help: 'cyan',
  warn: 'yellow',
  debug: 'blue',
  error: 'red'
});

//prints red text under the error option
console.log(color.error("this is an error"));

//prints yellow text under the warn object
console.log(color.warn("this is a warning"));

//prints rainbow test under the silly object
console.log(color.silly("This is fun!"));
