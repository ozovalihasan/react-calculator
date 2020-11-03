import React from 'react';
import PropTypes from 'prop-types';
import '../index.scss';

const Button = ({ name, wide, color }) => {
  const buttonPropStyle = {
    width: `${wide ? '50%' : '25%'}`,
    backgroundColor: color,
  };

  return (
    <button
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
