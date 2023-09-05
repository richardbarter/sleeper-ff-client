import { createSlice } from "@reduxjs/toolkit";
import rosterService from '../services/rosters'


const rosterSlice = createSlice({
  name: 'roster',
  initialState: [],
  reducers:{
    setRosters(state, action) {
      return action.payload
    },

  }

})


export const { setRosters } = rosterSlice.actions

export const initializeRosters = (leagueID) => {
   
  return async dispatch => {
    const rosters = await rosterService.getRosters(leagueID)
    dispatch(setRosters(rosters))
  }
}

// export const addVote = content => {
//   return async dispatch => {
//     const changedAnecdote = await anecdoteService.voteAnecdote(content)
//     dispatch(vote(changedAnecdote))
//   }
// }

// export const createAnecdote = content => {
//   return async dispatch => {
//     const newAnecdote = await anecdoteService.createAnecdote(content)
//     dispatch(appendAnecdote(newAnecdote))
//   }
// }

export default rosterSlice.reducer