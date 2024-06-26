const removeFromArray = function() {
    
    const args = [...arguments]
    return args[0].filter((value) => !(args.slice(1).includes(value)));   

}

// Do not edit below this line
module.exports = removeFromArray;
