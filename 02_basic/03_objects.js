// singletone 
// there are two way to decleared objects 
// litterals object & constructure object
// litterals sy singletone nhi bnta ha 

const mySym=Symbol("key1")

const JsUser={
    name:"fatima",
    [mySym]:"key1",
    age:21,
    "fullname":"fatimasehar" ,// this is the situation where you can't use . method to access the object
    location:"faisalabd",
    email:"fatima@gmail.com",
    IsloggedIn:false,
    lastLogIn:["Monday","tuesday"]
}
//there are two way to acess the object 
//first . laga k jo b access krna 
//second [] square notations laga k 
 
// console.log(JsUser.lastLogIn[1]);
// console.log(JsUser["lastLogIn"][1]);
// console.log(JsUser[mySym]);
// console.log(JsUser);

JsUser.email="fatiam@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email="isha@gmail.som"
// console.log(JsUser);

JsUser.greeting= function(){
    console.log("helo Js User")
}


JsUser.greetingTwo=function(){
    console.log(`helo Js User ,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());