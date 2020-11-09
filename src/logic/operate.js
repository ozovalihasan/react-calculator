import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  let result;
  const numberOneBig = Big(numberOne);
  const numberTwoBig = Big(numberTwo);
  switch (operation) {
    case '-':
      result = numberOneBig.minus(numberTwoBig);
      break;
    case '+':
      result = numberOneBig.plus(numberTwoBig);
      break;
    case '÷':
      if (Number(numberTwo) === 0) {
        result = numberOne / numberTwo;
      } else {
        result = numberOneBig.div(numberTwoBig);
      }
      break;
    case 'X':
      result = numberOneBig.times(numberTwoBig);
      break;
    default:
      break;
  }

  return result.toString();
};

export default operate;
