import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, wide, color, clickHandler,
}) => {
  const buttonPropStyle = {
    backgroundColor: color,
  };
  return (
    <button
      type="button"
      className={`button main ${wide ? 'w-50' : 'w-25'}`}
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
