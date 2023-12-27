import { travelCategoryListType } from './../category/index';
export interface postClusterReq {
  travelId: number;
  title: string;
}

export interface travelClusterListType {
  allItemNum: number;
  clusterId: number;
  order: number;
  title: string;
  travelCategoryList: travelCategoryListType[];
}
