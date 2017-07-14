// var names = ['Matt', 'Katie', 'Karsten'];
//
// //using ES5 standard js
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// //using ES6 arrow function with {} to add multiply lines
// names.forEach((name) => {
//   console.log('arrowFunc', name);
// });
//
// //instead of using {} to pass a single statement (as above), we can simply type it like this...
// names.forEach((name) => console.log('simple arrowFunc', name));
//
//
// var returnMe = (name) => name + '!'; //using arrow functions, whatever you have defined automatically gets returned
// console.log(returnMe('Matt'));
//
// // anonymous functions have a this binding, while arrow functions take on their parent's this binding
// var person = {
//   name: 'Matt',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name) // arrow function doesn't update the this keyword (still refers to person object), so this.name still refers to 'Matt'
//     });
//   }
// }
//
// person.greet();

// Challenge
function add (a, b) {
  return a + b;
}
// console.log(add(1, 3));
// console.log(add(9, 0));

// Create 2 arrow functions
// 1. use statement syntax {} to specify the return value
var addStatement = (a, b) => {
  return a + b;
};
console.log(addStatement(4, 7));

// 2. use expression syntax and handle everything on one line
var addExpression = (a, b) => a + b;
console.log(addExpression(3, -2));
