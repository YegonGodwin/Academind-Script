var person = {
    name: 'Godwin',
    age: 20,
    country: 'Kenya'
};
var Address = function (person) {
    return "".concat(person.name, " is ").concat(person.age, " years old and lives in ").concat(person.country);
};
console.log(Address);
