const findTheOldest = function(people) {
    oldestPersonAge = 0;
    oldestPersonIndex = 0;
    let age = 0;
    for (i=0; i< people.length; i++) {
        if (people[i].yearOfDeath == undefined){
            let today = new Date();
            age = today.getFullYear() - people[i].yearOfBirth;
        } else {
            age = people[i].yearOfDeath - people[i].yearOfBirth
        }
        if (age > oldestPersonAge) {
            oldestPersonAge = age;
            oldestPersonIndex = i;
        }
    }
    return people[oldestPersonIndex];
};

// Do not edit below this line
module.exports = findTheOldest;
