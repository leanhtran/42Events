import { createSlice } from '@reduxjs/toolkit'
import { IRace, IRaceEvent } from '../../model/event'
import { fetchEvents } from "./eventsAction"
export interface IEventsSlice {
  featured: IRace[],
  startingSoon: IRace[],
  popular: IRace[],
  newRelease: IRace[],
  free: IRace[],
  past: IRace[],
}
const initialState: IEventsSlice = {
  featured: [],
  startingSoon: [],
  popular: [],
  newRelease: [],
  free: [],
  past: [],
}
export const eventsSlice = createSlice({
  name: 'events',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(fetchEvents.fulfilled, (state, { payload }) => {
      state.featured = (payload as IRaceEvent).featured
      state.startingSoon = (payload as IRaceEvent).startingSoon
      state.popular = (payload as IRaceEvent).popular
      state.newRelease = (payload as IRaceEvent).newRelease
      state.free = (payload as IRaceEvent).free
      state.past = (payload as IRaceEvent).past
    })
  },


})

export default eventsSlice.reducer
