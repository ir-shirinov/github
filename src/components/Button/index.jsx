import React from 'react';
import PropTypes from 'prop-types';

import './index.styl';

const Button = ({
  children,
  onClick,
  disabled,
  loading,
}) => (
  <button
    className="button"
    onClick={onClick}
    disabled={disabled || loading}
    type="button"
  >
    {loading ? 'Грузим...' : children}
  </button>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
  disabled: false,
};

export default Button;
