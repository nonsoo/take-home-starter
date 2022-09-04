import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    setCurrPage: (state, action: PayloadAction<number>) => {
      state.currPage = action.payload;
    },
  },
});

export const { increaseCurrPage, setCurrPage } = pageSlice.actions;

export default pageSlice.reducer;
