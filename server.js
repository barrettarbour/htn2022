// Configuration
const path = require('path');
const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 3001;
const app = express();
app.use(cors());

const cohere = require('cohere-ai');
cohere.init('ZY82JS6SmJKVUCsHEmTaKDb4WS0ejOmv7OGj3lSW');

app.get('/api', async (req, res) => {
	const response = await cohere.classify({
		inputs: [req.query.inputs],
		examples: [
			{ text: 'fructose', label: 'added sugar' },
			{ text: 'dextrose', label: 'added sugar' },
			{ text: 'maltrose', label: 'added sugar' },
			{ text: 'syrup', label: 'added sugar' },
			{ text: 'sugar', label: 'added sugar' },
			{ text: 'lactose', label: 'dairy' },
			{ text: 'milk', label: 'dairy' },
			{ text: 'cow milk', label: 'dairy' },
			{ text: 'goat milk', label: 'dairy' },
			{ text: 'cheese', label: 'dairy' },
			{ text: 'butter', label: 'dairy' },
			{ text: 'yogurt', label: 'dairy' },
			{ text: 'buttermilk', label: 'dairy' },
			{ text: 'crayfish', label: 'shellfish' },
			{ text: 'crab', label: 'shellfish' },
			{ text: 'lobster', label: 'shellfish' },
			{ text: 'clam', label: 'shellfish' },
			{ text: 'scallop', label: 'shellfish' },
			{ text: 'salmon', label: 'none' },
			{ text: 'potato', label: 'none' },
			{ text: 'cocoa', label: 'none' },
			{ text: 'gelatin', label: 'none' },
			{ text: 'almond milk', label: 'none' },
			{ text: 'oat milk', label: 'none' },
			{ text: 'soy milk', label: 'none' },
			{ text: 'rice', label: 'none' },
			{ text: 'flour', label: 'none' }
		]
	});
	console.log(
		`The confidence levels of the labels are ${JSON.stringify(
			response.body.classifications
		)}`
	);
	res.json(response.body.classifications);
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
