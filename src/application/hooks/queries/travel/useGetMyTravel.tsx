import React from 'react';
import { useQuery } from 'react-query';
import {
  getPastTravles,
  getUpcomingTravles,
} from '../../../../infrastructure/api/travel';

const useGetMyTravel = (filter: string) => {
  const {
    data: responseData,
    isLoading,
    error,
  } = useQuery(
    ['mytravels', filter],
    async () => {
      if (filter === '예정된 여행') {
        const res = await getUpcomingTravles();
        return res;
      } else {
        const res = await getPastTravles();
        return res;
      }
    },
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
    }
  );
  const data = responseData?.data;
  return { data, isLoading, error };
};

export default useGetMyTravel;
