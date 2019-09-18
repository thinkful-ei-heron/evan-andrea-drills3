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

