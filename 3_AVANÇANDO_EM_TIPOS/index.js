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
