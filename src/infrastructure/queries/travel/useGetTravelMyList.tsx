import { getTravelMyList } from '@api/travel';
import { useQuery } from 'react-query';

const useGetTravelMyList = (travelId: number) => {
  const { data, isLoading } = useQuery(
    ['myList', travelId],
    async () => await getTravelMyList(travelId),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
    }
  );

  return { data, isLoading };
};

export default useGetTravelMyList;
