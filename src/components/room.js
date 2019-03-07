// react
import React, { memo, useContext } from 'react';
// booking summary
import { BookingSummary } from '../providers/bookingsummary';

const Room = ({ room }) => {

    // get summary context data for editing
    const { dispatch } = useContext(BookingSummary);

    // save clicked room
    const handleSelectedRoom = () =>{
        dispatch({ type: 'SET_SELECTED_ROOM', payload: room });
    }

    // render
    return (
        <div onClick={handleSelectedRoom} className="card clearfix pointer">
            <div className="room-image">
                <img src={room.image} width="100%" alt="room_image"/>
            </div>

            <div className="room-content">
                <h5 className="form-group">{room.name}</h5>
                <p className="form-group">{room.description}</p>

                <p className="form-group">Size: {room.size}m2</p>       

                <div className="room-info">
                    <div className="item">
                            <span className="inline-block">
                                <img src="images/icons/double-bed.svg" width="40" alt="double-bed"/>
                            </span>
                        <div>Beds: {room.beds}</div>
                    </div>
                    <div className="item">People: {room.people}</div>
                    <div className="item price text-right">
                        {room.oldPrice &&
                        // show old price if discount was added
                            <span className="line-through">${room.oldPrice}</span>
                        }
                        ${room.price}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default memo(Room);