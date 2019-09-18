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
  console.log(obj);
}

//Arrays in Objects
const obj2 = {
  meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
}
 console.log(obj2.meals[3]);
