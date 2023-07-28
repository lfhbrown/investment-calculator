import React from "react";

const ResultsTable = (props) => {
  const { tableData, initialInvestment } = props;

  console.log(initialInvestment);

  if (tableData) {
    return (
      <table className="result">
        <thead>
          <tr>
            <th>Year</th>
            <th>Total Savings</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((yearData) => (
            <tr>
              <td>{yearData.year}</td>
              <td>{yearData.savingsEndOfYear}</td>
              <td>{yearData.yearlyInterest}</td>
              <td>
                {yearData.savingsEndOfYear -
                  initialInvestment -
                  yearData.yearlyContribution * yearData.year}
              </td>
              <td>
                {initialInvestment +
                  yearData.yearlyContribution * yearData.year}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

export default ResultsTable;
