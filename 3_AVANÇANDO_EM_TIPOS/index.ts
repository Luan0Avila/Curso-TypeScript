// - 1 arrays
let numbers: number[] = [1,2,3];

numbers.push(5);

console.log(numbers[2]);

//numbers = "teste";

const nomes: string[] = ["Luan", "Luna"];

//nomes.push(4);

// 2 - Outra sintaxe de array
const nums: Array<number> = [100,200];

nums.push(300);

console.log(nums);

console.log(nums[2]);

// 3 - Tipo any
const arr1: any = [1, "teste", [] , true, {nome: "Luna"}];

console.log(arr1);

arr1.push([1,2,3]);

console.log(arr1);

// 4 -parametros tipados

function soma(a: number, b: number) {
    console.log(a + b);
};

soma(4,5);

// soma("4", 5);

