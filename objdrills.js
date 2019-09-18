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