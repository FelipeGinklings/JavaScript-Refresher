const name = 'Felipe';
let age = 29;
const hasHobbies = true;

age = 30;

const summerizerUser = (userName, userAge, userhasHobbies) => {
	return (
		'Name is ' +
		userName +
		', age is ' +
		userAge +
		' and the user has hobbies: ' +
		userhasHobbies
	);
};

// const add = (a, b) => a + b;
// const addOne = (a) => a + 1;
const addRandom = () => 1 + 2;

// console.log(add(1, 2));
// console.log(addOne(2));
console.log(addRandom());

console.log(summerizerUser(name, age, hasHobbies));
