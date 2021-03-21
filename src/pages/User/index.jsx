import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';

import getUserApi from 'api/github/getUserApi';
import Loader from 'components/Loader';
import ErrorMessage from 'components/ErrorMessage';

import './index.styl';

const User = ({ match: { params: { login } } }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [user, setUser] = useState();

  const endLoadAvater = () => setLoading(false);

  useEffect(() => {
    getUserApi(login)
      .then((result) => {
        if (!result.avatarUrl) setLoading(false);
        setUser(result);
      })
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e);
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <Loader loading={loading}>
      <h1>
        Пользователь Github
        {' '}
        {login}
      </h1>
      {user && (
        <>
          <span className="text">
            Имя:
            {' '}
            {user.name}
          </span>
          <img
            className="avatar"
            src={user.avatarUrl}
            alt={`аватар-${login}`}
            onLoad={endLoadAvater}
            onError={endLoadAvater}
          />
          <span className="text">
            Email:
            {' '}
            {user.email}
          </span>
        </>
      )}
      {error && <ErrorMessage />}
      <Link to="/" className="back">
        К Юзерам
      </Link>
    </Loader>
  );
};

User.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      login: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default withRouter(User);
