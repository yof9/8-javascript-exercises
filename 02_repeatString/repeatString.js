const repeatString = function(word, times) {
    try { 
        return word.repeat(times);
    } catch (e) {
        return "ERROR";
    } 
};

// Do not edit below this line
module.exports = repeatString;
