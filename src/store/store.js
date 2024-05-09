import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";

// configureStore sets up the store with the reducer(s)
const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});

/**
 * Exporting the store allows components to subscribe to the store
 * and re-render when the state changes.
 * The store is the central hub that connects all parts of the application
*/
export default store