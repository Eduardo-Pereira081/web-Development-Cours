// Map (imutable)

const number = [10, 20, 30];
console.log(number.map((num)=> num + 5));
console.log(number.map((num)=> num * 5.64));

        const devs = [
            {nome: "Nereu", salary:6500},
            {nome: "Fred", salary:5800},
            {nome: "Neemias", salary:7000},
        ];

        const newSalaries = devs.map((dev) =>  dev.salary * 0.1 + dev.salary);

        console.log(newSalaries);

        console.log(devs);
