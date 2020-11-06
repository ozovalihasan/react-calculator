import Big from 'big.js';
import operate from './operate';

const calculate = ({ total, next, operation }, buttonName) => {
  let newTotal;
  let newNext;
  let newOperation;
  if (next === 'Infinity' || next === '-Infinity' || next === 'NaN') {
    newTotal = '';
    if (buttonName === 'AC') {
      newNext = '';
      newOperation = '';
    } else {
      newNext = next;
      newOperation = operation;
    }
  } else {
    switch (buttonName) {
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
        newTotal = total;
        if (next === '0') {
          newNext = buttonName;
        } else {
          newNext = next + buttonName;
        }
        break;
      case '.':
        newTotal = total;
        if (next && next.toString().includes('.')) {
          newNext = next;
        } else if (next) {
          newNext = next + buttonName;
        } else {
          newNext = 0 + buttonName;
        }

        break;
      case '+/-':
        newTotal = total;
        newNext = next * -1;
        break;
      case 'AC':
        newTotal = '';
        newNext = '';
        newOperation = '';
        break;
      case '%':
        newTotal = total;
        if (next && Number(next) !== 0) {
          newNext = Big(next) / 100;
        } else {
          newNext = '0.00';
        }
        break;
      case '=':
        if (operation && total && next) {
          newTotal = '';
          newNext = operate(total, next, operation);
          newOperation = '';
        } else {
          newTotal = total;
          newNext = next;
          newOperation = operation;
        }
        break;
      default:
        if (operation && next !== '') {
          newTotal = operate(total, next, operation);
          newNext = '';
          newOperation = buttonName;
        } else if (operation) {
          newTotal = total;
          newNext = next;
          newOperation = buttonName;
        } else if (next) {
          newTotal = next;
          newNext = '';
          newOperation = buttonName;
        } else {
          newTotal = '0';
          newNext = next;
          newOperation = buttonName;
        }
        break;
    }
    if (newOperation === undefined) {
      newOperation = operation;
    }
  }
  return { total: newTotal.toString(), next: newNext.toString(), operation: newOperation };
};
export default calculate;
