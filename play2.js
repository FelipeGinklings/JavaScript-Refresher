const person = {
    name: 'Felipe',
    age: 29,
    greet() {
      console.log('Hello, I am ' + this.name);
    }
    // greet: function() {
    //   console.log('Hello, I am ' + this.name);
    // }
};

person.greet();
