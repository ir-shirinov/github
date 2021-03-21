import React from 'react';
import c from 'classnames';
import PropTypes from 'prop-types';

import './index.styl';

const Loader = ({ loading, children }) => (
  <div className={c({ loading })}>
    {children}
  </div>
);

Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Loader;
