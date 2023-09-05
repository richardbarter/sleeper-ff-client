import Navbar from "../components/Navbar/Navbar"
import RankingsCard from "../components/RankingsCard"
import { useSelector } from "react-redux"
const Home = () => {
  //overview of league
  const league = useSelector(({ league }) => {
    return league
  })
  const roster = useSelector(({ roster }) => {
    return roster
  })

  console.log('league is ', league)
  console.log('roster is ', roster);

  return (
    <div>
      <Navbar />
      {/* <RankingsCard /> */}
    </div>
  )
}

export default Home