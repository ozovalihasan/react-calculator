import React, { setState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../index.scss';

const App = () => {
  const [total, setTotal] = setState('');
  const [next, setNext] = setState('');
  const [operation, setOperation] = setState('');

  const handleClick = buttonName => {
    const result = calculate({ next, total, operation }, buttonName);
    setNext(result.next);
    setTotal(result.total);
    setOperation(result.operation);
  };

  return (
    <div className="app">
      <Display next total operation />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};
export default App;
