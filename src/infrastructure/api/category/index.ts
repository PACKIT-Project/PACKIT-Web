import { postCategoryReq } from '@type/category';
import client from '..';

export const postCategory = async ({ clusterId, title }: postCategoryReq) =>
  await client
    .post('/travels/categories', { clusterId, title })
    .then(({ data }) => data)
    .catch((err) => err.response);
