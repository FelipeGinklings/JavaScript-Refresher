const fetchData = () => {
	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Done!');
		}, 1500);
	});
	return promise;
};

// Async
setTimeout(() => {
	console.log('Timer is done');
	fetchData()
		.then((text) => {
			console.log(text);
			return fetchData();
		})
		.then((text2) => {
			console.log(text2);
			return fetchData();
		});
}, 2000);

// Sync
console.log('Hello');
console.log('Hi!');
