import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const selectEvents = (state: RootState) => state.eventsSliceReducer
const selectFeatured = createSelector(selectEvents, state => state.featured)
export {
    selectEvents,
    selectFeatured
}