export const calculate = (formData) => {
  const yearlyData = [];

  let currentSavings = +formData["current-savings"];
  const yearlyContribution = +formData["yearly-contribution"];
  const expectedReturn = +formData["expected-return"] / 100;
  const duration = +formData["duration"];

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

  return yearlyData;
};
