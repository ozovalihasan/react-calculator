import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import '../index.scss';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: '',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    this.setState(prevState => {
      const result = calculate(prevState, buttonName);
      return {
        next: result.next,
        total: result.total,
        operation: result.operation,
      };
    });
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="app">
        <Display total={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={this.handleClick} />
      </div>
    );
  }
}
