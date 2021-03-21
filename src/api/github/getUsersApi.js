import base from './base';

export default () => base.get('/users?per_page=10')
  .then(({ data }) => {
    if (Array.isArray(data)) return data.map((user) => ({ id: user.id, login: user.login }));
    throw new Error('Изменилось апи, проверьте документацию на https://docs.github.com/en/rest/reference/users#list-users');
  });
