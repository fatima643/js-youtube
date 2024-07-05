// primitive----------jo b variable decleared kiya us ka copy mily ga 
// String,Numbers,Boolean,null,undefined,bigInt(agr value scienctific ho ya bot large data ho)
//,Symbol( Num ko unique banny k lye )


let Name="fatima"
let age=21
let IsAge=Number(23)
// console.log(IsAge);

let Id=Symbol('123')
let AnotheId= Symbol("123")
// console.log(Id===AnotheId);
//Non-Primitive/refrence---------jo b value decleared kry gy us ka refrence mily ga wo orignal valus 
//ma mily ga
// Array,Object,Function

const superMan=["imranKhan","Quid-e-Azam"]
let myObj={
    name:"fatima",
    age:21,
    Gender:"female"
}
const myFunction= function()
{
    console.log("helloworld")
}
console.log(typeof myObj);

    








//++++++++++++++++++++++++++++++++++++++++++++++ Memory
// stack(Primitive),heap(non-primitive)

let myyoutubename= "step my step"
let Anothername=myyoutubename
Anothername='chai or code'
console.log(myyoutubename);
console.log(Anothername);

let userOne={
    emial:'noor@google.com',
    upi:"noor@google"

}
let userTwo=userOne
userTwo.emial='zaiba@google'
console.log(userOne.emial)
console.log(userTwo.emial)