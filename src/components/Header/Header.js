import React from "react";
import "./Header.css";


const Header = ({ viewChange }) => (
  <header className="flex">
    <div className="logo-container">
    {console.log('hi')}
      <img
        src="http://www.clker.com/cliparts/p/E/c/S/s/M/inetrnet-news-reader-md.png"
        alt="logo"
      />
      <span>MyTopNewsNow</span>
    </div>
    <div className="nav-list flex">
      <div className="nav-list-item" onClick={viewChange}>
        HOME
      </div>
      <div className="nav-list-item" onClick={viewChange}>
        SAVED
      </div>
    </div>
  </header>
);

export default Header;
