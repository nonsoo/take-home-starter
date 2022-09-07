import { createSlice } from "@reduxjs/toolkit";

interface initState {
  isFormSubmitted: boolean;
  pages: { oneComplete: boolean; twoComplete: boolean };
}

const initialState: initState = {
  isFormSubmitted: false,
  pages: { oneComplete: false, twoComplete: false },
};

export const formSubmitSlice = createSlice({
  name: "submitForm",
  initialState,
  reducers: {
    submitForm: (state) => {
      state.isFormSubmitted = true;
    },

    pageOneComplete: (state) => {
      state.pages.oneComplete = true;
    },
    pageTwoComplete: (state) => {
      state.pages.twoComplete = true;
    },
    resetForm: (state) => {
      state.isFormSubmitted = false;
      state.pages.oneComplete = false;
      state.pages.twoComplete = false;
    },
  },
});

export const { submitForm, resetForm, pageOneComplete, pageTwoComplete } =
  formSubmitSlice.actions;

export default formSubmitSlice.reducer;
