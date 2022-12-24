import { createSlice } from "@reduxjs/toolkit";

export const idUserSlice = createSlice({
  name: "iduser",
  initialState: {
    iduser: null,
  },
  reducers: {
    setIdUser: (state, { payload }) => {
      state.iduser = payload;
    },
  },
});

export const { setIdUser } = idUserSlice.actions;
export default idUserSlice.reducer;
