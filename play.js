const name = 'Felipe';
let age = 29;
const hasHobbies = true;

name = 'Felipe 2'
age = 30;

function sumarizeUser(userName, userAge, userhasHobbies) {
    return (
        'Name is ' +
        userName +
        ', age is ' +
        userAge +
        ' and the user has hobbies: ' +
        userhasHobbies
    );
}

console.log(sumarizeUser(name, age, hasHobbies));