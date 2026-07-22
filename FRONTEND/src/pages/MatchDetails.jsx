import React from 'react';
import { getAllMatchesById } from '../services/api';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
import "../styles/MatchDetails.css";
function MatchDetails() {
    let { id } = useParams();
    let [match, setMatch] = React.useState(null);
    let [loading, setLoading] = React.useState(true);
    let navigate = useNavigate();
    React.useEffect(() => {
        fetchMatchById();
    }, [id]);
    async function fetchMatchById() {
        try {
            let data = await getAllMatchesById(id);
            setMatch(data);
            console.log(data);
        } catch (error) {
            console.log("Error Fetching The Data :", error.message);
        }
        finally {
            setLoading(false);
        }
    }
    if (loading) {
        return <h1 className='loading-text'>Loading...</h1>
    }
    if (!match) {
        return alert("Match Not Found...")
    }
    return (
        <>
        <Navbar />
        <Link to="/matches">
                <button className='go-back-btn'>⬅ Go Back To Matches</button>
            </Link>
       {loading ? <Loader /> :
       (
         <div className='match-details-section'>
            <div className='each-match-card'>
                <img className="each-match-card-img" src={`/images/${match.poster}`} />
                <h2>{match.team1} vs {match.team2}</h2>
                <p>🏁 {match.venue}</p>
                <p>📅 {new Date(match.match_date).toLocaleString()}</p>
                <h3>💵 {match.price}</h3>
                <button 
                onClick={() => navigate(`/matches/${match.id}/seats`,{
                    state:{price:match.price}
                })}className="each-match-card-btn">Book Tickets</button>
            </div>
        </div>
       )}
        </>
    )
}

export default MatchDetails