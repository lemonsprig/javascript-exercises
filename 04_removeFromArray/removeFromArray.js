const removeFromArray = function(myArray, ...mindex) {
    let changedArray = [];
    for(i=0; i < myArray.length; i++) {
        if (mindex.includes(myArray[i])) {

        } else {
            changedArray.push(myArray[i]);
        }
    }
    return changedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
