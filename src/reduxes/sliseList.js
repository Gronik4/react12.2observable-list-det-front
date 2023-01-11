import { createSlice } from "@reduxjs/toolkit";

const sliseList = createSlice({
  name: 'showlist',
  initialState: { data: [], loading: false, error: null },
  reducers: {
    listRequest(state) { state.data = []; state.loading = true; state.error = null;},
    listResult(state, action) {
      state.data = action.payload;
      state.loading = false;
      state.error = null
    },
    listError(state, action) {
      state.data = [];
      state.loading = false;
      state.error = action.payload.message;
    }
  }
});

export const { listRequest, listResult, listError } = sliseList.actions;
export default sliseList.reducer;
