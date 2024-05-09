import { createSlice } from "@reduxjs/toolkit";

// Get theme from local storage
const storedTheme = localStorage.getItem("theme");

/**
 * Check if theme is stored in local storage
 * If theme is stored, set initial state to that theme
 * Otherwise, set initial state to empty string
*/
const initialState = { theme: storedTheme ? storedTheme : "" };

/**
 * createSlice is a function that creates a slice of state, 
 * which is a part of the Redux state tree that is managed by
 * a specific reducer. It creates a slice of state, an initial state, and a set of
 * reducer functions that can be used to update the state.
*/
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // Toggle theme between empty string and dark
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "" : "dark";

      const newTheme = state.theme;

      if (newTheme === "dark") {
        // Set "theme" to "dark" in local storage
        localStorage.setItem("theme", newTheme);
      } else {
        // Set "theme" to empty string in local storage
        localStorage.setItem("theme", "");
      }
    },
  }
});

/**
 * Export actions in the slice, allowing other parts of the application to access and
 * dispatch these actions to toggle the theme between light and dark modes
*/
export const toggleActions = themeSlice.actions;

/**
 * Export reducer in the slice which is responsible for updating the state
 * based on dispatched actions related to theme toggling, 
 * facilitating integration of the theme state management within the Redux store.
*/
export default themeSlice.reducer;