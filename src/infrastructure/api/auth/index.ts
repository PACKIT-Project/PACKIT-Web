import client from '..';

// 로그아웃
export const logout = async () =>
  await client
    .delete('/auth/logout')
    .then(({ data }) => data)
    .catch((err) => err.response);
