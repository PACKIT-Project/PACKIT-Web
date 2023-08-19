import client from "@api/index";
import { CreateTripProps } from "@type/createTrip";

export const createTravel = async (travelInfo: CreateTripProps) =>
  await client
    .post("/travels", travelInfo)
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

export const getUpcomingTravles = async (memberId: number) =>
  await client
    .get("/travels/upcoming", { params: { memberId } })
    .then(({ data }) => data)
    .catch((err) => err.response);

export const getPastTravles = async (memberId: number) =>
  await client
    .get("/travels/past", { params: { memberId } })
    .then(({ data }) => data)
    .catch((err) => err.response);

export const getTravelDetail = async (travelId: string, memberId: number) =>
  await client
    .get(`/travels/${travelId}`, { params: { memberId } })
    .then(({ data }) => data)
    .catch((err) => err.response);
