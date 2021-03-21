import base from './base';

export default (login) => base.get(`/users/${login}`)
  .then(({ data }) => {
    if (typeof data !== 'object') throw new Error('Изменилось апи, проверьте документацию на https://docs.github.com/en/rest/reference/users#get-a-user');

    return {
      email: data.email || 'Нет почты',
      name: data.name || 'Нет',
      avatarUrl: data.avatar_url,
    };
  });
