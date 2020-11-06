import React from 'react';
import PropTypes from 'prop-types';
import '../index.scss';

const Display = ({ total, next, operation }) => (
  <div className="display ">
    <div className="w-100">{total || next ? total + operation + next : 0}</div>
  </div>
);

Display.propTypes = {
  total: PropTypes.string,
  next: PropTypes.string,
  operation: PropTypes.string,
};

Display.defaultProps = {
  total: '',
  next: '',
  operation: '',
};

export default Display;
