import { createSlice } from "@reduxjs/toolkit";

const getInitialMode = () => {
  try {
    return localStorage.getItem("themeMode") || "light";
  } catch {
    return "light";
  }
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: getInitialMode(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      try {
        localStorage.setItem("themeMode", state.mode);
      } catch {}
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectThemeMode = (state) => state.theme.mode;

export default themeSlice.reducer;
