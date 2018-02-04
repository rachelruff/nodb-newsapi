import React from "react";
import "./Header.css";


const Header = ({ viewChange }) => (
  <header className="flex">
    <div className="logo-container">
      <img
        src="http://www.clker.com/cliparts/p/E/c/S/s/M/inetrnet-news-reader-md.png"
        alt="logo"
      />
      <span>MyTopNewsNow</span>
    </div>
    <div className="nav-list flex">
      <div className="nav-list-item" onClick={viewChange}>
        Home
      </div>
      <div className="nav-list-item" onClick={viewChange}>
        Saved
      </div>
    </div>
  </header>
);

export default Header;
