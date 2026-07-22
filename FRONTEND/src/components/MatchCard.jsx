import React from 'react';
import {Link} from "react-router-dom";
import "../styles/Matches.css";
function MatchCard({match}){
  return (
    <div className="match-card-section">
       <div className='match-card'>
        <img src={`/images/${match.poster}`} />
        <h2>{match.team1} vs {match.team2}</h2>
        <p>{match.venue}</p>
        <p>{new Date(match.match_date).toLocaleString()}</p>
        <h3>{match.price}</h3>
       <Link to={`/matches/${match.id}`}>
        <button className="match-card-btn">View Details</button>
       </Link>
       </div>
    </div>
  )
}

export default MatchCard;