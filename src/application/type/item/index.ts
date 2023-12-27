export interface postItemReq {
  categoryId: number;
  title: string;
}

export interface travelItemListType {
  itemId: number;
  title: string;
  order: number;
  isChecked: boolean;
}
