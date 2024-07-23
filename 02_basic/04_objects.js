// this is a singleton object mean constructure
const tinderUser={}

tinderUser.id="123abc"
tinderUser.name="isha"
tinderUser.isLoggedIn=false
// const tinderUser=new Object()

//this is non-singleton object mean literals

// console.log(tinderUser);

const regularUser={
    email:"isha@gmail.com",
    fullname:{
        userfullname:{
            firstname:"fatima",
            lastname:"sehar"
        }
    }
}
// console.log(regularUser.fullname.userfullname.lastname);

 const obj1={1:"a",2:"b"}
 const obj2={3:"c",4:"d"}
 const obj3={5:"e",6:"f"}

//  const obj4=Object.assign({},obj1,obj2,obj3)
const obj4={...obj1,...obj2,...obj3}
//  console.log(obj4);

 const user=[
    {
        id:"123",
        email:"f@gmail.com"
    },
    {
        id:"123",
        email:"f@gmail.com"
    },
    {
        id:"123",
        email:"f@gmail.com"
    }
 ]

 user[1].email
//  console.log(tinderUser)
//  console.log(Object.keys(tinderUser));
//  console.log(Object.keys(regularUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course={
    coursename:"JavaScript",
    coursePrice:900,
    courseInstructure:"fatima"
}
const { courseInstructure}= course
console.log(courseInstructure)

//object de structure
const{courseInstructure:instructure}= course
console.log(instructure)

//Json

// {
//     "name": "fatima",
//     "coursenam": "js in hindi"
// }

