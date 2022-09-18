import React, { useState } from 'react';

const Choices = ({ handleSubmit }) => {
	const choices = [
		{
			name: 'added sugar'
		},
		{
			name: 'dairy'
		},
		{
			name: 'shellfish'
		}
	];
	const [checkedState, setCheckedState] = useState(
		new Array(choices.length).fill(false)
	);

	const handleOnChange = (position) => {
		const updatedCheckedState = checkedState.map((item, index) =>
			index === position ? !item : item
		);

		setCheckedState(updatedCheckedState);
	};

	return (
		<div>
			<h3>Select Choices</h3>
			<ul className='choice-list'>
				{choices.map(({ name }, index) => {
					return (
						<li key={index}>
							<div className='choices-list-item'>
								<div className='left-section'>
									<input
										type='checkbox'
										id={`custom-checkbox-${index}`}
										name={name}
										value={name}
										checked={checkedState[index]}
										onChange={() => handleOnChange(index)}
									/>
									<label htmlFor={`custom-checkbox-${index}`}>
										{name}
									</label>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
			<button
				onClick={() => {
					handleSubmit(checkedState);
				}}
			>
				Submit
			</button>
		</div>
	);
};

export default Choices;
