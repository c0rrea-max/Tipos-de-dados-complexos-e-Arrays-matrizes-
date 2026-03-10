//### **Combinação de métodos**

//Crie um array `times` com `"Flamengo"`, `"Palmeiras"` e `"São Paulo"`.
//1. Adicione `"Corinthians"` no final.
//2. Adicione `"Grêmio"` no início.
//3. Remova o último time.
//4. Encontre a posição do `"Palmeiras"`.
//5. Inverta a ordem dos times.

const times = ["Flamengo", "Palmeiras", "São Paulo"];
times.push("Corinthians");
times.unshift("Grêmio");
times.pop();
const pos = times.indexOf("Palmeiras");
times.reverse();