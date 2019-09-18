//Student Reports
function makeStudentReport(data) {
    return data.map (function (obj) {
        return `${obj.name}: ${obj.grade}`;
    })
}

studentData = [
    {
    name: 'Johnny Robot', 
    grade: 'C'
}
]


//Enrolling in summer school
function enrollInSummerSchool (students) {
    return data.map (function (obj) {
        return `${obj.name}, status: 'In Summer School', ${obj.course}`;
}

studentData2 = [
    {
      name: 'Tim',
      status: 'Current student',
      course: 'Biology',
    },
    {
      name: 'Sue',
      status: 'Withdrawn',
      course: 'Mathematics',
    },
    {
      name: 'Liz',
      status: 'On leave',
      course: 'Computer science',
    },
  ];

  //Find by id
  const data = [{id: 1, foo: 'bar'}, {id: 2, foo: 'bizz'}];

  function findById (items, idNum) {
    return items.find (item => item.id === idNum);
  }

  //Validate object keys
  const expectedKeys = ['id', 'name', 'age', 'city'];
  
  function validateKeys(object, expectedKeys) {
      if object.keys(object).length !== expectedKeys.length {
      return false;
    }
    for (let i = 0; i < expectedKeys.length; i++) {
        if (!Object.keys(object).find(key => key === expectedKeys[i])) {
            return false;)
    }
  }
  return true;
}