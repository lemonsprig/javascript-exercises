const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(numbers) {
	/*using loops
  let sum = 0;
  for(const number of numbers){
    sum += number;
  } */
  /*using reduce */
  total = numbers.reduce((previousValue, currentValue) => previousValue + currentValue,0);
  return total;
};

const multiply = function(numbers) {
  /*using a loop to iterate overt the array
  product = numbers[0]
  for (i=1; i < numbers.length; i++){
    product *= numbers[i] 
  }*/
  
  /*Using array.reduce method
  product = numbers.reduce((previousValue, currentValue) => previousValue * currentValue);
  return product;*/

  // using the Array.reduce method coupled with a ternary operator. Numbers.length is used as it says if numbers.length is true (non zero) prcoess the reduce, otherwise return 0
  return numbers.length ? numbers.reduce((previousValue, currentValue) => previousValue * currentValue) : 0;

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
