//Sting //
console.log("test");

let concept = "prototype (chain)"
let myName = "Eduardo Pereira"

console.log(myName.__prot__);
console.log(myName.toLocaleLowerCase());
console.log(myName.toLocaleUpperCase());
//slice= cortar as letras//
console.log(myName.slice(2));
console.log(myName.slice(-2));
console.log(myName.slice(2, -3));

console.log(concept.length);
console.log(concept.indexOf("("));//contar as palavras por arrey//

// Numbers

let num1 = 123456789
let num2 = 5.4234

console.log(String(num1).length);//contar os numera ne NUM1
console.log(num2);
console.log(num2.toFixed(2));//conta o numero depois da virgula se tornado tex

console.log(Math.sqrt(81));// raiz quadrada
console.log(Math.pow(2,10)); // potencia

console.log(Math.abs(num2));
console.log(Math.trunc(num2));// Sem os numeos quebrados

console.log(Math.round(5.4));//0 ao 4 arredonda para baixo /5 ao 9 para cima
console.log(Math.ceil(5.001));// aredonda sepre para cima
console.log(Math.floor(5.999));// arredonda sempre para baixo

console.log(Math.random());
console.log(Math.ceil(Math.random() *10));

const times = ["corinthians","Flamengo","Vasco","Fortaleza","Ceará","São paulo"];

const randomNumber = Math.floor(Math.random() * times.length);
console.log(times[randomNumber]);