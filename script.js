//! Idea A =======================================================
// Combine the the two together[as arrays]. If the combined array length is 1 then push that value into our traffic order array/string. If the length is > 1 then we need todo some work. First, push the last value of the the array into the order. Then push the last value of that same array. A better way to understand that may be to say to push the last 2 of the 'side street array'. Next we need to push a value from the mainroad array. Then only the last value of the of the 'side street array'. Repeat as needed.

//? Pseudo Code A. =======
//- Combine the two arguments into one unified array.
// 1. Turn mainRoad into an array.
// 2. Push the sideStreet array indexes to the beginning of each mainRoad index. Make sure we dont have any extra whitespace.
// Keep note of capitalization for each unique arguments.
// result: ['a','b','c','BBBBBBd','e',...]
//- Push our mainRoad index values into our trafficOrder string
// 1. If our index[i] length is = 1, push that value into the trafficOrder string.
// 2.

//! =============================================================

// Code ====================================================
const determineTrafficOrder = (mainRoad, sideStreets) => {
  return trafficOrder
}
// =========================================================

// Testing example ==========================================
console.log(
  `==========================================================
Traffic Order: ${determineTrafficOrder('abcdefghijklmX', [
    '',
    '',
    '',
    'BBBBBB',
    '',
    '',
    '',
    '',
    'CCCCC',
  ])}
==========================================================`
)
// =========================================================
