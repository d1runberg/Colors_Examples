var colors = require('colors/safe');
var string = '';
console.log(colors.bgGreen("A cool graph using background colors!"))
setInterval(function(){
   for(var x= 0; x <Math.random()*100; x++){
      string = string+' ';
   };
   console.log(colors.bgRed(string));
   string = '';
},200);
