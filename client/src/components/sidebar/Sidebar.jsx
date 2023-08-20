import { useEffect, useState } from "react";
import "./sidebar.css"
import axios from "axios";
// import { Link } from "react-router-dom";
import MapWithMarker from './map';


export default function Sidebar() {
    const [cats, setCats] = useState([]);
    const latitude = 32.077962; // Replace with your latitude
    const longitude = 34.774165; // Replace with your longitude
  
    useEffect(() => {
        const getCats = async () =>
        {
            const res = await axios.get("/categories");
            setCats(res.data);
        };
        getCats();
    }, []);
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">CONTACT US</span>
            <img 
                src="https://images.pexels.com/photos/7293211/pexels-photo-7293211.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="" 
            />
            <p className="sideFrase">
                ...because everyday is a Dog Day.
            </p>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FIND US HERE</span>
            <div>
                <MapWithMarker latitude={latitude} longitude={longitude} />
            </div>
            <br />
            <div><b>address:</b> Dizengoff St 89, Tel Aviv-Yafo </div> <br />
            <div><b>phone:</b> 0587782245</div>
            {/* <ul className="sidebarList">
                {cats.map((c) => (
                    <Link to={`/?cat=${c.name}`} className="link">
                        <li className="sidebarListItem">{c.name}</li>
                    </Link>
                ))}
            </ul> */}
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-square-instagram"></i>        
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
            </div>
        </div>
    </div>
  );
}
