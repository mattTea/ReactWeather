// // callback example
// function getTempCallback (location, callback) { // this is our callback function
//   callback(undefined, 78); // if it goes well (error will be 'undefined' as there isn't one, 78 is the temp)
//   callback('City not found'); // if an error is returned
// }
//
// getTempCallback('London', function (err, temp) { // this is calling our callback function
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// // promise example
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) { //promise constructor
//     setTimeout(function () {
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('London').then(function (temp) { //first function will be the success case, so we know it will be passed the temperature
//   console.log('promise success', temp);
// }, function (err) { //second function will be the error case
//   console.log('promise error', err);
// });

//challenge area
function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject('a and b must be numbers');
    }
  });
}

addPromise(6, 5).then(function (sum) {
  console.log('addPromise success = ', sum);
}, function (err) {
  console.log('addPromise error', err);
});

addPromise(6, 'Matt').then(function (sum) {
  console.log('addPromise success = ', a + b);
}, function (err) {
  console.log('addPromise error', err);
});
