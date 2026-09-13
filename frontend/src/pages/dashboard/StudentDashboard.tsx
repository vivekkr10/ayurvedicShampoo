import {
  ArrowRight,
  BookOpenText,
  ChartColumnBig,
  CircleCheck,
  CirclePlay,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import student from "../../assets/images/student-dashboard-banner.webp";
import "../../style/student-dashboard.css";
import tagline from "../../assets/images/svg/Decipline-tag-line.svg";

const StudentDashboard = () => {
  return (
    <>
      <main>
        <section className="student-dashboard-hero">
          <div className="dash-container">
            <div className="student-dash-wrapper">
              <div className="student-dash-content">
                <h3 className="deep-green">Welcome Back,</h3>
                <h1 className="deep-green">Vivek!</h1>
                <p>
                  Stay consistent, keep learning and <br /> get closer to your
                  goals.
                </p>
                <button className="btn-bg-green">
                  <Link className="dash-hero-btn" to={""}>
                    Continue Learning <ArrowRight />
                  </Link>
                </button>
              </div>
              <div className="student-dash-banner">
                <div className="student-dash-banner-wrapper">
                  <img src={student} alt="Hello there!" />
                </div>
              </div>
              <div className="dash-tagline">
                <img src={tagline} alt="" />
              </div>
            </div>
          </div>
        </section>
        <section className="num-cards-sec">
          <div className="dash-container">
            <div className="num-card-wrapper">
              <div className="num-card">
                <div className="icon-wrapper">
                  <BookOpenText color="#006119" />
                </div>
                <div className="num-card-stats">
                  <h4>4</h4>
                  <p className="para12">Enrolled Courses</p>
                </div>
              </div>
              <div className="num-card">
                <div className="icon-wrapper">
                  <CirclePlay color="#3D90E7" />
                </div>
                <div className="num-card-stats">
                  <h4>28</h4>
                  <p className="para12">Classes Attended</p>
                </div>
              </div>
              <div className="num-card">
                <div className="icon-wrapper">
                  <CircleCheck color="#F5A900" />
                </div>
                <div className="num-card-stats">
                  <h4>12</h4>
                  <p className="para12">Assignment Done</p>
                </div>
              </div>
              <div className="num-card">
                <div className="icon-wrapper">
                  <ChartColumnBig color="#E64940" />
                </div>
                <div className="num-card-stats">
                  <h4>85%</h4>
                  <p className="para12">Average Score</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default StudentDashboard;
