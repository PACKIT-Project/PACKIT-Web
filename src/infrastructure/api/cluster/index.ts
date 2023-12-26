import client from '..';
import { postClusterReq } from './../../../application/type/cluster/index';

export const postCluster = async ({ travelId, title }: postClusterReq) =>
  await client
    .post('/travels/clusters', { travelId, title })
    .then(({ data }) => data)
    .catch((err) => err.response);
