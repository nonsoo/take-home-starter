import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./slices/page";
import formSubmissionSlice from "./slices/submitForm";

const store = configureStore({
  reducer: { page: pageSlice, form: formSubmissionSlice },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
