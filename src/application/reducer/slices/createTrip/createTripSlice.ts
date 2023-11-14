import { createSlice } from '@reduxjs/toolkit';
import {
  CreateTripType,
  TripRangeType,
} from '../../../../application/type/createTrip';

const initialState: CreateTripType = {
  tripType: '',
  tripName: '',
  tripRange: {
    start: '',
    end: '',
  },
  checkCount: '',
  state: '', // 여행 생성 시작한 페이지 알기 위해 (ex. main)
  tripId: 0, // 템플릿 불러오기 후 여행 생성을 위해
  memberNum: 1,
};

export const createTripSlice = createSlice({
  name: 'createTrip',
  initialState,
  reducers: {
    initializeCreateTripInfo: () => initialState,
    changeCreateTripState: (
      state,
      {
        payload,
      }: { payload: { type: string; value: string | number | TripRangeType } }
    ) => {
      const { type, value } = payload;
      state[type] = value;
    },
    changeTripRange: (
      state,
      { payload }: { payload: { type: string; value: string } }
    ) => {
      const { type, value } = payload;
      if (state.tripRange) {
        state.tripRange[type] = value;
      }
    },
  },
});

export const { initializeCreateTripInfo, changeCreateTripState, changeTripRange } =
  createTripSlice.actions;

export default createTripSlice.reducer;
