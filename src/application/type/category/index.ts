import { travelItemListType } from '@type/item';

export interface postCategoryReq {
  clusterId: number;
  title: string;
}

export interface travelCategoryListType {
  categoryId: number;
  title: string;
  order: number;
  allItemNum: number;
  checkedItemNum: number;
  travelItemList: travelItemListType[];
}
