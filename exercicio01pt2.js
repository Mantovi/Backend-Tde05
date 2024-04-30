const { somar, subtrair, multiplicar, dividir } = require('./exercicio01.js');

console.log("Soma:", somar(5,9));
console.log("Subtração:", subtrair(5,9));
console.log("Multiplicação:", multiplicar(5,9));
console.log("Divisão:", dividir(10, 5));

console.log("\n");

const num1 = 10;
const num2 = 5;

console.log(`Soma: ${num1} + ${num2} = ${somar(num1, num2)}`);
console.log(`Subtração: ${num1} - ${num2} = ${subtrair(num1, num2)}`);
console.log(`Multiplicação: ${num1} * ${num2} = ${multiplicar(num1, num2)}`);
console.log(`Divisão: ${num1} / ${num2} = ${dividir(num1, num2)}`);

console.log("\n");
