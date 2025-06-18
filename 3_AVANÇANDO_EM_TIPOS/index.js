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
