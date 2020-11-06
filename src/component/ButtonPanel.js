import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import '../index.scss';

function ButtonPanel(props) {
  const { clickHandler } = props;
  return (
    <>
      <div className="button-row">
        <Button
          name="AC"
          color="darkgray"
          clickHandler={() => clickHandler('AC')}
        />
        <Button
          name="+/-"
          color="darkgray"
          clickHandler={() => clickHandler('+/-')}
        />
        <Button
          name="%"
          color="darkgray"
          clickHandler={() => clickHandler('%')}
        />
        <Button name="÷" clickHandler={() => clickHandler('÷')} />
      </div>
      <div className="button-row">
        <Button
          name="7"
          color="darkgray"
          clickHandler={() => clickHandler('7')}
        />
        <Button
          name="8"
          color="darkgray"
          clickHandler={() => clickHandler('8')}
        />
        <Button
          name="9"
          color="darkgray"
          clickHandler={() => clickHandler('9')}
        />
        <Button name="X" clickHandler={() => clickHandler('X')} />
      </div>
      <div className="button-row">
        <Button
          name="4"
          color="darkgray"
          clickHandler={() => clickHandler('4')}
        />
        <Button
          name="5"
          color="darkgray"
          clickHandler={() => clickHandler('5')}
        />
        <Button
          name="6"
          color="darkgray"
          clickHandler={() => clickHandler('6')}
        />
        <Button name="-" clickHandler={() => clickHandler('-')} />
      </div>
      <div className="button-row">
        <Button
          name="1"
          color="darkgray"
          clickHandler={() => clickHandler('1')}
        />
        <Button
          name="2"
          color="darkgray"
          clickHandler={() => clickHandler('2')}
        />
        <Button
          name="3"
          color="darkgray"
          clickHandler={() => clickHandler('3')}
        />
        <Button name="+" clickHandler={() => clickHandler('+')} />
      </div>
      <div className="button-row">
        <Button
          name="0"
          wide
          color="darkgray"
          clickHandler={() => clickHandler('0')}
        />
        <Button
          name="."
          color="darkgray"
          clickHandler={() => clickHandler('.')}
        />
        <Button name="=" clickHandler={() => clickHandler('=')} />
      </div>
    </>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
