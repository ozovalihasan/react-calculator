import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../index.scss';
import calculate from '../logic/calculate';

const App = () => (
  <div className="app">
    {console.log(calculate({ total: '3', next: '2', operation: '+' }, '+'))}
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
