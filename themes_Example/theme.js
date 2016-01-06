var color = require('colors');

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

// outputs red text
console.log(color.error("this is an error"));

// outputs yellow text
console.log(color.warn("this is a warning"));

console.log(color.silly("This is fun!"));
