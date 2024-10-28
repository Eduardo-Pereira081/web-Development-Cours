const user ={
    name: "Naofume",
    age: 35,
    rule: "Hero",
    HeroShield: true,
    HeroSword: false,
    HeroSpear: false,
    HeroDow: false,

};

const user2 ={
    name: "Ren Amaki",
    age: 25,
    rule: "Hero",
    HeroShield: false,
    HeroSword: true,
    HeroSpear: false,
    HeroDow: false,

};

console.log(typeof user);
console.log(user);
console.log(user.name);
console.log(user.rule);

console.log(user2.name);
console.log(user2.rule);

// array (vector or list)
const animes = [
    "Os cavaleireos do Zodiacos",
    "Dragon Ball",
     "Naruto",
     "ThunderCast", 
     "Heeman"
];

console.log(animes);
console.log(animes[0]);
console.log(animes[1]);
console.log(animes[4]);

const  pokemon = [
    {name:"Charmander", Level: 6 },
    {name:"Bulbasour", Level: 5 },
    {name:"Squirtle", Level: 4 },
];

console.log(pokemon);
console.log(pokemon[0]);
console.log(pokemon[1].name);
console.log(pokemon[2].Level);
