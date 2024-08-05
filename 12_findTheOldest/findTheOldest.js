const findTheOldest = function(people) {
    let oldest = people[0], currentDate = new Date();
    for (i=0; i < people.length; i++) {
        if ((people[i].yearOfDeath || currentDate.getFullYear()) - people[i].yearOfBirth > 
        (oldest.yearOfDeath || currentDate.getFullYear()) - oldest.yearOfBirth) {
            oldest = people[i];
        }
    }
    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
