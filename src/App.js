import React, { useState } from "react";
import Header from "./components/Header/Header";
import FormInput from "./components/FormInput/FormInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";

function App(props) {
  const [formData, setFormData] = useState(props.initialUserInput);

  const calculateHandler = (formData) => {
    setFormData(formData);
  };

  // Example of derived state. The calculate function runs if data is passed from the FormInput to the calculateHandler. This is a more efficient way of dealing with the passed in data rather than managing the state directly
  // because the engine that parses the code will not run the code (and save memory) unless data is passed which would initiate the setResults function with that object, meaning results would be truthy and run the code

  if (formData) {
    const yearlyData = [];
    // Initializes and empty array called yearlyData, and will store the results calculated for each year
    let currentSavings = +formData["current-savings"]; // feel free to change the shape of this input object!
    const yearlyContribution = +formData["yearly-contribution"]; // as mentioned: feel free to change the shape...
    const expectedReturn = +formData["expected-return"] / 100;
    const duration = +formData["duration"];

    // Each const declared is passed the data entered by the end user and assigns, eg: "current-savings".  The + sign before formData["current-savings"] converts the entered value to a number.
    // The below code calculates yearly results (total savings, interest etc.)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    console.log(yearlyData);
  }

  return (
    <div>
      <Header />
      <FormInput calculateHandler={calculateHandler} />
      {!formData && <p>Please enter data</p>}
      {formData && <ResultsTable />}
    </div>
  );
}

export default App;
