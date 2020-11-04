import React from 'react';
import PropTypes from 'prop-types';
import '../index.scss';

const Display = ({ result }) => (
  <div className="display ">
    <div className="w-100">{result}</div>
  </div>
);

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
