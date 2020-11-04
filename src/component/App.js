import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../index.scss';
// import calculate from '../logic/calculate';

const App = () => (
  <div className="app">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
