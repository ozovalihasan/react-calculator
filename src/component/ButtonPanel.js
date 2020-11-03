import React from 'react';
import Button from './Button';
import '../index.scss';

function ButtonPanel() {
  return (
    <>
      <div className="button-row">
        <Button name="AC" color="darkgray" />
        <Button name="+/-" color="darkgray" />
        <Button name="%" color="darkgray" />
        <Button name="÷" />
      </div>
      <div className="button-row">
        <Button name="7" color="darkgray" />
        <Button name="8" color="darkgray" />
        <Button name="9" color="darkgray" />
        <Button name="X" />
      </div>
      <div className="button-row">
        <Button name="4" color="darkgray" />
        <Button name="5" color="darkgray" />
        <Button name="6" color="darkgray" />
        <Button name="-" />
      </div>
      <div className="button-row">
        <Button name="1" color="darkgray" />
        <Button name="2" color="darkgray" />
        <Button name="3" color="darkgray" />
        <Button name="+" />
      </div>
      <div className="button-row">
        <Button name="0" wide color="darkgray" />
        <Button name="." color="darkgray" />
        <Button name="=" />
      </div>
    </>
  );
}

export default ButtonPanel;
