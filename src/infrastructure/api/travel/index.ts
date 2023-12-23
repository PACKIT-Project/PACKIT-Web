import client from '@api/index';
import { CreateTripProps } from '@type/createTrip';

export const createTravel = async (travelInfo: CreateTripProps) =>
  await client
    .post('/travels/new', travelInfo)
    .then(({ data }) => data)
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

export const deleteTravel = async (travelId: number) =>
  await client
    .delete(`/travels/${travelId}`)
    .then(({ data }) => data)
    .catch((err) => err.response);

export const getUpcomingTravles = async () =>
  await client
    .get('/travels/upcoming')
    .then(({ data }) => data)
    .catch((err) => err.response);

export const getPastTravles = async () =>
  await client
    .get('/travels/past')
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
