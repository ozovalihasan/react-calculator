import React from 'react';
import PropTypes from 'prop-types';
import '../index.scss';

const Button = ({ name, wide, color }) => {
  const buttonPropStyle = {
    backgroundColor: color,
  };

  return (
    <button
      type="button"
      className={`button w-${wide ? '50' : '25'}`}
      style={buttonPropStyle}
    >
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  wide: PropTypes.bool,
  color: PropTypes.string,
};

Button.defaultProps = {
  name: '',
  wide: false,
  color: 'orange',
};

export default Button;
