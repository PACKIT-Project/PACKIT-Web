import React from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { deleteItems } from '@api/item';

interface MutationProps {
  travelId: number;
  checkListId: number;
  itemId: number;
}

const useDeleteItem = () => {
  const queryClient = useQueryClient();
  const {
    mutate,
    data: responseData,
    isLoading,
    error,
  } = useMutation(
    async ({ travelId, checkListId, itemId }: MutationProps) =>
      await deleteItems(travelId, checkListId, itemId),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(['getTravelDetail']); //여행 정보 refetch
      },
      onError: (error) => {},
    }
  );
  const data = responseData?.data;
  return { mutate, data, isLoading, error };
};

export default useDeleteItem;
