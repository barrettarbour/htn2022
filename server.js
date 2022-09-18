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
	let dairyIngredients = [];
	let addedSugarIngredients = [];
	let shellfishIngredients = [];
	const ingredients = req.query.ingredients;
	const ingredientsSplit = ingredients.split(', ');

	await Promise.all(
		ingredientsSplit.map(async (ingredient) => {
			const response = await cohere.classify({
				inputs: [ingredient],
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
			const classifications = response.body.classifications;
			classifications.forEach((classification) => {
				if (classification.prediction == 'dairy') {
					dairyIngredients.push(classification.input);
				} else if (classification.prediction == 'added sugar') {
					addedSugarIngredients.push(classification.input);
				} else if (classification.prediction == 'shellfish') {
					shellfishIngredients.push(classification.input);
				}
			});
		})
	);
	res.json({
		dairyIngredients: dairyIngredients,
		addedSugarIngredients: addedSugarIngredients,
		shellfishIngredients: shellfishIngredients
	});
});

app.listen(PORT, () => {
	console.log(`Server listening on ${PORT}`);
});
