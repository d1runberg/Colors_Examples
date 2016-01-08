//require the colors module
var colors = require('colors/safe');

//create an empty string to use as a "bar" for the bar chart
var string = '';

//log startup comment over the console with a green background
console.log(colors.bgGreen("A cool graph using background colors!"))

//use setInterval and a for loop to create a random length and print it out over the console.
setInterval(function(){
   //assign a random length to string using a for loop and Math.random()
   for(var x= 0; x <Math.random()*100; x++){
      string = string+' ';
   };

   //log string of ' ' in a red background
   console.log(colors.bgRed(string));

   //reassign string as an empty string
   string = '';
//completion of the setInterval with repeat set to 200ms
},200);
