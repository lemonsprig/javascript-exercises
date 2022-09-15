const palindromes = function (text) {
 text = text.toLowerCase()
 text = text.replace(/[^A-Za-z]/g,'')
 reverseText = text.split('').reverse().join('')
 if (text === reverseText) {
    return true;
 } 
 else 
 {
    return false;
 }
};

// Do not edit below this line
module.exports = palindromes;
