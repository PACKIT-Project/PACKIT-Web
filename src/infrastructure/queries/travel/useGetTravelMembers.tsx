import { getTravelMembers } from '@api/travel';
import { useQuery } from 'react-query';

const useGetTravelMembers = (travelId: number) => {
  const { data, isLoading, refetch } = useQuery(
    ['members', travelId],
    async () => await getTravelMembers(travelId),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
    }
  );

  return { data, isLoading, refetch };
};

export default useGetTravelMembers;
