function fullName (first, last) {
    return first + ' ' + last;
}
//alert (fullName('Andrea', 'Bender'))

let array = [1,2,3];
let alphas = ['a', 'b', 'c'];
    
function loopThroughArray (myArr) {
    for (i=0; i < myArr.length; i++) {
        alert(myArr[i]);
    }
}
//loopThroughArray(alphas);

function loopThroughArray2 () {
    for (i=0; i < alphas.length; i++) {
        alert(alphas[i]);
    }
}
loopThroughArray2();


//function declaration

function greeting () {
    return 'Hi';
}
//arrow function
greeting = () => {
    return 'Hi';
 }
//function expression
//used more often, less global scope than function declaration
//can only call function after function, unlike function declaration where you can call anywhere

let hi = function() {
    return 'Hi';
}
alert(hi());