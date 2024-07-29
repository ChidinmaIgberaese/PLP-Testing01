const express = require('express');
const app = express();

app.use(express.json());

app.get('/', function (request, response) {
	const name = request.body.name || 'World';
	response.json({ message: `Hello, ${name}` });
});

app.listen(3000, function () {
	console.log('App is running on 3000');
});

module.exports = app;
