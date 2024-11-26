// First Example
const array1 = ['vanilla', 'chocolate', 'strawberry'];

const array2 = array1.map((currentElement) => {
  return currentElement + ' ice cream';
});
console.log('Example 1 Solution')
console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']
// First Problem
// Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.

// Your code here
const newNums = nums.map((currentElement) => {
    return currentElement * 2
})
console.log("Problem 1 Solution \n")
console.log(newNums)

// Second Example
const petsArray = ['Rover', 'Snuffles', 'Toto', 'Spot'];

const [firstPet, secondPet] = petsArray;


console.log('Second examples\n')
console.log(firstPet); // 'Rover'
console.log(secondPet); // 'Snuffles'

// Equivalent in traditional bracket notation:
console.log(petsArray[0]); // 'Rover'
console.log(petsArray[1]); // 'Snuffles'


// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const [firstTopping, secondTopping] = pizzaToppings

console.log('Second Solution \n')
console.log(firstTopping)
console.log(secondTopping)
// Object destructuring review
console.log('Object Destructuring review \n')
const person = {
    name: 'Alex',
    role: 'Software Engineer',
  };
  
  // Object destructuring:
  const { name, role } = person;
  
  console.log(name); // 'Alex'
  console.log(role); // 'Software Engineer'
  
  // Equivalent in traditional dot notation:
  console.log(person.name); // 'Alex'
  console.log(person.role); // 'Software Engineer'
  
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Your code here
console.log('Object Destructuring Answer \n') 

const {make,model} = car
console.log(make)
console.log(model)


// Spread lesson
const originalArray = [1, 2, 3];
const duplicateArray = [...originalArray];

console.log(duplicateArray); // [1, 2, 3]

const originalArrays = [1, 2, 3];
const referenceArray = originalArrays; // referenceArray is now a reference to originalArray

referenceArray.push(4); // Modifying referenceArray also modifies originalArray
console.log(originalArrays); // [1, 2, 3, 4]

const fruits = ['apple', 'orange', 'banana'];
const vegetables = ['broccoli', 'carrot', 'spinach'];

const fruitsAndVegetables = [...fruits, ...vegetables];

console.log(fruitsAndVegetables); // ['apple', 'orange', 'banana', 'broccoli', 'carrot', 'spinach']

// Exercise 4

// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

const pizzaToppingss = ['Pineapple', 'Olives', 'Anchovies'];

// Your code here
const controversialPizzaToppings = [...pizzaToppingss]


console.log('Exercise 4 solution here \n')
console.log(controversialPizzaToppings)


// Spreading objects

// const originalObject = {
//     foo: 'Hello',
//     bar: 100,
//   };
  
//   const clonedObject = { ...originalObject };
//   console.log('Clone: ', clonedObject); // { foo: 'Hello', bar: 100 }

//   const originalObject = {
//     foo: 'Hello',
//     bar: 100,
//   };
  
//   const clonedObject = originalObject;
//   clonedObject.foo = 'Goodbye';
  
//   console.log(originalObject); // { foo: 'Goodbye', bar: 100 }
  
  const originalObject = {
    foo: 'Hello',
    bar: 100,
  };
  
  // Copy the properties of originalObject:
  const clonedObject = { ...originalObject };
  
  // Update the properties of clonedObject:
  clonedObject.foo = 'Goodbye';
  clonedObject.bar = 0;
  
  console.log('Original: ', originalObject); // { foo: 'Hello', bar: 100 }
  console.log('Clone: ', clonedObject); // { foo: 'Goodbye', bar: 0 }
  


  // Duplicate the following object and spread its values into a new variable `myCar`.

const cars = {
    make: 'Audi',
    model: 'q5',
  };
  
  // Change the `model` property of `myCar` to 'q7'. Log both objects.
  
  // Your code here
  const myCar = {...cars}
  myCar.model = 'q7'


  console.log('Exercise 5 Solution Below\n')
  console.log('Original Car: ', cars)
  console.log('My Car: ', myCar)


//   Dynamic Keys in Objects
// const fruitInventory = {
//     apples: 2,
//     oranges: 4,
//   };
  
//   const selectedFruit = 'apples'; // Variable as a dynamic key
//   const selectedFruitCount = fruitInventory[selectedFruit];
  
//   console.log(selectedFruitCount); // 2
  
  const fruitType = 'bananas'; // Variable as a dynamic key

const fruitInventory = {
  [fruitType]: 5,
};

console.log(fruitInventory); // { bananas: 5 }


// Create an object named userProfile. 
// Define a variable named propertyName and assign a string to it (like a username, age, or email). 
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

// Your code here
const propertyName = "username"
const userProfile = {[propertyName]:'Some Name', }

console.log('Exercise 6 Answer below\n')
console.log(userProfile)

// default parameters review
function addThreeNumbers(numA, numB, numC) {
    return numA + numB + numC;
  }
  
console.log(  addThreeNumbers(2))

function addThreeNumbers2(numA, numB = 2, numC = 1) {
    return numA + numB + numC;
  }
  
  console.log(  addThreeNumbers2(2))

  function addThreeNumbers3(numA = 1, numB = 2, numC = 1) {
    return numA + numB + numC;
  }
//   note on the below the output is still 5 because the value of 1 is overwritten by the passed value of 2
console.log(  addThreeNumbers3(2))
  

// Create a function that takes two parameters, `noun` and `adjective`, both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default. The function should substitute the appropriate parameters when supplied arguments.

// Your code here
const createSentence = (noun='cat', adjective = 'white') => {
console.log(`The ${noun} is ${adjective}`)
}

console.log("Exercise 8 output below \n")
createSentence()
createSentence('dog','green')


// Ternary operator
console.log('Ternary Operator Lesson Output\n')
const age = 22;
let access;

if (age > 21) {
  access = 'Yes';
} else {
  access = 'No';
}

console.log(access); // 'Yes'

const ages = 22;
let accesses = ages > 21 ? 'Yes' : 'No';

console.log(accesses); // 'Yes'

// Convert the following `if...else` statement in to a ternary:

let pizza = 'tasty';

// if (pizza === 'tasty') {
//   console.log('yum');
// } else {
//   console.log('yuck');
// }

// Your code here
console.log('exercise 9 output below \n')
let tasteTest = pizza ? 'Yum' : 'Yuck'
console.log(tasteTest)

// boolean gates review
// the first falsy value is always what will be assigned when using &&

// const result = false && 'foo';
// console.log(result); // Output: false

// const result = 'hello' && '';
// console.log(result); // Output: ''

// when both values are truthy the last output will be selected
// const result = 'foo' && 'bar';
// console.log(result); // Output: 'bar'

// 💡 Remember, in JavaScript, falsy values include '' (empty strings), 0, null, undefined, NaN, and false. Everything else is considered truthy.

// when using || the first truthy value encountered will be returned, if all are falsy it will return the last value


// const result = '' || 'foo';
// console.log(result); // Output: 'foo'
let myVar = 0
const result1 = 'bar' && 'foo';
const result2 = false || 243;
const result3 = 42 && false;
const result4 = myVar || 3000;

console.log('result1:', result1); // expected foo
console.log('result2:', result2); // expected 243
console.log('result3:', result3);// expected false
console.log('result4:', result4); // 3000



// Exercise 10
console.log('Ex 10 Outputs below \n')
// 1. SET LANGUAGE

// Construct a single line of code that assigns a default value using the logical OR operator. This line should match the logic of the following statement: 

// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null;  // Change to 'es', 'fr', etc., or keep it null
// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

// Your code here
const LANG = localLangConfig || 'English'

// Log the result
console.log('Language setting:', LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

// Your code here

const USER_THEME = userSavedTheme || 'light'
// Log the result
console.log('User theme setting:', USER_THEME);

// Optional Chaining
// const adventurer = {
//     name: 'Alice',
//   };
  
//   console.log(adventurer.dog.name); // TypeError: Cannot read properties of undefined (reading 'name')
  
// const adventurer = {
//     name: 'Alice',
//   };
  
//   let dog = adventurer.dog?.name;
  
//   console.log(dog); // undefined
  

  // Now check for `cat.age` on `adventurer`. See how it errors out? Use optional chaining in a console.log that it returns undefined instead.
console.log('Exercise 11 Below \n')
const adventurer = {
    name: 'Alice',
  };
  
  let cat = adventurer.cat?.age; // Your code here
  

  console.log(cat);
  