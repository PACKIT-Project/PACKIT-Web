import client from '..';

// 활동 알림 켜기
export const enableActiveNotification = async () =>
  await client
    .post('/active-notifications/subscriber')
    .then(({ data }) => data.message)
    .catch((err) => err.response);

// 활동 알림 끄기
export const disableActiveNotification = async () =>
  await client
    .delete('/active-notifications/subscriber')
    .then(({ data }) => data.message)
    .catch((err) => err.response);

// 여행 알림 켜기
export const enableRemindNotification = async () =>
  await client
    .post('/travel-remind-notifications/subscriber')
    .then(({ data }) => data.message)
    .catch((err) => err.response);

// 여행 알림 끄기
export const disableRemindNotification = async () =>
  await client
    .delete('/travel-remind-notifications/subscriber')
    .then(({ data }) => data.message)
    .catch((err) => err.response);

// FCM 토큰 저장
export const postFCM = async (token: string) =>
  await client
    .post('/fcm-token', { token })
    .then(({ data }) => data)
    .catch((err) => err.response);
