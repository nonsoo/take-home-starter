import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface pageStatus {
  pageNumber: number;
  status: boolean;
}

interface initState {
  completedPage: pageStatus[] | null;
}

const initialState: initState = {
  completedPage: null,
};

export const completedPagesSlice = createSlice({
  name: "completedPages",
  initialState,
  reducers: {
    markCompletedPage: (state, action: PayloadAction<pageStatus[]>) => {
      state.completedPage = [...action.payload];
    },
    setCompletedPages: (state, action: PayloadAction<pageStatus[]>) => {
      state.completedPage = action.payload;
    },
  },
});

export const { markCompletedPage } = completedPagesSlice.actions;

export default completedPagesSlice.reducer;
