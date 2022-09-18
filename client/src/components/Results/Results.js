import React, { useState, useEffect } from "react";

const Results = ({ selectedChoices, ingredients }) => {
  const API_URL = "http://localhost:3001";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dairyItems = [];
  const sugarItems = [];
  const shellfishItems = [];
  const promises = [];

  /* 	useEffect(() => {
			fetch(`${API_URL}/api?inputs=${element}`)
			.then((response) => {
				if (!response.ok) {
					throw new Error(
						`This is an HTTP error: The status is ${response.status}`
					);
				}
				return response.json();
			})
			.then((actualData) => {
				setData(actualData);
				setError(null);
			})
			.catch((err) => {
				setError(err.message);
				setData(null);
			})
			.finally(() => {
				setLoading(false);
				data.forEach((element) => {
					if (element.prediction == 'dairy')
					{
						dairyItems.append(element.)
					}
				});
			});
		})
	}, []); */

  return (
    <div className="App">
      <div class="wrapper3">
        <div class="padding">
          <h1>Results</h1>
          {/* {loading && <div>A moment please...</div>}
			{error && (
				<div>{`There is a problem fetching the post data - ${error}`}</div>
			)}
			{selectedChoices.forEach((element) => {
				if (element) {
					return (
						<div>
							<h1>element.name</h1>
						</div>
					);
				}
			})}

			<ul>
				{data &&
					data.map((element) => (
						<li>
							<h3>{element.input}</h3>
							<h3>this is a {element.prediction}</h3>
							<h3>{element.confidences.toString()}</h3>
						</li>
					))}
			</ul> */}
        </div>
      </div>
    </div>
  );
};

export default Results;
