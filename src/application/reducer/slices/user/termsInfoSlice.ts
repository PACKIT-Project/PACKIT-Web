import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState = {
  enableNotification: false,
};

export const termsInfoSlice = createSlice({
  name: 'termsInfo',
  initialState,
  reducers: {
    initializeTermsInfo: () => initialState,
    setTermsInfo: (state, { payload }: PayloadAction<boolean>) => {
      return {
        ...state,
        enableNotification: payload,
      };
    },
  },
});

export const { initializeTermsInfo, setTermsInfo } = termsInfoSlice.actions;

export default termsInfoSlice.reducer;
