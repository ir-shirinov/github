import React, { useEffect, useState } from 'react';

import getUsersApi from 'api/github/getUsersApi';

import Loader from 'components/Loader';
import Button from 'components/Button';
import ErrorMessage from 'components/ErrorMessage';
import UserLink from './UserLink';

import './index.styl';

const Main = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    if (!loading) setLoading(true);
    if (error) setError(false);

    getUsersApi()
      .then(setUsers)
      .catch((e) => {
        // eslint-disable-next-line no-console
        console.error(e);
        if (users.length > 0) setUsers([]);
        setError(true);
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Loader loading={loading}>
      <h1>Пользователи GitHub</h1>
      <div className="users">
        {
          users.map((user) => <UserLink key={user.id} login={user.login} />)
        }
      </div>
      {error && <ErrorMessage />}
      <Button onClick={getUsers} loading={loading}>
        Обновить данные
      </Button>
    </Loader>
  );
};

export default Main;
