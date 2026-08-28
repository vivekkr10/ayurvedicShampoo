import React from "react";
import studentProfileImg from "../assets/images/student-img.webp";
import heroBanner from "../assets/images/hero-banner.webp";
import "../style/LandingPage.css";
import whiteArrow from "../assets/images/svg/white-arrow.svg";
import deepGreenArrow from "../assets/images/svg/deep-green-arrow.svg";
import graduationCap from "../assets/images/svg/graduation-cap.svg";
import experience from "../assets/images/svg/experiance.svg";
import people from "../assets/images/svg/people.svg";
import book from "../assets/images/svg/book.svg";
import work from "../assets/images/svg/work.svg";

const LandingPage = () => {
  return (
    <div>
      {/* hero section  */}
      <section className="hero-section">
        <div className="big-circle"></div>

        <div className="container">
          <div className="hero-wrap">
            <div className="hero-content">
              <p className="small-heading">Welcome to Commerce Gyan Academy</p>
              <h1>Learn. Grow. Lead the Future.</h1>
              <p className="tag-line">
                Empowering the students with quality education, industry
                exposure and a future-ready mindset.
              </p>
              <div className="hero-content-btn">
                <button className="deep-green">
                  Explore Courses <img src={whiteArrow} alt="White Arrow" />
                </button>
                <button className="white">
                  About Our Institute{" "}
                  <img src={deepGreenArrow} alt="Deep Green Arrow" />
                </button>
              </div>
              <div className="students-num">
                <div className="students-img">
                  <img
                    className="hero-student-img"
                    src={studentProfileImg}
                    alt="Student Image"
                  />
                  <img
                    className="hero-student-img"
                    src={studentProfileImg}
                    alt="Student Image"
                  />
                  <img
                    className="hero-student-img"
                    src={studentProfileImg}
                    alt="Student Image"
                  />
                  <img
                    className="hero-student-img"
                    src={studentProfileImg}
                    alt="Student Image"
                  />
                </div>
                <div className="students-count">
                  <h5 className="fw-700">5000+ Students</h5>
                  <p>Trust Commerce Gyan Academy</p>
                </div>
              </div>
            </div>
            <div className="hero-banner">
              <div className="hero-banner-img">
                <img src={heroBanner} alt="Hero Banner" />
              </div>
              <div className="hero-banner-content">
                <div className="banner-content-icon">
                  <img src={graduationCap} alt="" />
                </div>
                <h3 className="banner-content-head">
                  Shaping Careers <br /> Transforming Lives.
                </h3>
                <p className="banner-content-para">
                  At Commerce Gyan Academy We don't just teach, we inspire and
                  empower.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* hero section */}
      {/* stats section  */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-wrapper">
            <div className="stats">
              <div className="stat-img">
                <img src={experience} alt="Experience" />
              </div>
              <div className="stats-number">
                <h3 className="white">5+</h3>
                <p className="white">Years of Excelience</p>
              </div>
            </div>
            <div className="stats hr-line">
              <div className="stat-img">
                <img src={people} alt="Experience" />
              </div>
              <div className="stats-number">
                <h3 className="white">500+</h3>
                <p className="white">Students Enrolled</p>
              </div>
            </div>
            <div className="stats hr-line">
              <div className="stat-img">
                <img src={book} alt="Experience" />
              </div>
              <div className="stats-number">
                <h3 className="white">2+</h3>
                <p className="white">Expert Faculty</p>
              </div>
            </div>
            <div className="stats hr-line">
              <div className="stat-img">
                <img src={work} alt="Experience" />
              </div>
              <div className="stats-number">
                <h3 className="white">200+</h3>
                <p className="white">Placment Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* stats section  */}
    </div>
  );
};

export default LandingPage;
