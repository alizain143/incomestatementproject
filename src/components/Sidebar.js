import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouseUser,
  faDollarSign,
  faSheetPlastic,
  faPenToSquare,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function Sidebar() {
  const userLogout=()=>{

  }




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
        
          <Link to="/main/finances" className="sidebar-link">
            
            <div className="sidebar-items">
              <FontAwesomeIcon icon={faDollarSign} />
              <p>Finances</p>
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
          <button onClick={userLogout} to="/main/logout" className="sidebar-link-logout">
         
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
