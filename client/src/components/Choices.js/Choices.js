import React, { useState } from "react";

const Choices = ({ handleSubmit }) => {
  const choices = [
    {
      name: " Added Sugar",
    },
    {
      name: " Dairy",
    },
    {
      name: " Shellfish",
    },
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
    <div class="wrapper1">
      <div class="padding">
        <div class="listDiv">
          <h3>
            <b>What should we look out for?</b>
          </h3>
          <hr class="solid"></hr>
          <ul className="choice-list">
            {choices.map(({ name }, index) => {
              return (
                <li key={index}>
                  <div className="choices-list-item">
                    <div className="left-section">
                      <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={name}
                        value={name}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                      />
                      <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                    </div>
                  </div>
                  <hr class="dashed"></hr>
                </li>
              );
            })}
          </ul>
        </div>
        <button
          onClick={() => {
            handleSubmit(checkedState);
          }}
        >
          Onto the scanning!
        </button>
      </div>
    </div>
  );
};

export default Choices;
