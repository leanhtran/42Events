import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const selectRaces = (state: RootState) => state.racesSliceReducer
const selectRaceFilter = createSelector(selectRaces, state => state.filter)
const selectTotalRaces = createSelector(selectRaces, state => state.totalData)
const selectRaceList = createSelector(selectRaces, state => state.races)
export {
    selectRaces,
    selectRaceFilter,
    selectTotalRaces,
    selectRaceList,
}