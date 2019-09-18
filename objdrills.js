'use strict'
const loaf = {
  flour: 300,
  water: 210,

  hydration: function() {
}
};
loaf.hydration = loaf.flour/loaf.water*100;

console.log(loaf);


//Iterating over an objects props
const obj = {
  foo: 2,
  bar: 'cat',
  fum: 'banana',
  quux: 'bicycle',
  spam: 'hawaii',
}

for (const key in obj) {
  console.log(key,obj[key]);
}

//Arrays in Objects
const obj2 = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}
 console.log(obj2.meals[3]);


 //Arrays of objects
 const obj3 = [
  {name: 'Jane', jobTitle: 'Accountant'},
  {name: 'Bob', jobTitle: 'Firefighter'},
  {name: 'Jim', jobTitle: 'Sales'}
]

let allPeople = [];

for(let key in obj3) {
  allPeople.push(obj3[key])
}

console.log(...allPeople);

//Properties that aren't there
const obj4 = [
  {name: 'Jane', jobTitle: 'Accountant', boss: 'Jon'},
  {name: 'Bob', jobTitle: 'Firefighter', boss: 'Dave'},
  {name: 'Jim', jobTitle: 'Sales', boss: 'Michael'}
]

let allPeople2 = [];

for(let key in obj4) {
  allPeople2.push(obj4[key])
  console.log(`${obj4[key].jobTitle} ${obj4[key].name} reports to ${obj4[key].boss}.`);
  
}

//Cracking the code
let cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
  }

const encoded = 'craft block argon meter bells brown croon droop'

function decode (encoded) {
  let final = '';
  let encodedString = encoded.split (' ');
  for (let i=0; i < encodedString.length; i++) {
    let letter = encodedString[i][0];
    if (cipher[letter]){
      final += encodedString[i][cipher[letter]-1];
    }
    else
      final +=' ';
  };
  return final;
}

function decodeWords (message, decode) {
  return decode(message);
}

console.log(decodeWords(encoded,decode));

//Factory Functions with LOTR
function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name: name,
    nickname: nickname,
    race: race,
    origin: origin,
    attack: attack,
    defense: defense,
    describe: function () {
      console.log(`${name} is a ${race} from ${origin}`);
    },
    evaluateFight: function(character) {
      let x= this.attack - character.defense;
      let y= character.attack - this.defense;
      if(x<0) { x=0;
      } if (y < 0) { y=0;
      }
      console.log(`Your opponent takes ${x} damage and you receive ${y} damage`)
    }
  };
}

const characters = [
  createCharacter('Gandalf the white', 'gandalf', 'Wizard', 'Middle Earth', 10, 6),
  createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1),
  createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2),
  createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedian', 6, 8),
  createCharacter('Legolas', 'logolas', 'Elf', 'Woodland Realm', 8, 5)];


characters.push(createCharacter('Arwen', 'Undomiel', 'Half-Elf', 'Rivendell', 9,1));

characters.find(man => man.nickname === 'aragorn').describe ();

characters.filter(organism => organism.race === 'Hobbit');

characters.filter(organism => organism.attack > 5);

