import { getDestination } from '@api/destination';
import { useQuery } from 'react-query';

const useGetDestination = (keyword: string) => {
  const {
    data: responseData,
    isLoading,
    error,
  } = useQuery(['destination', keyword], async () => await getDestination(keyword), {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
  });
  const data = responseData?.data;
  return { data, isLoading, error };
};

export default useGetDestination;
