"use strict";
// - 1 arrays
let numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
//numbers = "teste";
const nomes = ["Luan", "Luna"];
//nomes.push(4);
// 2 - Outra sintaxe de array
const nums = [100, 200];
nums.push(300);
console.log(nums);
console.log(nums[2]);
// 3 - Tipo any
const arr1 = [1, "teste", [], true, { nome: "Luna" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
// 4 -parametros tipados
function soma(a, b) {
    console.log(a + b);
}
;
soma(4, 5);
// soma("4", 5);
// 5 - retorno de função
function greeting(name) {
    //return 5;
    return `Olá ${name}`;
}
;
console.log(greeting("Lady"));
// 6 - Funções anonimas
setTimeout(function () {
    const sallary = 1000;
    console.log(sallary);
}, 2000);
// 6 - Tipos de objetos
function passCoordinates(coord) {
    console.log("X coordenadas: " + coord.x);
    console.log("Y coordenadas: " + coord.y);
}
const objCoord = { x: 329, y: 84.2 };
passCoordinates(objCoord);
//passCoordinates(1,1);
//passCoordinates([1,1]);
passCoordinates({ x: 10, y: 11 });
// 8 - props opcionais
function showNumber(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
;
showNumber(1, 2, 3);
showNumber(1, 2);
// showNumber(1);
// 9 - Validando argumento opcional
function advencedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return `Olá ${firstName} ${lastName}, tudo bem?`;
    }
    ;
    return `Olá ${firstName}, tudo bem?`;
}
;
console.log(advencedGreeting("Luan", "Avila"));
console.log(advencedGreeting("Luna"));
// 10 - union type
function showBalance(balance) {
    console.log(`O saldo da conta é R$${balance}`);
}
;
showBalance(1000);
showBalance("500");
const arr2 = [1, "teste", false];
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado";
    }
    return `A função do usuário é: ${role}`;
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log(`O ID é: ${id}`);
}
;
showId(1);
showId("11");
showId(123);
;
function showCoords(obj) {
    console.log(`X: ${obj.x} Y: ${obj.y} Z: ${obj.z}`);
}
;
const coordObjs = {
    x: 11,
    y: 15,
    z: 10,
};
showCoords(coordObjs);
const somePerson = { name: "Luan", age: 21 };
console.log(somePerson);
//type personType = {
//age: number
//}
// 14 - literal types
let test;
//test = 1;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(`A direção é: ${direction}`);
}
showDirection("left");
//showDirection("Top");
// 15 - non null assertion operators
const p = document.getElementById("some-p");
console.log(p.innerText);
// 16 - bigint
let n;
//n = 1
n = 1000n;
console.log(n);
console.log(typeof n);
console.log(n + 100n);
// 17 - symbol
let symbolA = Symbol("a");
let symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
