import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  let newTotal;
  let newNext;
  if (buttonName === '+/-') {
    newTotal = total * -1;
    newNext = next * -1;
  } else {
    newTotal = operate(total, next, operation);
    newNext = '';
  }
  return [newTotal, newNext, operation];
};
export default calculate;
