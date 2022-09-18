import React, { useState } from "react";
import "./App.scss";
import Choices from "./components/Choices.js/Choices";
import Ingredients from "./components/Ingredients";
import Results from "./components/Results";
import "./components/fonts.css";
import "../src/components/Ingredients/index.css";

const App = () => {
  const [step, setStep] = useState(1);
  const [selectedChoices, setSelectedChoices] = useState([]);
  const [ingredients, setIngredients] = useState("");

  const handleSubmitChoices = (choices) => {
    setStep(step + 1);
    setSelectedChoices([
      { name: "added sugar", value: choices[0] },
      { name: "dairy", value: choices[1] },
      { name: "shellfish", value: choices[2] },
    ]);
  };

  const handleSubmitIngredients = (ingredients) => {
    setStep(step + 1);
    setIngredients(ingredients);
  };

  if (step == 1) {
    return <Choices handleSubmit={handleSubmitChoices} />;
  } else if (step == 2) {
    return <Ingredients handleSubmit={handleSubmitIngredients} />;
  } else {
    return (
      <Results selectedChoices={selectedChoices} ingredients={ingredients} />
    );
  }
};

export default App;
