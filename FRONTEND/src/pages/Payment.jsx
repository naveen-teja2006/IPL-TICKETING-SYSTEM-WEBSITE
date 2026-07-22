import React from 'react';
import { Link } from "react-router-dom";
import "../styles/payment.css";
function Payment() {
    return (
        <>
            <h1 className="payment-section-title">Select The Payment Method</h1>
            <div className="payment-whole-section">
                <form className="payment-section">
                    <div className="label-input-group">
                        <label htmlFor="UPI">UPI</label>
                        <input type="radio" name="UPI" className='payment-input' />
                    </div>
                    <div className="label-input-group">
                        <label htmlFor="CREDIT / DEBIT CARD">CREDIT / DEBIT CARD</label>
                        <input type="radio" name="CREDIT / DEBIT CARD" className='payment-input' />
                    </div>
                    <div className="label-input-group">
                        <label htmlFor="NET BANKING">NET BANKING</label>
                        <input type="radio" name="NET BANKING" className='payment-input' />
                    </div>
                    <div className="label-input-group">
                        <label htmlFor="wallets">WALLETS</label>
                        <input type="radio" name="wallets" className='payment-input' />
                    </div>
                    <Link to="/mybookings">
                        <button>Pay Now</button>
                    </Link>
                </form>
            </div >
        </>
    )
}

export default Payment