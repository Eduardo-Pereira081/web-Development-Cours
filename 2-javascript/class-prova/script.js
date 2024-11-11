//Questão 01

let string = "Dudu";
let number = 1000;
let boolean = true;

console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 ** 1);
console.log(1 % 1);
console.log(1 % 1);

function concat(text) {
  console.log("JavaScrip" + text);
}
console.log(concat("JS"));

const seres = ["Game of Thrones", "Rick and Morty", "Os Simpsons"];

seres.push("The Walking Dead");
seres.shift(); // Deletar
seres.unshift("La casa de papel"); // substituir

seres.splice(0, 1, "famil Guy"); // remover

console.log(seres);

for (let i = 0; i < seres.lengi; i++) {
  console.log(series[i]);
}

let count = 0; //flag
while (count < 100) {
  count++;
  if (count >= 40 && count <= 69) {
    continue;
  } else {
    console.log(count);
  }
}

const speed = 60;
const max = 60;

if (speed > max) {
  console.log("O rachador");
} else if (speed < max / 2) {
  console.log("Sai do meio Pé de Pano!");
} else {
  console.log("Ré Ré Ré, Ré Ré Ré");
}

const salary = [200, 2800, 3000, 4000, 2200, 7500, 8000, 5000];

const newSalaries = salary.map((salary) => salary * 1.1);
console.log(newSalaries);
