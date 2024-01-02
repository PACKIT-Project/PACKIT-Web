import client from '..';

// 이미지 업로드
export const postImage = async (uploadImage: any) =>
  await client
    .post('/images', uploadImage, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then(({ data }) => data)
    .catch((err) => err.response);
