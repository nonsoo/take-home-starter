import { createSlice } from "@reduxjs/toolkit";

interface initState {
  currPage: number;
}

const initialState: initState = {
  currPage: 1,
};

export const pageSlice = createSlice({
  name: "currPage",
  initialState,
  reducers: {
    increaseCurrPage: (state) => {
      state.currPage = state.currPage + 1;
    },
  },
});

export const { increaseCurrPage } = pageSlice.actions;

export default pageSlice.reducer;
