'use strict'
const loaf = {
  flour: 300,
  water: 210,

  hydration: function() {
}
};
loaf.hydration = loaf.flour/loaf.water*100;

console.log(loaf);

