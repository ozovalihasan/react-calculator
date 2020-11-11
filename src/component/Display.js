import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ total, next, operation }) => (
  <div className="display main">
    <div className="display w-100">
      {total || next ? total + operation + next : 0}
    </div>
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
