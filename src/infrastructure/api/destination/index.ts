import client from '..';

export const getDestination = async (keyword: string) =>
  await client
    .get('/destination/search', { params: { keyword } })
    .then(({ data }) => data)
    .catch((err) => err.response);
