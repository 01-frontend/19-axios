import { createSlice } from "@reduxjs/toolkit";

import { AsyncState } from "src/common/constants";

const initialState = {
  status: AsyncState.INITIAL,
  data: null,
  error: null,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    fetchRequest: () => ({
      ...initialState,
      status: AsyncState.LOADING,
    }),
    fetchSuccess: (_, { payload }) => ({
      status: AsyncState.SUCCESS,
      data: payload,
      error: null,
    }),
    fetchFailed: (_, { payload }) => ({
      status: AsyncState.ERROR,
      data: null,
      error: payload,
    }),
    fetchReset: () => initialState,
  },
});

export const { fetchRequest, fetchSuccess, fetchFailed, fetchReset } =
  profileSlice.actions;
const profileReducer = profileSlice.reducer;

export default profileReducer;
