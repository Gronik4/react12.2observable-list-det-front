import { createSlice } from '@reduxjs/toolkit';

const sliseDetails = createSlice({
  name: 'showdetails',
  initialState: {data : {}, loading: false, error: null, choice: null},
  reducers: {
    detChoice(state, action) {
      state.data = {};
      state.loading = false;
      state.error = null;
      state.choice = action.payload;
    },
    detRequest(state, action) {state.data = {}; state.loading = true; state.error = null; state.choice = action.payload;},
    detResult(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    detError(state, action) {
      state.data = {};
      state.loading = false;
      state.error = action.payload;
    }
  }
});

export const { detChoice, detRequest, detResult, detError } = sliseDetails.actions;
export default sliseDetails.reducer;
