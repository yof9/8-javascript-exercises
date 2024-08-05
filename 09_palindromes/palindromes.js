const palindromes = function (str) {
    // Create an array of viable chars of strings to be considered
    let arrayAlphaNumeric= str.split("").filter((char) => char.match(/[a-zA-Z0-9]/));

    //slice left side of array and check all items counterpart on the right are the same
    return arrayAlphaNumeric.slice(0, arrayAlphaNumeric.length/2).every((value, index) =>{
        return value.toLowerCase() === arrayAlphaNumeric[arrayAlphaNumeric.length-1-index].toLowerCase()
    });
};

// Do not edit below this line
module.exports = palindromes;
