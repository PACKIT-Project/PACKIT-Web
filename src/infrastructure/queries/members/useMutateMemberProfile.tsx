import React from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { putMemberProfile } from '@api/member';

const useMutateMemberProfile = () => {
  const queryClient = useQueryClient();

  const { mutate } = useMutation(
    ({ nickname, profileImageUrl }: { nickname: string; profileImageUrl: string }) =>
      putMemberProfile({ nickname, profileImageUrl }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('profile');
      },
    }
  );

  return mutate;
};

export default useMutateMemberProfile;
