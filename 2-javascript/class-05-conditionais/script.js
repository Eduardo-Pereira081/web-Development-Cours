const age = 17;
const CNH = true;

if (age >= 18 && CNH ){
    console.log("Pode dirigir");
}
else{
    console.log(" Não pode dirigir");
}

/////////////////////////////////////////////

console.log(3>2>1)

if(3 > 2 && 2 > 1){
    console.log("verdadeiro");
}
else{
    console.log("falso");
}

////////////////////////////////////////////////


const option = 6

switch (option){
    case 1:
        console.log("Docinho!");
        break;
    case 2:
        console.log("Barra de chocolate!");
        break;
    case 3:
        console.log("latinha de refrigerante!");
        break;
    default:
        console.log("Por favor, escolha uns dos ítens")
        break;
}

///////////////////////////////////////////////////////

const num = 2;
const isAdmin = false;

try{
    if(isAdmin){
        console.log("Ver relatorio" + num);
    }
    else{
        throw new Error("Sem autorização para executar tarefa!");

    }
} catch(error){
    console.error(error);
}
finally{
    console.log("sempre executa!");
}

document.write("Running App is Online!");

const n1 = 7
const n2 = 8
const n3 = 9

const averege = (n1 + n2 + n3) / 3;

console.log(averege);

if(averege >= 7){
    console.log("Aprovado pro média!");
}
else if(averege >= 3){
    console.log("Em recuperação!");
}
else{
    console.log("Aluno reprovado!");
}