import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./slices/page";

const store = configureStore({
  reducer: { page: pageSlice },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
