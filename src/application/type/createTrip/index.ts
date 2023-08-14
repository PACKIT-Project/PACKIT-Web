export interface CreateTripType {
  tripType?: string;
  tripName?: string;
  tripRange?: TripRangeType;
  checkCount?: string;
  state?: string;
  [key: string]: string | TripRangeType | undefined;
}

export interface TripRangeType {
  start: string;
  end: string;
  [key: string]: string;
}

// api 호출 시 사용할 매개변수 타입
export interface CreateTripProps {
  memberId: number;
  title: string;
  destinationType: string;
  startDate: string;
  endDate: string;
}
