import client from '..';

// 회원가입 (최초 로그인 후 온보딩)
export const postMember = async ({
  nickname,
  profileImageUrl,
}: {
  nickname: string;
  profileImageUrl: string;
}) =>
  await client
    .post('/members', { nickname, profileImageUrl })
    .then(({ data }) => data)
    .catch((err) => err.response);

// 회원 탈퇴
export const deleteMember = async () =>
  await client
    .delete('/members')
    .then(({ data }) => data)
    .catch((err) => err.response);
