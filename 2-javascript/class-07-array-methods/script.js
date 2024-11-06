// Map (imutable)

const number = [10, 20, 30];
console.log(number.map((num)=> num + 5));
console.log(number.map((num)=> num * 5.64));

        const devs = [
            {name: "Nereu", salary:6500},
            {name: "Fred", salary:5800},
            {name: "Neemias", salary:7000},
            {name: "Lucas", salary:6200},
        ];

        const newSalaries = devs.map((dev) =>  dev.salary * 0.1 + dev.salary);
        console.log(newSalaries);

        console.log(devs);

        //Filer (immutable)

    const devFiltered = devs.filter((dev)=> dev.salary > 6000)
    console.log(devFiltered);   
    
    const resp = prompt("Digite o nome: ").toLocaleLowerCase();
    const resultFilter = devs.filter((dev)=> dev.name.toLocaleLowerCase().includes(resp));

    console.log(resultFilter);

    // Sort

    const numbers2 = [33,1,3,"a","A",6,2,11,"Eduardo", "eduardo"];

    console.log(numbers2);

    numbers2.sort((a,b) => {
        if (typeof a == "string" && typeof b == "string")
        a = String(a).toLocaleLowerCase();
        b = String(b).toLocaleLowerCase();

        if( a > b) return 1;
        if( a < b) return -1;
        return 0;
    });

    console.log(numbers2);

    // Reduce
const expenses = [20,32,38,220,50,100];
const total = expenses.reduce((a, b)=> a + b, 1000);
console.log(total);