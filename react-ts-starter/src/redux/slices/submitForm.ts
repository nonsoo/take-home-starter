import { createSlice } from "@reduxjs/toolkit";

interface initState {
  isFormSubmitted: boolean;
}

const initialState: initState = {
  isFormSubmitted: false,
};

export const formSubmitSlice = createSlice({
  name: "submitForm",
  initialState,
  reducers: {
    submitForm: (state) => {
      state.isFormSubmitted = true;
    },
    resetForm: (state) => {
      state.isFormSubmitted = false;
    },
  },
});

export const { submitForm, resetForm } = formSubmitSlice.actions;

export default formSubmitSlice.reducer;
