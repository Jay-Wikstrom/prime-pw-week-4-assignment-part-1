console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return name;
}
// Remember to call the function to test
console.log('Hello,', helloName('Jay'));

// 3. Function to add two numbers together & return the result
function addNumbers( firstNumber, secondNumber) {
   return firstNumber + secondNumber;
}

console.log('4 + 8 =', addNumbers(4,8));

// 4. Function to multiply three numbers & return the result
function multiplyThree(a, b, c ){
  return a * b * c;
}
console.log('2 * 3 * 4 =', multiplyThree(2, 3, 4));

// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true;
  } else
    return false;
}
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
function getLast(array){
  if (array.length > 0){
    return array[array.length - 1];
  } else {
    return 'undefined';
  }
}

console.log(getLast(['a', 'b', 'c'])); //Should log c
console.log(getLast([])); //Should log undefined


// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

function find( value, array ){
  let i = 0;
  for (i = 0; i < array.length; i++){
    if (value === array[i]){
      return true;
    }
  } //end for loop
  if (value !== array[i]){
    return false
  }
} // end function

console.log(find(15, [1, 2, 3, 4, 15, 6 ]));
console.log(find(64, [1, 2, 3, 4, 5, 6, 7]));


// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]){
    return true;
  } else {
    return false;
  }
}
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}
console.log(sumAll([3,4,2,2,2]));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function positiveArray(array){
  let newArray = [];
  for (let i = 0; i < array.length; i++){
    if (array[i] > 0){
      newArray.push(array[i]);
    }
  }
  return newArray;
}
console.log(positiveArray([3,5,6,-5,0,9]));
console.log(positiveArray([-4, 0, -1]));

// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
/*
https://edabit.com/challenge/4gzDuDkompAqujpRi
They want me to create a function with a number parameter.  I then input a number
in my parameter and it will add all positive numbers starting at 1 up to the
number I input.
*/
function addUp(num){
  let sum = 0;
  for (let i = 0; i <= num; i++){
    sum += i;
  }
  return sum;
}
console.log(addUp(10));
