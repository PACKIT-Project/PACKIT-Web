export interface CreateTripType {
  tripName: string;
  destinationId: number;
  destination: string;
  tripRange: TripRangeType;
  [key: string]: number | string | TripRangeType;
}

export interface TripRangeType {
  start: string;
  end: string;
  [key: string]: string;
}

// api 호출 시 사용할 매개변수 타입
export interface CreateTripProps {
  title: string;
  destinationId: number;
  startDate: string;
  endDate: string;
}
