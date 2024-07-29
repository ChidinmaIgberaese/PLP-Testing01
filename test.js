const request = require('supertest');
const app = require('./index');

async function runTests() {
	console.log('Testing...');

	try {
		const res01 = await request(app).get('/').send({});
		if (res01.body.message !== 'Hello, World') {
			console.log('Test one failed');
		} else {
			console.log('Test one passed');
		}
	} catch (err) {
		console.log(err);
	} finally {
		console.log('Test one finished');
	}

	try {
		let name = 'Patrick';
		const res02 = await request(app).get('/').send({ name: name });
		if (res02.body.message !== `Hello, ${name}`) {
			console.log('Test two failed');
		} else {
			console.log('Test two passed');
		}
	} catch (err) {
		console.log(err);
	} finally {
		console.log('Test two finished');
	}

	console.log('Testing is complete');
}

runTests();
