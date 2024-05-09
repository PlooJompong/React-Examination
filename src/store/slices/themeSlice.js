import { createSlice } from "@reduxjs/toolkit";

// Check if theme is stored in local storage
const storedTheme = localStorage.getItem("theme");
const initialState = { theme: storedTheme ? storedTheme : "" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "dark" ? "" : "dark";

      const newTheme = state.theme;
      if (newTheme === "dark") {
        localStorage.setItem("theme", newTheme);
      } else {
        localStorage.setItem("theme", "");
      }
    },
  }
});

export const toggleActions = themeSlice.actions;
export default themeSlice.reducer;
