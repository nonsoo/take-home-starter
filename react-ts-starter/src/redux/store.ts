import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./slices/page";
import formSubmissionSlice from "./slices/submitForm";
import completedPagesSlice from "./slices/completedPages";

const store = configureStore({
  reducer: {
    page: pageSlice,
    form: formSubmissionSlice,
    completedPage: completedPagesSlice,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
