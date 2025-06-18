// 1 - numbers
var x = 11;
console.log(x);
// x = "teste";
console.log(typeof x);
var y = 3.147213;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2 - string
var firstName = "Luna";
console.log(firstName.toUpperCase());
var fullName;
var lastName = "Avila";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 - boolean
var a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - inference e annotation
var ann = "Teste";
var inf = "Teste";
// ann = 2;
// inf = 1;
console.log("Testando o tsc -w");
