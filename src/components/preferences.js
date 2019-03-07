// react
import React, { memo, useState, useContext } from 'react';
// booking summary
import { BookingSummary } from '../providers/bookingsummary';

const Preferences = () => {

    // main state
    const [ state, setState ] = useState({
        adults: 1,
        children: 0
    });
    // get context data for editing
    const { bookingSummary, dispatch } = useContext(BookingSummary);

    // adult & children quantity modifier
    const handleAddPeople = ({ target }) => {
        setState({ ...state, [target.name]: target.value});
    }

    // get room quantity based on the amount of people in the booking
    const getQuantity = () => {
        // convert values to numbers and get sum
        const totalPeople = parseInt(bookingSummary.adults) + parseInt(bookingSummary.children);
        const quantity = Math.ceil(totalPeople / bookingSummary.room.people);

        return quantity;
    }

    // send new data to summary
    const handleModifyButton = () => {
        if (state.adults) {
            dispatch({ type: 'SET_ROOM_QUANTITY', payload: getQuantity() });
            dispatch({ type: 'UPDATE_PREFERENCES', payload: state });
        }
    }

    return (
        <div className="engine text-center">

        <div className="engine-wrapper">
            <div className="container text-center">

                <form id="search" className="form-inline" action="">

                    <div className="form-group">
                        <div className="input-group date" data-date-format="dd/mm/yyyy">
                            <input value={bookingSummary.checkIn ? bookingSummary.checkIn : '--'} id="checkin" type="text" className="form-control" placeholder="Check in"/>
                            <div className="input-group-addon" >
                                <span className="glyphicon glyphicon-calendar"></span>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="input-group date" data-date-format="dd/mm/yyyy">
                            <input value={bookingSummary.checkOut ? bookingSummary.checkOut : '--'} id="checkout" type="text" className="form-control" placeholder="Checkout"/>
                            <div className="input-group-addon" >
                                <span className="glyphicon glyphicon-calendar"></span>
                            </div>
                        </div>
                    </div>


                    <div className="form-group select-inline">
                        <select 
                            name="adults"
                            onChange={handleAddPeople}
                            defaultValue={state.adults} className="form-control" placeholder="Adults" id="adults">
                            <option value="1">Adults: 1</option>
                            <option value="2">Adults: 2</option>
                            <option value="3">Adults: 3</option>
                            <option value="4">Adults: 4</option>
                            <option value="5">Adults: 5</option>
                            <option value="6">Adults: 6</option>
                            <option value="7">Adults: 7</option>
                            <option value="8">Adults: 8</option>
                            <option value="9">Adults: 9</option>
                        </select>
                    </div>
                    <div className="form-group select-inline">
                        <select 
                            name="children"
                            onChange={handleAddPeople}
                            defaultValue={state.children} className="form-control" placeholder="Children" id="children">
                            <option value="0">Children: 0</option>
                            <option value="1">Children: 1</option>
                            <option value="2">Children: 2</option>
                            <option value="3">Children: 3</option>
                            <option value="4">Children: 4</option>
                            <option value="5">Children: 5</option>
                            <option value="6">Children: 6</option>
                            <option value="7">Children: 7</option>
                            <option value="8">Children: 8</option>
                            <option value="9">Children: 9</option>
                        </select>
                    </div>


                    <div className="form-group">
                        <a 
                            onClick={handleModifyButton}
                            href="#" 
                            className="btn btn-primary"
                        >
                            Modify
                        </a>
                    </div>
                </form>

            </div>
        </div>
    </div>
    );
}

export default memo(Preferences);