//Object Creator
function createMyObject() {
    return {
        foo: 'bar',
        answerToUniverse: 42,
        'olly olly': 'oxen free',
        sayHello: function () {
            return 'hello';
        }
    }
};
//console.log(createMyObject());

//Object Updater
function updateObject (obj) {
    obj.foo = 'foo';
    obj.bar = 'bar';
    obj.bizz = 'bizz';
    obj.band = 'bang';
    return obj;
}

//Self-reference
function personMaker() {
    let person = {
        firstName: 'Jane',
        lastName: 'Doe',
        fullName: function () {
            return this.firstName + " " + this.lastName;
        }
  };
  return person;
}

//Deleting Keys
function keyDeleter(obj) {
    delete obj.foo;
    delete obj.bar;
    return obj;
}