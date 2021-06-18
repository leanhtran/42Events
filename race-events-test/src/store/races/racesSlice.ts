import { createSlice } from "@reduxjs/toolkit";
import { IResponse } from "../../core/Response";
import { IRace, RaceList } from "../../model/event";
import { fetchRaces } from "./racesAction";
export interface IRaceFilter {
  sportType: string | null;
}
export interface IRacesSlice {
  races: IRace[];
  filter: IRaceFilter;
  totalData: number;
}
const initialState: IRacesSlice = {
  races: [],
  filter: {
    sportType: null,
  },
  totalData: 0
};
export const racesSlice = createSlice({
  name: "races",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRaces.fulfilled, (state, { payload }) => {
      state.races = (payload as IResponse<RaceList>).data;
      state.totalData = (payload as IResponse<RaceList>).totalData;
    });
  },
});
export const { updateFilter } = racesSlice.actions;
export default racesSlice.reducer;
