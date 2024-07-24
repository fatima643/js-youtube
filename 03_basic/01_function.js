// function kuch b bs smj li jiye k jitna b code ha 10 line 20 line usy ek package ma bnd kr dena or phir us ki copy utha k khai b easily ly ja sakhty ha 

function sayMyName(){
    console.log("f");
    console.log("a");
    console.log("t");
    console.log("i");
    console.log("m");
    console.log("a");
}

// sayMyName()

//  function addTwoNum(numbaer1, number2){
//     console.log(numbaer1+number2);

//  }

// note return keyword k bad agr console.log lagai to kuch b print nhi ho ga
 function addTwoNum(numbaer1, number2){
    // let result=numbaer1+number2
    // return result
    return numbaer1+number2
   
 }
const result=addTwoNum(3,2)
//  console.log("Result:", result);

function loggedInUser(username){
    // let user=`${username} just logged in`
    // return user

    // if(!username){}

if(!username){
console.log("please enter a username");

}

else{
    console.log("you are enter");
}

    return `${username} just log in `
}
// console.log(loggedInUser("fatima"))

//note ... esi ko sepread operators bolty ha or esi ko rest operators bolty its depend on situation 
// functions ma es ko rest operators bolty
function calculatecartprice(...num1){
return num1
}
// console.log(calculatecartprice(200,400,300,600));

const user={
    name:"fatima",
    price:199
}

function handelObject(anyobject){
    return `username is ${anyobject.name} and price is ${anyobject.price}`
}
// console.log(handelObject({
//     name:"isha",
//     price:200
// }))
console.log(handelObject(user))

const myNewArr=[200,600,900,800]

function returnthirdVale(myARRr){
    return myARRr[3]
}
console.log(returnthirdVale(myNewArr));


