import "./booking.css"
// import Header from "../../components/header/Header";
// import Posts from "../../components/posts/Posts";
// import Sidebar from "../../components/sidebar/Sidebar";
import BookingCalendar from "../../components/BookingCalendar/BookingCalendar";
// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useLocation } from "react-router";

export default function Booking({user}) {

  return (
    <>        
      <div className="booking">
        <BookingCalendar user = {user}/>
      </div>
    </>
  );
}
