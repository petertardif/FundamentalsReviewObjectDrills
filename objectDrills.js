// Object initializers and methods
let loaf = {
    flour: 300,
    water: 210,
    hydration: function() {return (this.water/this.flour)*100}
}
console.log(loaf.flour,loaf.water);
console.log(loaf.hydration());

// Iterating over an object's properties
let obj = {
    foo: 1,
    bar: 2,
    fum: 3,
    quux: 4,
    spam: 5
}

for(i in obj){
    console.log(obj[i]);
}

// Arrays in Objects
// let obj = {
//     meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
// }

// console.log(obj.meals[3]);

// Array of Objects
var arr = [
    {name: "Melissa", jobTitle: "Teacher"},
    {name: "Dick", jobTitle: "CEO"},
    {name: "Maryann", jobTitle: "Accountant"},
    {name: "Chris", jobTitle: "WorkerBee"},
    {name: "Rachel", jobTitle: "Teacher"}
]
for(t in arr) {
    console.log(arr[t]["jobTitle"],arr[t]["name"]);
  }

// Properties that aren't there 
var arr = [
    {name: "Melissa", jobTitle: "Teacher"},
    {name: "Dick", jobTitle: "CEO", boss: "Melissa"},
    {name: "Maryann", jobTitle: "Accountant",boss: "Melissa"},
    {name: "Chris", jobTitle: "WorkerBee",boss: "Melissa"},
    {name: "Rachel", jobTitle: "Teacher",boss: "Melissa"}
];
    for(t in arr){
        if(arr[t]["boss"]){
            console.log(`${arr[t]["jobTitle"]} ${arr[t]["name"]} reports to ${arr[t]["boss"]}.`);
        }
        else {
            console.log(`${arr[t]["jobTitle"]} ${arr[t]["name"]} doesn't report to anyone.`);
        }
    }

// factory function
function createCharacter(name,nickName,race,origin,attack,defense,weapon){
    return {
        name: name,
        nickName: nickName,
        race: race,
        origin: origin,
        attack: attack,
        defense: defense,
        weapon: weapon,
        describe: function(){
            console.log(`${name} is a ${race} from ${origin} who uses a ${weapon}`);
        },
        evaluateFight: function(character){
            let x = this.attack - character["defense"];
            let y = character["attack"] - this.defense;
            if(x < 0 && y > 0){
                console.log(`Your opponent takes 0 damage and you receive ${y} damage`);
            }
            else if(y < 0 && x > 0){
                console.log(`Your opponent takes ${x} damage and you receive 0 damage`);
            }
            else {
                console.log(`Your opponent takes 0 damage and you receive 0 damage`);
            }
        }
    }
}

let characters = [
    createCharacter("Gandalf the White","galdalf","Wizard","Middle Earth",10,6,"wizard staff"),
    createCharacter("Bilbo Baggins","bilbo","Hobbit","The Shire",2,1,"the Ring"),
    createCharacter("Frodo Baggins","frodo","Hobbit","The Shire",3,2,"String and Barrow Blade"),
    createCharacter("Aragorn son of Arathorn","aragorn","Man","Dunnedain",6,8,"Anduril"),
    createCharacter("Legolas","legolas","Elf","Woodland Realm",8,5,"Bow and Arrow")
]
characters.push(createCharacter("Arwen Undomiel","arwen","Half-Elf","Rivendel",7,9,"Hadhafang"));

let result = characters.find(function (char){ 
        return char.nickName === 'aragorn';
    });
result.describe();

characters.filter(function(char){return char.race === "Hobbit"});
characters.filter(function(attVal){return attVal.attack > 5});


// A Database Search
const HEROES = [
    { id: 1, name: 'Captain America', squad: 'Avengers' },
    { id: 2, name: 'Iron Man', squad: 'Avengers' },
    { id: 3, name: 'Spiderman', squad: 'Avengers' },
    { id: 4, name: 'Superman', squad: 'Justice League' },
    { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
    { id: 6, name: 'Aquaman', squad: 'Justice League' },
    { id: 7, name: 'Hulk', squad: 'Avengers' },
  ];


// Attempt #1 - does not work with findOne(HEROES, { id: 2, name: 'Aquaman' });
function findOne(arr,query){
    debugger;
  // loop through the query object to identify each value
  for(key in query){        
  //loop through the parameter arr
    for(obj in arr){
      if(query[key] === arr[obj][key]){
          console.log(query[key], arr[obj][key]);
        // return console.log(arr[obj]);
      }  
    }
  }
  return console.log("null");      
}

// Attempt #2
function findOne2(arr,query){
    let result = arr.find(function(search) {
        return search.name === 'Hulk';
    });
    console.log(result);
}
// test code below
findOne(HEROES, { id: 1 });
// => { id: 1, name: 'Captain America', squad: 'Avengers' }
findOne(HEROES, { id: 10 });
// => null
findOne(HEROES, { id: 2, name: 'Aquaman' });
// => null
findOne(HEROES, { id: 5, squad: 'Justice League' });
// => { id: 5, name: 'Wonder Woman', squad: 'Justice League' }
findOne(HEROES, { squad: 'Justice League' });
// => { id: 4, name: 'Superman', squad: 'Justice League' }