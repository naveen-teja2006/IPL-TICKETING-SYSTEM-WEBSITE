import React from 'react'
function Seat({ seat, selectedSeats, setSelectedSeats }) {
  let isSelected = selectedSeats.some(s => s.id === seat.id );
  function handleSeatClick() {
    if (isSelected) {
      console.log(seat.id);
      setSelectedSeats(selectedSeats.filter((s) => s.id != seat.id))
    }
    else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  }
  let seatClass = seat.status == "already booked" ? "seat booked" : isSelected ? "seat selected" : "seat available";
  return (
    <button className={seatClass} disabled={seat.status === "already booked"} onClick={handleSeatClick}>{seat.seat_number}</button>
  )
}

export default Seat;