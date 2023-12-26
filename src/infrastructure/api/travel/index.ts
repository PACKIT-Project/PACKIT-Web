import client from '@api/index';
import { CreateTripProps } from '@type/createTrip';

// 여행 생성
export const createTravel = async (travelInfo: CreateTripProps) =>
  await client
    .post('/travels/new', travelInfo)
    .then(({ data }) => data)
    .catch((err) => err.response);

// 현재 동행자 수 확인 & 초대코드
export const getMemberAndCode = async (travelId: number) =>
  await client
    .get(`/travels/invitations/${travelId}`)
    .then(({ data }) => data.data)
    .catch((err) => err.response);

export const modifyTravel = async ({ travelId, travelInfo }: any) =>
  await client
    .patch(`/travels/${travelId}`, {
      title: travelInfo.title,
      startDate: travelInfo.startDate,
      endDate: travelInfo.endDate,
    })
    .then(({ data }) => data)
    .catch((err) => err.response);

// 동행자 목록 조회
export const getTravelMembers = async (travelId: number) =>
  await client
    .get(`/travels/members/${travelId}`)
    .then(({ data }) => data)
    .catch((err) => err.response);

// 예정된 여행 목록 조회
export const getUpcomingTravles = async () =>
  await client
    .get('/travels/upcoming')
    .then(({ data }) => data)
    .catch((err) => err.response);

// 지난 여행 목록 조회
export const getPastTravles = async () =>
  await client
    .get('/travels/past')
    .then(({ data }) => data)
    .catch((err) => err.response);

// 여행 나의 리스트 상세 조회
export const getTravelMyList = async (travelId: number) =>
  await client
    .get(`/travels/myList/${travelId}`)
    .then(({ data }) => data)
    .catch((err) => err.response);

export const getTravelDetail = async (travelId: string) =>
  await client
    .get(`/travels/${travelId}`)
    .then(({ data }) => data)
    .catch((err) => err.response);

export const postStorageTravel = async (travelId: any, travelInfo: any) =>
  await client
    .post(`travels/bring/${travelId}`, travelInfo)
    .then(({ data }) => data)
    .catch((err) => err.response);

// 여행 삭제
export const deleteTravel = async (travelId: number) =>
  await client
    .delete(`/travels/${travelId}`)
    .then(({ data }) => data)
    .catch((err) => err.response);
