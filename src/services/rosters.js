import axios from 'axios'

const getRosters = async (leagueID) => {
  console.log('get rosters leagueID', leagueID);
  //this is actually the user id to get the league of the user. so not based on a specific league id
  //const response = await axios.get(`https://api.sleeper.app/v1/user/${leagueID}/leagues/nfl/2022`)

  const response = await axios.get(`https://api.sleeper.app/v1/league/${leagueID}/rosters`)

  // const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&zappid=${process.env.REACT_APP_WEATHER_API}`)

  return response.data
  // const test = {
  //   testone: 5
  // }
  // return test
  //return null
}

export default { getRosters }