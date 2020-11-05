import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  let newTotal;
  let newNext;
  switch (buttonName) {
    case '+/-':
      newTotal = total * -1;
      newNext = next * -1;
      break;
    case 'AC':
      newTotal = '';
      newNext = '';
      break;
    case '%':
      newTotal = total / 100;
      newNext = next / 100;
      break;
    default:
      newTotal = operate(total, next, operation);
      newNext = '';
      break;
  }

  return { total: newTotal, next: newNext, operation };
};
export default calculate;
