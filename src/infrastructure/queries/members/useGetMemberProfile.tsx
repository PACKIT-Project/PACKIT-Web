import React from 'react';
import { useQuery } from 'react-query';
import { getMemberProfile } from '@api/member';

const useGetMemberProfile = () => {
  const {
    data: responseData,
    isLoading,
    error,
    refetch,
  } = useQuery(['profile'], async () => await getMemberProfile(), {
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 30,
  });
  const data = responseData?.data;
  return { data, isLoading, error, refetch };
};

export default useGetMemberProfile;
