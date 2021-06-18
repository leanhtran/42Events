import { createAsyncThunk, ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "..";
import { GetRaces, IGetRaceParams } from "../../core/getRaces";
import { IRaceFilter, updateFilter } from "./racesSlice";

export const fetchRaces = createAsyncThunk(
  "races/fetch",
  (params: IGetRaceParams) => GetRaces(params).then((res) => res.data)
);

export const updateRaceFilter = function makeSandwichesForEverybody(
  filter: IRaceFilter
) {
  return function (dispatch: ThunkDispatch<void, RootState, any>) {
    dispatch(updateFilter(filter));
    dispatch(
      fetchRaces({
        sort: "new_release",
        skipCount: 0,
        limit: 10,
        sportType: filter.sportType,
      })
    );
  };
};
