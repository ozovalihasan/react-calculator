import React from 'react';
import PropTypes from 'prop-types';
import '../index.scss';

const Button = ({
  name, wide, color, clickHandler,
}) => {
  const buttonPropStyle = {
    backgroundColor: color,
  };

  return (
    <button
      type="button"
      className={`button w-${wide ? '50' : '25'}`}
      style={buttonPropStyle}
      onClick={clickHandler}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  name: '',
  wide: false,
  color: 'darkgray',
  clickHandler: () => '',
};

export default Button;
