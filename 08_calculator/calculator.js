const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	let sum = 0;
  for(const number of numbers){
    sum += number;
  }
  return sum;
};

const multiply = function(numbers) {
  product = numbers[0]
  for (i=1; i < numbers.length; i++){
    product *= numbers[i] 
  }
  return product;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(number) {
  if (number === 0) {
    return 1;
  } 
  else {
    let product = 1;
	  for(i=1; i <= number; i++) {
      product *= i ;
    }
    return product;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
