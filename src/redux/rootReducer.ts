import { baseApi } from "./api/baseApi";
import counterSlice from "./features/counterSlice";

export const reducer = {
  counter: counterSlice,
  [baseApi.reducerPath]: baseApi.reducer,
};
