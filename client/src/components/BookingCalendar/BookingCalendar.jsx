import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, { useEffect, useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./bookingCalendar.css";
import axios from "axios";
import SingleBooking from "../SingleBooking/SingleBooking";

const locales = {
  "en-US": require("date-fns/locale/en-US"),
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

export default function BookingCalendar({user}) {
  const [newEvent, setNewEvent] = useState({ title: "", start: new Date(), end: new Date() });
  const [allEvents, setAllEvents] = useState([]);

  const getBookings = async () => {
    try {
        const res = await axios.get("bookings");
        if (res.status === 200) {
            const bookingsData = res.data.map(x => ({
              title: x.category,
              start: x.date_start,
              end: x.date_end, 
              id: x._id}));
            
            setAllEvents(bookingsData);
        }
    } catch (error) {
        console.error('Error searching:', error);
    }
}

useEffect(() => {
    getBookings();
},[user.username])

const handleAddEvent = async () => {
  for (let i=0; i<allEvents.length; i++) {
      const d1 = new Date (allEvents[i].start);
      const d2 = new Date(newEvent.start);
      const d3 = new Date(allEvents[i].end);
      const d4 = new Date(newEvent.end);
      // if (( (d1  <= d2) && (d2 <= d3) ) || ( (d1  <= d4) && (d4 <= d3) )) { 
      //     alert("CLASH"); 
      //     break;
      // }
  };
  setAllEvents([...allEvents, newEvent]);
  const eventData = {
      category: newEvent.title,
      date_start: newEvent.start.toISOString(),
      date_end: newEvent.end.toISOString(),
      username: user.username
  };
  console.log("eventData", eventData);
  
  // Make the API POST request
  try {
      const res = await axios.post("bookings", eventData);
      if (res.status === 200) {
        getBookings();
        setNewEvent({ title: "", start: new Date(), end: new Date() });
        window.location.reload()
    }
  } catch (error) {
      console.error("Error adding event:", error);
  }
}

return (
  <div className="App">
      <h3>calendar</h3>
      <h5>add new booking</h5>
      <div>
          <input type="text" placeholder="Add Title" style={{ width: "20%", marginRight: "10px" }} value={newEvent.title} onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })} />
          <DatePicker placeholderText="Start Date" style={{ marginRight: "10px" }} selected={newEvent.start} onChange={(start) => setNewEvent({ ...newEvent, start })} />
          <DatePicker placeholderText="End Date" selected={newEvent.end} onChange={(end) => setNewEvent({ ...newEvent, end })} />
          <button style={{ marginTop: "10px" }} onClick={handleAddEvent}>
              Add Event
          </button>
      </div>
      <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end" style={{ height: 500, margin: "50px" }} />
      <div className="bookingListBot">
        <div className="bookingsTitle">Your bookings:</div>
        <ul className="bookingsList">
            {allEvents.length ? allEvents.map(event=>(
              <SingleBooking key={event.id} event={event} getBookings={getBookings}/>
              )) : (<li className="ifListEmptyMsg"> You don't book anything </li>)}
        </ul>
      </div>
  </div>
);
}

