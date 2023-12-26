import { getTravelMyList, getTravelMemberTodoList } from '@api/travel';
import { useQuery } from 'react-query';

const useGetTravelTodoList = (travelId: number, memberId?: number) => {
  const { data, isLoading } = useQuery(
    ['todoList', travelId, memberId],
    async () => {
      if (memberId) {
        return await getTravelMemberTodoList({ travelId, memberId });
      } else {
        return await getTravelMyList(travelId);
      }
    },
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
    }
  );

  return { data, isLoading };
};

export default useGetTravelTodoList;
