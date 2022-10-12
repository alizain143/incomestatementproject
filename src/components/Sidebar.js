import {
  faHouseUser,
  faPenToSquare,
  faRightFromBracket,
  faSheetPlastic,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase";

export default function Sidebar() {
  const navigate = useNavigate();
  const userLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("signout successful");
        localStorage.removeItem("token");
       navigate("/login")
        
      })
      .catch((err) => {
        console.log(err);
      });
    
  };

  return (
    <div className="sidebar">
      <h1>IS</h1>
      <div className="sidebar-div">
        <div className="sidebar-div-items">
          <Link to="/main/home" className="sidebar-link">
            <div className="sidebar-items">
              <FontAwesomeIcon icon={faHouseUser} />
              <p>Home</p>
            </div>
          </Link>

          <Link to="/main/statements" className="sidebar-link">
            <div className="sidebar-items">
              <FontAwesomeIcon icon={faSheetPlastic} />
              <p>Statements</p>
            </div>
          </Link>
          <Link to="/main/updates" className="sidebar-link">
            <div className="sidebar-items">
              <FontAwesomeIcon icon={faPenToSquare} />
              <p>Updates</p>
            </div>
          </Link>
        </div>
        <div className="sidebar-logout">
          <button
            onClick={userLogout}
            to="/main/logout"
            className="sidebar-link-logout"
          >
            <div>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <p>Logout </p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
