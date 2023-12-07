import client from '..';

// 회원가입 (최초 로그인 후 온보딩)
export const postMember = async ({
  nickname,
  profileImageUrl,
  enableNotification,
}: {
  nickname: string;
  profileImageUrl: string;
  enableNotification: boolean;
}) =>
  await client
    .post('/members', {
      nickname,
      profileImageUrl,
      enableNotification,
      checkTerms: true,
    })
    .then(({ data }) => data)
    .catch((err) => err.response);

// 회원 프로필 조회
export const getMemberProfile = async () =>
  await client
    .get('/members/profiles')
    .then(({ data }) => data)
    .catch((err) => err.response);

// 회원 닉네임 중복 검증
export const duplicateNickname = async (nickname: string) =>
  await client
    .get('/members/nicknames/is-duplicate', { data: { nickname } })
    .then(({ data }) => data)
    .catch((err) => err.response);

// 회원 프로필 정보 수정
export const putMemberProfile = async ({
  nickname,
  profileImageUrl,
}: {
  nickname: string;
  profileImageUrl: string;
}) =>
  await client
    .put('/members/profiles', { nickname, profileImageUrl })
    .then(({ data }) => data)
    .catch((err) => err.response);

// 회원 탈퇴
export const deleteMember = async () =>
  await client
    .delete('/members')
    .then(({ data }) => data)
    .catch((err) => err.response);
