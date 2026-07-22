import React from "react";
import { Link, useParams } from "react-router-dom";
import { getAllSeatsById } from "../services/api";
import SeatGrid from "../components/SeatGrid.jsx";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import "../styles/seats.css";
import "../styles/SeatsSelection.css";
function SeatSelection({match}) {
    let { id } = useParams();
    let [seats, setSeats] = React.useState([]);
    let [loading, setLoading] = React.useState(true);
    React.useEffect(() => {
        fetchSeatsById();
    }, [id]);
    // Fetch The Seats By Using The Id
    async function fetchSeatsById() {
        try {
            let data = await getAllSeatsById(id);
            setSeats(data);
        }
        catch (error) {
            console.log("Error Fetches The Seats...", error.message);
        }
        finally {
            setLoading(false);
        }
    }
    if (loading) {
        return <h1 style={{ color: "white" }}>Loading...</h1>
    }
    return (
        <>
            <Navbar />
            <Link to={`/matches/${id}`}>
                <button className="go-back-btn">Go back</button></Link>
            <h1 className="select-seats-title">Select The Seats </h1>
            <div className="colors-of-seats">
            <p>🟢 Available</p>
            <p>🔴 Booked</p>
            <p>🔵 Selected</p>
            </div>
            <div className="seats-selection-container">
                <SeatGrid seats={seats} match={match}/>
            </div>
            <Footer />
        </>
    )
}
export default SeatSelection;