// Configuration
const express = require('express');
const app = express();
const port = 3000;

// GET Requests
app.get('/', (req, res) => {
	res.send('GET Request');
});

// POST Requests
app.post('/', function (req, res) {
	res.send('POST request');
});

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`);
});
