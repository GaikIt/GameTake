import { createSlice } from "@reduxjs/toolkit";

interface filterState {
  platform: string | null;
  category: string | null;
  sort: string | null;
}
const initialState: filterState = {
  platform: "",
  category: "",
  sort: "",
};
const filterSlice = createSlice({
  name: "filtersSlice",
  initialState,
  selectors: {
    selectPlatform: (state: filterState) => state.platform,
    selectCategory: (state: filterState) => state.category,
  },
  reducers: {
    setFilter: (state, action) => {
      state.platform = action.payload;
    },
  },
});
export const { selectPlatform, selectCategory } = filterSlice.selectors;
export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;
