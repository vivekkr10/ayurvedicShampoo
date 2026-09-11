import React, { useState } from "react";
import profileIcon from "../../assets/images/student-img.webp";
import { Bell, ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";
import "../../style/dashboardTopbar.css";

const DashboardTopbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <main>
        <nav className="dashboard-nav">
          <div className="dash-nav-wrapper">
            <div className="search-input-wrapper">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search for courses, topics or study materials..."
              />
            </div>
            <div className="profile-dropdown-wrapper">
              <Bell className="notification-bell" />
              <div
                className="profile-dropdown"
                onClick={() => setIsOpen((prev) => !prev)}
              >
                {/* <Link to={`/${userId}/profile`}> */}
                <div className="profile-icon-wrapper">
                  <img src={profileIcon} alt="Name" />
                </div>
                <div className="name-wrapper">
                  <p className="userName">Vivek Kumar</p>
                  <p className="user-detail">Class 12 | Science</p>
                </div>
                <div className="dropdown-icon">
                  <ChevronDown />
                </div>
                <div className={`dropdown-links ${isOpen ? "active" : ""}`}>
                  <ul className="dropdown-link-lists">
                    <li>
                      <Link to={"/profile"}>Profile</Link>
                    </li>
                    <li>
                      <Link to={"/settings"}>Settings</Link>
                    </li>
                    <span className="hr-line"></span>
                    <li className="hover">
                      <Link className="red" to={"/Logout"}>
                        Logout
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </main>
    </>
  );
};

export default DashboardTopbar;
