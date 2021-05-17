const superheroes = [
    {
    name: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210"
    },
    {
    name: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220"
    },
    {
    name: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195"
    },
    {
    name: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186"
    },
    {
    name: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195"
    },
    {
    name: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165"
    },
    {
    name: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145"
    },
    {
    name: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167"
    },
    {
    name: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220"
    },
    {
    name: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250"
    },
    {
    name: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200"
    },
    {
    name: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400"
    },
    {
    name: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200"
    },
    {
    name: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200"
    },
    {
    name: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown"
    }
    ]

//opdracht 2
const lightWeightSuperheroes = superheroes.map(item => {
    if (parseInt(item.weight) <= 190) {
        return item.weight;
    } 
});

console.log("Superheroes onder de 190:", lightWeightSuperheroes);

//opdracht 3
//! works not properly (shows also the rest like publisher and alter-ego)
const weight200PoundsSuperheroes = superheroes.filter(item => {
    if (parseInt(item.weight) === 200) {
        return item.name;
    }
});

console.log("Namen superheroes die 200 pounds wegen:", weight200PoundsSuperheroes);

// opdracht 3 chaining
//! doesnt work
const superheroesWeight200 = superheroes.map(item => {
    return item.name + item.weight;
    }).filter (item => {
        return item.weight === "200";
});

console.log("Chaining result:", superheroesWeight200);

//opdracht 4
const comics = superheroes.map(item => item.name +" "+ item.first_appearance);

console.log("comics hun first-appearance", comics);

//opdracht 5
const DCcomics = superheroes.filter(item => item.publisher == "DC Comics")
.map(mapitem => {
    return mapitem.name + " " + mapitem.publisher;
});

console.log(DCcomics);

//opdracht 6
//! doenst work
const numbersOnly = superheroes.filter(item => {
    if (typeof (item.weight) == 'number') {
        return item.weight;
    }
});
//console.log(numbersOnly);

const totalWeightSuperheroes = numbersOnly.reduce((currentTotal, item) => {
    return parseInt(item.weight) + currentTotal;
}, 0);

console.log("Het gewicht van alle superheroes bij elkaar:", totalWeightSuperheroes);