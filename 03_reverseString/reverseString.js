const reverseString = function(string) {
    stringArray =  string.split("");
    stringArray.reverse();
    stringReversed = stringArray.join('');
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
