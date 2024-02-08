import client from '..';

// FCM 토큰 저장
export const postFCM = async (token: string) =>
  await client
    .post('/fcm-token', { token })
    .then(({ data }) => data)
    .catch((err) => err.response);
