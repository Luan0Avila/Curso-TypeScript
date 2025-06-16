"use strict";
// 1 - numbers
let x = 11;
console.log(x);
// x = "teste";
console.log(typeof x);
const y = 3.147213;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2 - string
const firstName = "Luna";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Avila";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 - boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - inference e annotation
const ann = "Teste";
let inf = "Teste";
// ann = 2;
// inf = 1;
console.log("Testando o tsc -w");
