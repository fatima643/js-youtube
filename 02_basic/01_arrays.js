// array

//[]square bracket k and jo b likhty wo elements ha 
let myArr= [1,2,3,4,5,6]
let myHerros= ["imrankhan","quid-e-azam"]

let myArr2= new Array(1,2,4,5,6,7)

// console.log(myArr[5]);
// console.log(myHerros[0]);
// console.log(myArr2[0]);

//Arrays method 
// myArr.push(7) // simply use add the value in array
// myArr.push(8)
// myArr.pop() //simply use to remove the last value in array

// myArr.unshift(2) // inserts new elements at the start of an array, and returns the new length of the array.
// myArr.shift() // Removes the first element from an array and returns it. If the array is empty, undefined 
//is returned and the array is not modified.

// console.log(myArr.includes(10)) // quetion pochny k liye k ye array k andr ha b ya nhi ha to true otherwise false
// console.log(myArr.indexOf(1));  // array ma kon si value kon sy index py ha 



const newArr= myArr.join() // join hamry array ko biand b kr deta or string ma b convert kr deta
//Adds all the elements of an array into a string, separated by the specified separator string.

// console.log(typeof newArr);

//slice , splice
//it is orignal array

console.log("A", myArr);
//Make a new array
const myn1= myArr.slice(1,3)
console.log(myn1);
console.log("B", myArr);


const myn2= myArr.splice(1,3, "helo")
console.log( myn2);
console.log("C", myArr);