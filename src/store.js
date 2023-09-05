import { configureStore } from "@reduxjs/toolkit"
import leagueReducer from "./reducers/leagueReducer"
import rosterReducer from "./reducers/rosterReducer"


export const store = configureStore({
  reducer: {
    league: leagueReducer,
    roster: rosterReducer
  },
})