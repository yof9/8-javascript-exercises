const sumAll = function(a, b) {

    let sum = !Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0 ? 
    "ERROR" : a <= b ?
     (b - a + 1) * (a + b) / 2 :
     (a - b + 1) * (a + b) / 2;
    return sum;        
};                                                               

// Do not edit below this line
module.exports = sumAll;
