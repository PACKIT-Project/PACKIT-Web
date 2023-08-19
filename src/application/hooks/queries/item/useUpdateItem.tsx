import React from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { updateItemTitle } from "@api/item";

interface MutationProps {
  travelId: number;
  checkListId: number;
  itemId: number;
  title: string;
}

const useUpdateItem = () => {

  const queryClient = useQueryClient();
  const { mutate, data : responseData, isLoading, error } = useMutation(
    async ({ travelId, checkListId, itemId, title } : MutationProps) => await updateItemTitle(travelId, checkListId, itemId, title),
    {
      onSuccess : (data) => {
        queryClient.invalidateQueries(["getTravelDetail"]); //여행 정보 refetch
      },
      onError : (error) => {
      },
    }
  );
  const data = responseData?.data;
  return { mutate, data , isLoading, error };
};

export default useUpdateItem;
