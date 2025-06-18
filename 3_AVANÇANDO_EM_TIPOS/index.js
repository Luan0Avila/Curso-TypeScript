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
