import React from 'react'
import Seat from "../components/Seat.jsx";
import "../styles/seats.css";
import { getAllMatchesById } from "../services/api.js"
import { useLocation, useNavigate, useParams } from 'react-router-dom';
function SeatGrid({ seats }) {
  let { id } = useParams();
  let navigate = useNavigate();
  let [selectedSeats, setSelectedSeats] = React.useState([]);
  let [match, setMatch] = React.useState("");
  let [message, setMessage] = React.useState("");
  let price = match.price;
  React.useEffect(() => {
    fetchMatchById();
  }, [id]);
  let fetchMatchById = async () => {
    let data = await getAllMatchesById(id);
    setMatch(data);
  }
  function handleClick() {
    if (selectedSeats.length === 0) {
      setMessage("Select The Seats First");
    }
    else {
      setMessage("");
      navigate("/bookings", {
        state: {
          match, selectedSeats
        }
      })
    }
  }
  return (
    <>
      <div className='seat-grid-container'>
        {seats.map((seat) => (
          <Seat key={seat.id} seat={seat} selectedSeats={selectedSeats}
            setSelectedSeats={setSelectedSeats} />
        ))}
      </div>
      <h1 className="selected-seats-title">Selected Seats</h1>
      <p className='selected_seats'>Selected Seats : {selectedSeats.length == 0 ? "No Seats Selected" : selectedSeats.map(seat => seat.seat_number).join(", ")}</p>
      <p className="total-ticket-price">Total Price : {selectedSeats.length * price}</p>
      <p className="message-to-select-seats">{message}</p>
      <button className="continue-to-booking" onClick={handleClick} >Book Now</button>
    </>
  )
}

export default SeatGrid