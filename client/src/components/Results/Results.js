import React, { useState, useEffect } from "react";
import check from "../../symbols/iconCheckmarkOutline.png";
import close from "../../symbols/iconCloseOutline.png";

const Results = ({ selectedChoices, ingredients }) => {
  const API_URL = "http://localhost:3001";
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
    <div class="wrapper3">
      <div class="padding">
        <h1>Your Scanned Results</h1>
        {loading && <div>A moment please...</div>}
        {error && (
          <div>{`There is a problem fetching the post data - ${error}`}</div>
        )}
        {selectedChoices.map((choice) => {
          if (choice.value && data.dairyIngredients && choice.name == "dairy") {
            return (
              <div class="ingredBox">
                <div class="blueHead">
                  <h4>{choice.name}</h4>
                  {data.dairyIngredients.length > 0 ? (
                    <img
                      src={close}
                      alt="black close"
                      width="35"
                      height="35"
                    ></img>
                  ) : (
                    <img
                      src={check}
                      alt="black checkmark"
                      width="35"
                      height="35"
                    ></img>
                  )}
                </div>
                <p>
                  We found <b>{data.dairyIngredients.length}</b> ingredients
                  flagged as dairy!
                </p>
                <p class="pIngList"> {data.dairyIngredients.join(", ")}</p>
              </div>
            );
          } else if (
            choice.value &&
            data.addedSugarIngredients &&
            choice.name == "added sugar"
          ) {
            return (
              <div class="ingredBox">
                <div class="blueHead">
                  <h4>{choice.name}</h4>
                  {data.addedSugarIngredients.length > 0 ? (
                    <img
                      src={close}
                      alt="black close"
                      width="35"
                      height="35"
                    ></img>
                  ) : (
                    <img
                      src={check}
                      alt="black checkmark"
                      width="35"
                      height="35"
                    ></img>
                  )}
                </div>
                <p>
                  We found <b>{data.addedSugarIngredients.length}</b>{" "}
                  ingredients flagged added sugar!
                </p>
                <p class="pIngList"> {data.addedSugarIngredients.join(", ")}</p>
              </div>
            );
          } else if (
            choice.value &&
            data.shellfishIngredients &&
            choice.name == "shellfish"
          ) {
            return (
              <div class="ingredBox">
                <div class="blueHead">
                  <h4>{choice.name}</h4>
                  {data.shellfishIngredients.length > 0 ? (
                    <img
                      src={close}
                      alt="black close"
                      width="35"
                      height="35"
                    ></img>
                  ) : (
                    <img
                      src={check}
                      alt="black checkmark"
                      width="35"
                      height="35"
                    ></img>
                  )}
                </div>
                <p>
                  We found <b>{data.shellfishIngredients.length}</b> ingredients
                  flagged shellfish!
                </p>
                <p class="pIngList"> {data.shellfishIngredients.join(", ")} </p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Results;
