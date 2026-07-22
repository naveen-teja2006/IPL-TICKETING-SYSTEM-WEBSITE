import React from 'react'
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/Bookings.css";
import Navbar from "../components/Navbar";
function Bookings() {
  const location = useLocation();
  let navigate = useNavigate();
  const { match, selectedSeats } = location.state;
  console.log(match);
  console.log(selectedSeats);
  async function ConfirmBooking() {
    let userId = localStorage.getItem("userId");
    console.log(userId);
    console.log({
      userId,
      matchId: match.id,
      seatIds: selectedSeats.map(seat => seat.id)
    });
    let response = await fetch("http://localhost:3000/api/bookings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId,
        matchId: match.id,
        seatIds: selectedSeats.map(seat => seat.id)
      })
    })
    const data = await response.json();
     if(response.ok){
      navigate("/mybookings");
       alert(data.message);
    }
  }
  console.log(selectedSeats);
  return (
    <>
    <Navbar />
    <button className="go-back-btn" onClick={() => navigate("/matches")}>⬅ Go Back</button>
      <div className="bookings-section">
       <div className="bookings-page">
         <h2>{match.team1} vs {match.team2}</h2>
        <p>Venue : {match.venue}</p>
        <p>Seats : {selectedSeats.map(seat => seat.seat_number).join(", ")}</p>
        <p>Total Price : {selectedSeats.length * match.price}</p>
        <button onClick={ConfirmBooking}>Confirm Booking</button>
       </div>
      </div>
    </>
  )
}

export default Bookings;