// react
import React, { Fragment, useState, useEffect, useReducer } from 'react';
import ReactDOM from 'react-dom';
// components
import Preferences from './components/preferences';
import Nav from './components/nav';
import Steps from './components/steps';
import Room from './components/room';
import Summary from './components/summary';
import Footer from './components/footer';
// rooms
import roomList from './data/rooms';
// summary context
import { BookingSummary, initialBookingSummaryValue, bookingSummaryReducer } from './providers/bookingsummary';

// app top level
const App = () => {

  // rooms state
  const [ rooms, setRooms ] = useState(roomList);
  // summary state
  const [ bookingSummary, dispatch ] = useReducer(bookingSummaryReducer, initialBookingSummaryValue);

  // run after app render
  useEffect(() => {
    // set check in and check out dates
    const date = new Date();
    const today = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    const tomorrow = `${date.getDate() + 1}/${date.getMonth() + 1}/${date.getFullYear()}`;
    // save dates
    dispatch({ type: 'SET_DATES', payload: { checkIn: today, checkOut: tomorrow } });

    // get search bar query
    const query = window.location.search;

    // check if promo code exists in query
    if (query.includes('promo_code')) {
      // separate discount value
      const discount = query.substring(
        query.indexOf('=') + 1
      );
      // create new array of rooms with updated and old prices
      const updatedRooms = rooms.map(room => {
        return { 
          ...room,
          oldPrice: room.price,
          price: room.price - room.price * discount / 100
        }
      });
      // update saved room price if found
      if (bookingSummary.room) {
        const updatedSummaryRoom = updatedRooms.find(room => room.name === bookingSummary.room.name);
        dispatch({ type: 'SET_SELECTED_ROOM', payload: updatedSummaryRoom });
      }
      // save new room data and rerender
      setRooms(updatedRooms);
    }
  }, []);

  // render each room into a new component
  const renderRooms = () => {
    return rooms.map(room => {
      return (
          <Room
            key={room.name}
            room={room}
          />
      );
    });
  }

  // main render
  return (
    <Fragment>
      {/* summary provider */}
      <BookingSummary.Provider value={{ bookingSummary, dispatch }}>

        <Nav/>
        <Preferences/>

        <div className="container rar-summary">

          <div className="row">
            <Steps/>
          </div>

          <div className="row">
            <div className="col-md-8 main">
              {/* render available rooms */}
              {rooms && renderRooms()}
            </div>

            <div className="col-md-4 sidebar">
                <Summary/>
            </div>
          </div>

        </div>

        <Footer/>

      </BookingSummary.Provider>
    </Fragment>
  );
}

ReactDOM.render(<App/>, document.getElementById('root'));