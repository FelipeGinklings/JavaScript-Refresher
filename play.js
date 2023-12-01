var name = 'Felipe';
var age = 29;
var hasHobbies = true;

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