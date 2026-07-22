import React from "react";
import Navbar from "../components/Navbar.jsx";
import Hero from "../pages/Hero.jsx";
import { getAllMatches } from '../services/api';
import Loader from "../components/Loader.jsx";
import MatchCard from "../components/MatchCard.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/Home.css";
function Home() {
  let [matchList, setmatchList] = React.useState([]);
  let [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    setLoading(true);
    fetchMatches();
  }, [])
  // Fetch The Matches
  async function fetchMatches() {
    const data = await getAllMatches();
    setmatchList(data);
    setLoading(false);
  }
  return (
    <>
      <Navbar />
      <Hero />
      <section className="upcoming-matches">
        <h1 className="upcoming-matches-title">Upcoming <span>Matches</span> </h1>
        {loading ? (<Loader />) : (
          <div className='upcoming-matches-all-cards'>
            {matchList.slice(0, 3).map((match) => {
              return (
                <MatchCard key={match.id} match={match} />
              )
            })}
          </div>
        )}
      </section>
      <h1 className="teams-list-title">Teams</h1>
      <section className="teams-list-section">
        <p>CSK</p>
        <p>RCB</p>
        <p>KKR</p>
        <p>DC</p>
        <p>PBKS</p>
        <p>MI</p>
        <p>GT</p>
        <p>SRH</p>
        <p>RR</p>
      </section>
      <Footer />
    </>
  )
}
export default Home;