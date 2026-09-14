import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../../style/sidebar.css";

import {
  Bell,
  BookOpen,
  ChartColumn,
  ClipboardList,
  FileText,
  House,
  MessageCircle,
  UserRound,
  Video,
} from "lucide-react";

const sidebarItems = [
  {
    name: "Dashboard",
    icon: House,
    path: "/dashboard",
  },
  {
    name: "My Profile",
    icon: UserRound,
    path: "/profile",
  },
  {
    name: "My Courses",
    icon: BookOpen,
    path: "/courses",
  },
  {
    name: "Live Classes",
    icon: Video,
    path: "/live-classes",
  },
  {
    name: "Study Material",
    icon: FileText,
    path: "/study-material",
  },
  {
    name: "Assignments",
    icon: ClipboardList,
    path: "/assignments",
  },
  {
    name: "Tests & Results",
    icon: ChartColumn,
    path: "/tests-results",
  },
  {
    name: "Doubt Support",
    icon: MessageCircle,
    path: "/doubt-support",
  },
  {
    name: "Announcements",
    icon: Bell,
    path: "/announcements",
  },
];

const DashboardSidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <aside className="sidebar">
        <div className="sidebar-wrapper">
          <div className="navigation-wrapper">
            <div className="side-logo-wrapper">
              <div className="logo-img">
                <img src={logo} alt="Commerce Gyan Academy" />
              </div>

              <h4 className="white">Commerce Gyan Academy</h4>
            </div>
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className={`hamburger-icon ${isOpen ? "active" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>

          <div className={`side-nav-links ${isOpen ? "active" : ""}`}>
            <ul className="side-links">
              {sidebarItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <li className="link-list" key={item.name}>
                    <Link
                      to={item.path}
                      className={`side-link ${isActive ? "active" : ""}`}
                    >
                      <Icon color="#ffffff" strokeWidth={2.25} />
                      <p className="white">{item.name}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default DashboardSidebar;
