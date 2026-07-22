import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Register from "./pages/Register.jsx";
import SignIn from "./pages/SignIn.jsx";
import Home from "./pages/Home.jsx";
import Matches from "./pages/Matches.jsx";
import MatchDetails from "./pages/MatchDetails.jsx";
import SeatSelection from "./pages/SeatSelection.jsx";
import Bookings from "./pages/Bookings.jsx";
// import Payment from "./pages/Payment.jsx";
let root = ReactDOM.createRoot(document.getElementById("root"));
function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Register />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/signin" element={<SignIn />}></Route>
                    <Route path="/home" element={<Home />} />
                    <Route path="/matches" element={<Matches />} />
                    <Route path="/matches/:id" element={<MatchDetails />} />
                    <Route path="/matches/:id/seats" element={<SeatSelection />} />
                    {/* <Route path="/payment" element={<Payment />} /> */}
                    <Route path="/bookings" element={<Bookings />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}
root.render(<App />);