//### **Usando `slice`**
//Crie um array `numeros` contendo `[5, 10, 15, 20, 25, 30]`. Use `slice` para criar um novo array com os três primeiros elementos e exiba o resultado.

const numeros = [5, 10, 15, 20, 25, 30];
const primeirosTres = numeros.slice(0, 3);
console.log(primeirosTres);