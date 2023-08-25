import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);

  console.log(user);
  const PF = "https://woofville-backend.onrender.com/images/";

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>        
        <i className="topIcon fa-brands fa-square-twitter"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
            <li className="topListItem"><Link className="link" to="/about">ABOUT</Link></li>
            {/* <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li> */}
            <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
            <li className="topListItem"><Link className="link" to="/booking">BOOKING</Link></li>
            <li className="topListItem" onClick={handleLogout}>
              {user && "LOGOUT"}
            </li>
        </ul>
      </div>
      <div className="topRight">
      {user ? (
        <Link to="/settings">
            <img className="topImg" src={
                user.profilePic !== "" ?
                PF + user.profilePic :
                "https://images.pexels.com/photos/4587971/pexels-photo-4587971.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
              } alt="" />
        </Link>
          ) : (
            <ul className="topList">
              <li className="topListItem">
                <Link className="link" to="/login">
                  LOGIN
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/register">
                  REGISTER
                </Link>
              </li>
            </ul>
          )}
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
