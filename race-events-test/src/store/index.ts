import { configureStore } from '@reduxjs/toolkit'
import eventsSliceReducer from './events/eventsSlice'
import racesSliceReducer from './races/racesSlice'
const store = configureStore({
  reducer: {
    eventsSliceReducer,
    racesSliceReducer
  },
  devTools: true
})
export type RootState = ReturnType<typeof store.getState>

export default store
