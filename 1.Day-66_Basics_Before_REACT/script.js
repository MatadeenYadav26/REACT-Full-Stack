// // Destructuring of Array :

// var arr = [10,20,30,40]

// var a = [arr[1]]

// var b = [...arr] // spread operator
// var c = arr

// var[x,y,z] = arr

// var brr = ["aman","adi","deepak","Chandu","Irfan","ema"]

// // var p = brr[0]
// // var q = brr[1]

// // console.log(p);
// // console.log(q);

// // instead of storing new var in new arr element , try:

// var[p,q,r] = brr //stores first 3 elemnts automatically by order
// console.log(p);
// console.log(q);
// console.log(r);


// var[p,q,r,...s] = brr //works as rest operator takes all leftover elemnts in s 
// console.log(s);


// var brr2 = [...brr]
// //or
// // var [...brr2] = brr


// brr2.push('agent')

// console.log(brr2);
// console.log(brr); // here push doesnt get updated as we used spread operator , which diffrentiated brr and brr2



// Destructuring in Objects:


// var obj = {
//     user:'Aman',
//     age:22,
//     city:'Surat'
// }

// // var obj2 = obj // tradtitional method
// var obj2 = {...obj}
// obj2.city = "Loni"
// obj2.user = "Harsh"
// obj2.age = 27
// see now changes only happens in obj2 not in obj since , we used spread operator and here both objects got seprated and now can be used or changed without error since we used spread operator to objects
// console.log(obj);
// console.log(obj2);


// var{user,age} = obj  // tells user , age of obj
// console.log(user);
// console.log(age);

// var{user,age} = obj2  // tells user , age of obj2
// console.log(user);
// console.log(age);

// var{user,...obj2} = obj

// console.log(user); // gives who is user.
// console.log(obj2); // gives details of elements other than user.


// this was overall destructuring in objects

// var obj ={
//     user : "aman",
//     age : 22 ,
//     skills : ['js','python','java'],
//     city: 'Surat'
// }

// var{user} = obj  
// var{age} = obj  
// var{skills} = obj  
// var{city} = obj  

// object element ko access krne k liye ese alag alag krke we can access 


// var {skills} = obj
 
// var[first,...restskills] = skills

// console.log(restskills);
// console.log(first);



// Import - Export

// import kingu from './app.js';

// console.log(kingu);

// import skillls from './app.js';
// import kingu from './test.js'

// console.log(kingu);
// console.log(skillls);// naam ulta fir v matter nhi krta coz default import humesha ek file se ek hi hoga chahe fir var name kuch v ho!


// import {user} from './app.js'
// import { math,phy,chem } from "./test.js";

// console.log(user);
// console.log(math,chem,phy);




import home from "./test.js";
import { Buthcer } from "./test.js";


console.log(home.name);
console.log(Buthcer.name);
