const ftoc = function(temperature) {
let conversion = (temperature-32)*5/9; 
Math.round(conversion);
return conversion;
};

const ctof = function(temperature) {
let conversion = temperature*9/5+32; 
Math.round(conversion);
return conversion;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
