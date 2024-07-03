console.log(2>1);
console.log(2>=1);
console.log(2<=1);
console.log(2!=1);
console.log(2==1);

/*
the reason is that equality check== and comparisons><>=
<= work differently.
compararison convert null into number, treating it as 0.
that's why (3) null>=0 is true and(1) null>0 is false
*/

console.log(null>0);
console.log(null==0); //this is equality 
console.log(null>=0);
console.log(null<=0); //is trha k comparesion ko avoid krna chai

/*
note javascript ma comparesion and equality different chezz ha
*/

console.log("2"<=2);

//=== strictly check
console.log("2"==="2"); // yha q k wo comparision k sth data type b check hoti ha es liye esy strict check khty ha

