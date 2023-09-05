import { createSlice } from "@reduxjs/toolkit";
import leagueService from '../services/league'

 
const leagueSlice = createSlice({
  name: 'league',
  initialState: [],
  reducers:{
    setLeague(state, action) {
      return action.payload
    },

  }

})


export const { setLeague } = leagueSlice.actions

export const initializeLeague = (leagueID) => {
    console.log('in initialize league reducer function');
  return async dispatch => {
    const league = await leagueService.getLeague(leagueID)
    dispatch(setLeague(league))
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

export default leagueSlice.reducer