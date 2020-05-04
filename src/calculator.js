const Calculator = () => {
  const sum = (a, b) => a + b;
  const rest = (a, b) => a - b;
  const divide = (a, b) => a / b;
  const multiply = (a, b) => a * b;

  return {
    sum, rest, divide, multiply,
  };
};

export default Calculator;