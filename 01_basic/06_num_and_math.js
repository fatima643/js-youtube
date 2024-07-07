let score= 400
// console.log(score);


let balance= new Number(100)
// console.log(balance);

// console.log(balance.toString().trim()); // remove back and starting space
// console.log(balance.toFixed(2)); // used to fixed te decimal point 100 is a number 
//and fix 100.00 means two points after the point

const otherNumber= 123.898
// console.log(otherNumber.toPrecision(5));// used to format a number to a specified length,
//This method can be useful for ensuring consistency in the display of numerical data, 
//particularly when dealing with floating-point numbers

const hundred= 1000000 // this 1000000 num understand is dificult so we use toLocalString 
// console.log(hundred.toLocaleString('en-In'))

let data= new Date(Date.UTC(2024,7,2,7,0,0 ));
// console.log(data.toLocaleString('en-In'));

//+++++++++++++ Math+++++++++++++++++++//

// console.log(Math);
// console.log(Math.abs(-4));            // absolute value ye nagetive value ko positive ma convert kr deta ha  
// console.log(Math.round(4.2))             // value ko round of krny k liye 
// console.log(Math.ceil(4.2));            // top value ko selcet krny k liye use hota
// console.log(Math.floor(7.2));                // nicy wli ya pichli value select krny k liye 
//console.log(Math.min(4,3,2,5,6))
//console.log(Math.max(4,3,2,5,6))

console.log(Math.random());       //random ki value hamesha 0 or one k andr hi rhy gi
console.log(Math.random()); 