import { configureStore } from "@reduxjs/toolkit";
import { carsApi } from "./reducers/carsApi";
import { authApi } from "./reducers/authApi";
import authSlice from "./reducers/authSlice";
import { colorApi } from "./reducers/colorApi";
import { imagesApi } from "./reducers/imageApi";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [authApi.reducerPath]: authApi.reducer,
    [imagesApi.reducerPath]: imagesApi.reducer,
    [carsApi.reducerPath]: carsApi.reducer,
    [colorApi.reducerPath]: colorApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware()
      .concat(carsApi.middleware)
      .concat(authApi.middleware)
      .concat(colorApi.middleware)
      .concat(imagesApi.middleware),
});
