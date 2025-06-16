// 1 - numbers
let x: number = 11;

console.log(x);

// x = "teste";

console.log(typeof x);

const y:number = 3.147213

console.log(typeof y);
console.log(y);

console.log(y.toPrecision(3))

// 2 - string
const firstName: string = "Luna";

console.log(firstName.toUpperCase())

let fullName: string;

const lastName: string = "Avila";

fullName = firstName + " " + lastName;

console.log(fullName)

console.log(typeof fullName)


// 3 - boolean
let a: boolean = false;

console.log(a);
console.log(typeof a);

a = true;
console.log(a);

// 4 - inference e annotation
const ann: string = "Teste";

let inf = "Teste";

// ann = 2;
// inf = 1;

console.log("Testando o tsc -w")


