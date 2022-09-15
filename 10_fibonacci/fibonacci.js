const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    } else {
        let value1 = 1;
        let value2 = 1;
        let value = 1;
        num = Number(num);
        for (i=3; i<=num; i++){
            value = value1 + value2;
            value1 = value2;
            value2 = value;
        }
    return value;
    }
};

// Do not edit below this line
module.exports = fibonacci;
