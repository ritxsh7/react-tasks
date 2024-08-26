import { configureStore } from "@reduxjs/toolkit";
import contributors from "./contributors";

export const store = configureStore({
  reducer: {
    contributors: contributors,
  },
});
