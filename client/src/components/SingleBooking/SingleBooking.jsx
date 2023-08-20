import React from 'react';
import './singleBooking.css';
import axios from 'axios';
import format from 'date-fns/format';
// import { Context } from "../../context/Context";
// import { useContext } from "react";

export default function SingleBooking({ key, event, getBookings }) {
    // const { user } = useContext(Context);
    // Function to handle the deletion of the booking
    const handleDeleteBooking = async () => {
        try {
            const response = await axios.delete(`bookings/${event.id}`);
            if (response.status === 200) {
                // Handle successful deletion, e.g., show a message or update state
                console.log('Booking deleted successfully');
                getBookings();
            } else {
                // Handle deletion failure
                console.error('Failed to delete booking');
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    const formattedStartDate = format(new Date(event.start), 'MMMM d, yyyy');
    const formattedEndDate = format(new Date(event.end), 'MMMM d, yyyy');

    return (
        <div className='bookingContainer' key={event.id}>
            <li className="bookingEvent">
                <img src={'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt="" className="bookingEventImg" />
                <span className="bookingEventName"> {event.title}, from {formattedStartDate} to {formattedEndDate}</span>            </li>
            <button className="deleteBookingButton" onClick={handleDeleteBooking}>
                Delete booking
            </button>
        </div>
    );
}
