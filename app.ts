const person = {
    name: 'Godwin',
    age : 20,
    country : 'Kenya'
}

const Address = person => {
    return `${person.name} is ${person.age} years old and lives in ${person.country}`;
}
console.log(Address);