const reverseString = function(txt) {
    let reversedTxt = "";
    for (const char of txt) {
        reversedTxt = char + reversedTxt;
    }
    return reversedTxt;
};

// Do not edit below this line
module.exports = reverseString;
