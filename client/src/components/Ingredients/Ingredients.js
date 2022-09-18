import React, { useState } from 'react';

const Ingredients = ({ handleSubmit }) => {
	const [ingredients, setIngredients] = useState('');

	const handleChange = (e) => {
		setIngredients(e.target.value);
	};

	return (
		<div>
			<h1>Hello, input your ingredients</h1>
			<form>
				<label>
					Name:
					<input
						type='text'
						value={ingredients}
						onChange={handleChange}
						name='name'
					/>
				</label>
				<input
					type='submit'
					value='Submit'
					onClick={() => {
						handleSubmit(ingredients);
					}}
				/>
			</form>
		</div>
	);
};

export default Ingredients;
