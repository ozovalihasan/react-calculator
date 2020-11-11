import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../index.scss';

const App = () => {
  const [total, setTotal] = useState('');
  const [next, setNext] = useState('');
  const [operation, setOperation] = useState('');

  const handleClick = buttonName => {
    const result = calculate({ next, total, operation }, buttonName);
    setNext(result.next);
    setTotal(result.total);
    setOperation(result.operation);
  };

  return (
    <div className="app">
      <Display next={next} total={total} operation={operation} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};
export default App;
