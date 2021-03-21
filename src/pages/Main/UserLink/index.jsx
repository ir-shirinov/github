import React from 'react';
import c from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './index.styl';

const UserLink = ({ login }) => (
  <Link className="user" to={`/${login}`}>
    {login}
  </Link>
);

UserLink.propTypes = {
  login: PropTypes.string.isRequired,
};

export default UserLink;
