import { getMemberAndCode } from '@api/travel';
import { useQuery } from 'react-query';

const useGetMembersAndCode = (travelId: number) => {
  const { data, isLoading } = useQuery(
    ['membersAndCode', travelId],
    async () => await getMemberAndCode(travelId),
    {
      staleTime: 1000 * 60 * 5,
      cacheTime: 1000 * 60 * 30,
    }
  );
  return { data, isLoading };
};

export default useGetMembersAndCode;
