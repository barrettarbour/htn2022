import React, { useState } from 'react';
import './App.scss';
import Choices from './components/Choices.js/Choices';
import Ingredients from './components/Ingredients';
import Results from './components/Results';

const App = () => {
	const [step, setStep] = useState(1);

	const nextStep = () => {
		setStep(step + 1);
	};

	if (step == 1) {
		return <Choices nextStep={nextStep} />;
	} else if (step == 2) {
		return <Ingredients nextStep={nextStep} />;
	} else {
		return <Results />;
	}
};

export default App;
