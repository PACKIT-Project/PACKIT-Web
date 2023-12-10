import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { deleteTravel } from '@api/travel';

const useDeleteTravel = () => {
  const queryClient = useQueryClient();

  const { mutate, isSuccess } = useMutation(
    async ({ travelId }: { travelId: number }) => await deleteTravel(travelId),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('mytravels');
      },
    }
  );

  return { mutate, isSuccess };
};

export default useDeleteTravel;
