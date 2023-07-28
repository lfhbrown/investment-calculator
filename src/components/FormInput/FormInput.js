import React, { useState } from "react";

//take this out and throw inside of my calculate.js and rename calculate.js to helper functions
//as well as the reset handler

const FormInput = (props) => {
  const initialUserInput = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  };
  const { calculateHandler } = props;
  const [userDataInput, setUserDataInput] = useState(initialUserInput);

  const resetHandler = () => {
    setUserDataInput(initialUserInput);
  };
  const inputChangeHandler = (input, value) => {
    setUserDataInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();

    calculateHandler(userDataInput);
  };

  return (
    <form className="form" onSubmit={submitHandler}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("current-savings", event.target.value)
            }
            type="number"
            id="current-savings"
            value={userDataInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("yearly-contribution", event.target.value)
            }
            type="number"
            id="yearly-contribution"
            value={userDataInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            onChange={(event) =>
              inputChangeHandler("expected-return", event.target.value)
            }
            type="number"
            id="expected-return"
            value={userDataInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            onChange={(event) =>
              inputChangeHandler("duration", event.target.value)
            }
            type="number"
            id="duration"
            value={userDataInput["duration"]}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
};

export default FormInput;
