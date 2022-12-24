import { createSlice } from "@reduxjs/toolkit";

export const eventsSlice = createSlice({
  name: "events",
  initialState: {
    events: null,
  },
  reducers: {
    setEventData: (state, { payload }) => {
      state.events = payload;
    },
  },
});

export const { setEventData } = eventsSlice.actions;
export default eventsSlice.reducer;
