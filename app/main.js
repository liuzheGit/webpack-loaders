//main.js
const greeter = require('./module/Greeter.js');
document.querySelector("#app").appendChild(greeter());

// import {firstName} from './module/Lz';
//
// console.log(firstName);
//
// import * as myMath from './module/Math'
//
// let res1 = myMath.mm(10, 20);
// let res2 = myMath.minus(410, 20);
// console.log(res1);
// console.log(res2);
//
// import {foo} from './module/dynamic'
//
// window.foo = foo;
//
// setTimeout(()=>{
//   window.foo = foo;
// },8000);
//
//
// import def from './module/default'
//
// let de = def();
// console.log(de);