const palindromes = function (str) {
    let arrayAlphaNumeric= str.split("").filter((char) => char.match(/[a-zA-Z0-9]/));
    return arrayAlphaNumeric.slice(0, arrayAlphaNumeric.length/2).every((value, index) =>{
        return value.toLowerCase() === arrayAlphaNumeric[arrayAlphaNumeric.length-1-index].toLowerCase()
    });
};

// Do not edit below this line
module.exports = palindromes;
