import { PayloadAction } from '@reduxjs/toolkit';

import { combineReducers } from 'redux';

import createTripSlice from './slices/createTrip/createTripSlice';
import userInfoSlice from './slices/user/userInfoSlice';
import TripInfoSlice from './slices/TripInfo/TripInfoSlice';
import termsInfoSlice from './slices/user/termsInfoSlice';

const rootReducer = (state: any, action: PayloadAction<any>) => {
  const combineReducer = combineReducers({
    createTrip: createTripSlice,
    userInfo: userInfoSlice,
    MyTripInfo: TripInfoSlice,
    termsInfo: termsInfoSlice,
  });

  return combineReducer(state, action);
};

export default rootReducer;
