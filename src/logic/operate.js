import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  const numberOneBig = Big(numberOne);
  const numberTwoBig = Big(numberTwo);
  switch (operation) {
    case '-':
      result = numberOneBig - numberTwoBig;
      break;
    case '+':
      result = numberOneBig + numberTwoBig;
      break;
    case '/':
      result = numberOneBig / numberTwoBig;
      break;
    case 'X':
      result = numberOneBig * numberTwoBig;
      break;
    case '%':
      result = numberOneBig / 100;
      break;
    default:
      break;
  }

  return result;
};

export default operate;
