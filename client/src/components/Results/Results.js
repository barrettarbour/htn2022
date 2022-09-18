import React, { useState, useEffect } from 'react';

const Results = ({ selectedChoices, ingredients }) => {
	document.body.style.backgroundColor = '#86d3ea';
	const API_URL = 'http://localhost:3001';
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch(
					`${API_URL}/api?ingredients=${ingredients}`
				);
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				let actualData = await response.json();
				setData(actualData);
				setError(null);
			} catch (err) {
				setError(err.message);
				setData(null);
			} finally {
				setLoading(false);
			}
		};
		getData();
	}, []);

	return (
		<div class='wrapper3'>
			<div class='padding'>
				<h1>Results</h1>
				{loading && <div>A moment please...</div>}
				{error && (
					<div>{`There is a problem fetching the post data - ${error}`}</div>
				)}
				{selectedChoices.map((choice) => {
					if (
						choice.value &&
						data.dairyIngredients &&
						choice.name == 'dairy'
					) {
						return (
							<div class='ingredBox'>
								<div>{choice.name}</div>
								We found <b>
									{data.dairyIngredients.length}
								</b>{' '}
								ingredients flagged as dairy!
								{data.dairyIngredients.toString()}
							</div>
						);
					} else if (
						choice.value &&
						data.addedSugarIngredients &&
						choice.name == 'added sugar'
					) {
						return (
							<p>
								{choice.name}
								We found {
									data.addedSugarIngredients.length
								}{' '}
								ingredients flagged as added sugar!
								{data.addedSugarIngredients.toString()}
							</p>
						);
					} else if (
						choice.value &&
						data.shellfishIngredients &&
						choice.name == 'shellfish'
					) {
						return (
							<p>
								{choice.name}
								We found {data.shellfishIngredients.length}{' '}
								ingredients flagged as shellfish!
								{data.shellfishIngredients.toString()}
							</p>
						);
					}
				})}
			</div>
		</div>
	);
};

export default Results;
