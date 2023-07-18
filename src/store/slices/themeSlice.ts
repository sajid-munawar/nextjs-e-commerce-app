
import { createSlice } from "@reduxjs/toolkit";
import { useTheme } from "next-themes";

// Remove the PayloadAction import and the action creators since we don't need them in this case

const { setTheme } = useTheme(); // Remove 'theme' since it's not being used

export interface ThemeState {
  value: string;
}

const initialState: ThemeState = {
  value: "light",
};

export const ThemeSlice = createSlice({
  name: "themeSlice",
  initialState,
  reducers: {
    changeToDark: (state) => {
      state.value = "dark";
      setTheme(state.value);
    },
    changeToLight: (state) => {
      state.value = "light"; // Corrected to set the theme to 'light'
      setTheme(state.value);
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeToDark, changeToLight } = ThemeSlice.actions;

export default ThemeSlice.reducer;
