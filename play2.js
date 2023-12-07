const person = {
    name: 'Felipe',
    age: 29,
    greet() {
        console.log('Hello, I am ' + this.name);
    },
    // greet: function() {
    //   console.log('Hello, I am ' + this.name);
    // }
};

const hobbies = ['Sports', 'Cooking'];

// for (let hobby of hobbies) {
//   console.log(hobby);
// }

console.log(hobbies.map((hobby) => 'Hobby: ' + hobby));
console.log(hobbies);
