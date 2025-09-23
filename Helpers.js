export const formatNumber = (value) => {
  if (value === null || value === undefined) return '0';
  return parseFloat(value).toLocaleString('en-US', { maximumFractionDigits: 10 });
};

export const handleButtonPress = (value, currentExpression) => {
  if (value === 'C') {
    return ''; // Clear the current expression
  } else if (value === '=') {
    return currentExpression; // Return the expression for evaluation
  } else {
    return currentExpression + value; // Append the button value to the expression
  }
};
