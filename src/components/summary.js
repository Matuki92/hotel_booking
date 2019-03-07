// react
import React, { memo, useContext } from 'react';
// booking summary
import { BookingSummary } from '../providers/bookingsummary';

const Summary = () => {

    // get summary context data
    const { bookingSummary, dispatch } = useContext(BookingSummary);

    // change quantity value
    const handleQuantity = ({ target }) => {
        dispatch({ type: 'SET_ROOM_QUANTITY', payload: target.value });
    }

    // get room quantity based on the amount of people in the booking
    const getQuantity = () => {
        if (bookingSummary.room) {
            // convert values to numbers and get sum
            const totalPeople = parseInt(bookingSummary.adults) + parseInt(bookingSummary.children);
            const quantity = Math.ceil(totalPeople / bookingSummary.room.people);
    
            return quantity;
        } else {
            return 1;
        }
    }

    const calcQuantity = getQuantity();
    let quantityValue = bookingSummary.quantity >= calcQuantity ? bookingSummary.quantity : calcQuantity;

    // save data to local storage
    const saveData = () => {
        if (window.localStorage) {
            if (!bookingSummary.room) {
                return alert('Please select a room first!');
            } else if (bookingSummary.quantity < getQuantity()) {
                return alert(`Are you planning on sleeping on the floor? Please choose a higher room quantity.`);
            } else if (bookingSummary.quantity > getQuantity()) {
                alert(`Warning! There are more beds than people, saving data anyway!`);
                return window.localStorage.setItem('cocos_bungalows_summary', JSON.stringify(bookingSummary));
            }
        }
    }

    // render
    return (
        <div className="card">
        <h2>Reservation Summary</h2>
        <div className="clearfix">
            <h5 className="pull-left">{bookingSummary.room ? bookingSummary.room.name : 'Please select a room'}</h5>
            <div className="form-group pull-right">
                <select 
                    onChange={handleQuantity}
                    value={quantityValue} 
                    className="pull-right" 
                    id="rooms"
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                </select>
            </div>
        </div>

        <div className="clearfix">

            <div className="card-content">
                <p className="main">Check in</p>
                <p className="base">From 15.00h</p>
            </div>

            <div className="card-content">
                <p className="main">Check out</p>
                <p className="base">Before 12.00h</p>
            </div>

            <div className="card-content">
                <p className="main">Reservation date</p>
                <p className="base">From <strong><span id="checkin-summary">{bookingSummary.checkIn ? bookingSummary.checkIn : '--'}</span></strong> to <strong id="checkout-summary">{bookingSummary.checkOut ? bookingSummary.checkOut : '--'}</strong></p>
            </div>

            <div className="card-content">
                <p className="main">People</p>
                <p className="base" id="adults-summary">{`${bookingSummary.adults} Adult${bookingSummary.adults > 1 ? 's' : ''}`}</p>
                <p className="base" id="children-summary">{bookingSummary.children} Children</p>
            </div>

            <div className="card-checkout clearfix">
                <div className="left pull-left">
                    <p className="main">Total</p>
                    <p className="base"><a href="#">Price details ></a></p>
                </div>
                <div className="right pull-right">
                    <p className="main">{bookingSummary.room ? `$${bookingSummary.room.price * quantityValue}` : '--'}</p>
                </div>
            </div>

            <a onClick={saveData} href="#" className="btn btn-primary btn-group-justified">
                Save
            </a>
        </div>
    </div>
    );
}

export default memo(Summary);