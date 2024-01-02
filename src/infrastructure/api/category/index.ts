import { patchCategoryReq, postCategoryReq } from '@type/category';
import client from '..';

// 카테고리 생성
export const postCategory = async ({ clusterId, title }: postCategoryReq) =>
  await client
    .post('/travels/categories', { clusterId, title })
    .then(({ data }) => data)
    .catch((err) => err.response);

// 카테고리 수정
export const patchCategory = async ({ categoryId, title }: patchCategoryReq) =>
  await client
    .patch('/travels/categories', { categoryId, title })
    .then(({ data }) => data.message)
    .catch((err) => err.response);

// 카테고리 삭제
export const deleteCategory = async (categoryId: number) =>
  await client
    .delete(`/travels/categories/${categoryId}`)
    .then(({ data }) => data.message)
    .catch((err) => err.response);
