//Dates

let myDates= new Date()
// console.log(myDates.toDateString());
// console.log(myDates.toISOString());
// console.log(myDates.toJSON());
// console.log(myDates.toLocaleDateString());
// console.log(myDates.toLocaleString());
// console.log(myDates.toLocaleTimeString());
// console.log(myDates.toString());
// console.log(myDates.toTimeString());
console.log(typeof myDates); //  type is object 
/*
note jb hum single digit ma likhty ha  javascript ma months 0 sy start hoty 0 py jan 1 py feb like this 
q k wo array ma count hota 
pr jb "" double ma likhty to month 1 sy hi start hoty ha 1 py jan 
*/


// let myCreatedDate= new Date(2024 ,1, 7)
// let myCreatedDate= new Date(2024 ,1, 7 , 4,21)
let myCreatedDate= new Date("2024-07-07")

// console.log(myCreatedDate.toLocaleString());

const myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());// give answer mili second
// console.log(Math.floor(Date.now()/1000)) //give values in second its important interview question

let newDate= new Date()
console.log(newDate);
console.log(newDate.getFullYear());
console.log(newDate.getMonth());

newDate.toLocaleString('defalut',{
      weekday: "long"
})



