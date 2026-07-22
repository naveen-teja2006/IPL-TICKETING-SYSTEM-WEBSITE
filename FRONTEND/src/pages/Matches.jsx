import React from 'react'
import Navbar from "../components/Navbar";
import MatchList from "../components/MatchList";
function Matches(){
  return (
   <section className="matches-section">
    <Navbar />
    <h1 className='all-matches-title'>All Matches</h1>
    <MatchList />
   </section>
  )
}

export default Matches;