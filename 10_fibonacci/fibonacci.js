const fibonacci = function(n) {
    n = +n
    if (n === 0) {return 0}
    else if (n < 0) {return "OOPS"}
    
    let nth = preceding = 1;
    for (i = 1; i < n-1; i++){
        [preceding, nth] = [nth, nth+preceding];
    }
    return nth;
};

// Do not edit below this line
module.exports = fibonacci;
