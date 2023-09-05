import LoginPage from "./pages/LoginPage";
import Home from "./pages/Home";
import { initializeLeague } from "./reducers/leagueReducer";
import { initializeRosters } from "./reducers/rosterReducer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";




function App() {

  const dispatch = useDispatch()
  //if user is not logged in then show login component.
  //if user is logged in then show home page. 
  const testView = 'login'
  //make components for cards. Each statistic segment will be a card displaying the rankings for tat statistic type?

  useEffect(() => {
    dispatch(initializeLeague(process.env.REACT_APP_LEAGUE_ID)) 
    dispatch(initializeRosters(process.env.REACT_APP_LEAGUE_ID))
  }, [dispatch]) 

  return (
    <div>
      { testView === 'login' 
        ? <div style={{ background: 'linear-gradient(to right bottom, #101F33, #0eb9cc)' }}>
            <LoginPage />
          </div>
        :  <div>
            <Home />
          </div>
      }
    </div>
    
  );
}

export default App;
