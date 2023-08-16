import client from "@api";
import { CreateTripProps } from "@type/createTrip";

export const createTravel = async (travelInfo: CreateTripProps) =>
  await client
    .post("/travels", travelInfo)
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
