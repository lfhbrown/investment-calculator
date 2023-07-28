import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import FormInput from "./components/FormInput/FormInput";
import ResultsTable from "./components/ResultsTable/ResultsTable";
import { calculate } from "./components/utils/calculate";

const initialUserInput = {
  "current-savings": "",
  "yearly-contribution": "",
  "expected-return": "",
  duration: "",
};

function App() {
  const [formData, setFormData] = useState(initialUserInput);
  const [tableData, setTableData] = useState("");

  const calculateHandler = (formData) => {
    setFormData(formData);
  };
  // Example of derived state. The calculate function runs if data is passed from the FormInput to the calculateHandler. This is a more efficient way of dealing with the passed in data rather than managing the state directly
  // because the engine that parses the code will not run the code (which saves memory) unless data is passed from our handler

  useEffect(
    () => {
      setTableData(calculate(formData));
    }, //The above function is the first argument in the useEffect function. It's comparable to the line of code in a ternary following the &&. It will run if the second argument (dependency array) is met.
    [formData]
  );
  //the array above is called a dependency array. It's the second argument in the useEffect function that determines when the first argument is executed. In this case useEffect  is waiting for formData to change.
  //Once it does it will then call the setTableData function which we initialize with our helper function calculate and pass in the updated formData which we can pass to our FormTable component to display.
  return (
    <div>
      <Header />

      <FormInput
        calculateHandler={calculateHandler}
        initialInvestment={tableData["current-savings"]}
      />
      {!formData && <p>Please enter data</p>}
      {formData && <ResultsTable tableData={tableData} />}
    </div>
  );
}

export default App;
