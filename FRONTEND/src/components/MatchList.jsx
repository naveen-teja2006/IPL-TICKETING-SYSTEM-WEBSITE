import React from 'react'
import { getAllMatches } from '../services/api';
import MatchCard from "../components/MatchCard";
import "../styles/Matches.css";
import Loader from "../components/Loader";
function MatchList() {
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
    let [query, setQuery] = React.useState("");
    let filteredCards = matchList.filter((match) => {
        return match.team1.toLowerCase().includes(query.toLowerCase()) || match.team2.toLowerCase().includes(query.toLowerCase());
    });
    if (query === "") {
        filteredCards = matchList;
    }
    // Render On The UI
    return (
        <>
            <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search All Matches Here..." />
            {loading ? (<Loader />) : (
                <div className='match-list-section'>
                    {filteredCards.map((match) => {
                        return (
                            <MatchCard key={match.id} match={match} />
                        )
                    })}
                </div>
            )}
        </>
    )
}
export default MatchList;