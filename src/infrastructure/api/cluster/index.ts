import client from '..';
import { postClusterReq } from './../../../application/type/cluster/index';

// 할 일 그룹 생성
export const postCluster = async ({ travelId, title }: postClusterReq) =>
  await client
    .post('/travels/clusters', { travelId, title })
    .then(({ data }) => data)
    .catch((err) => err.response);

// 할 일 그룹 삭제
export const deleteCluster = async (clusterId: number) =>
  await client
    .delete(`/travels/clusters/${clusterId}`)
    .then(({ data }) => data.message)
    .catch((err) => err.response);
