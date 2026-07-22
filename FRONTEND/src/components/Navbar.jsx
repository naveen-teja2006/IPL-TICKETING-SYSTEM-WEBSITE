import React from "react";
import "../styles/Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FcEngineering } from "react-icons/fc";
function Navbar() {
    return (
        <div className="navbar">
            <div className="nav-title"> IPLTicketing<span className="nav-half-title">System</span></div>
            <nav>
                <Link to="/home" className="nav-link">Home</Link>
                <Link to="/matches" className="nav-link">Matches</Link>
                <Link to="/bookings" className="nav-link">Bookings</Link>
                <Link to="/signin" className="nav-link"><button className="sign-out-btn">⬅ Sign Out</button></Link>
            </nav>
        </div>
    )
}

export default Navbar;