const sumAll = function(Num1, Num2) {
let total = 0;
    if ((Num1 < 0 || typeof(Num1) !== "number") || (Num2 < 0 || typeof(Num2) !=="number")){
       return "ERROR"; 
    } 
    else if (Num1 > Num2) {
        let tmpNum = Num1;
        Num1 = Num2
        Num2 = tmpNum
    }

    for (i=Num1; i<=Num2; i++) {
        total += i;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
