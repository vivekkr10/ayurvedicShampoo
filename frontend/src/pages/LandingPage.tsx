import React from "react";
import studentProfileImg from "../assets/images/student-img.webp";
import "../style/LandingPage.css";
import heroBanner from "../assets/images/hero-banner.webp";
import whiteArrow from "../assets/images/svg/white-arrow.svg";
import deepGreenArrow from "../assets/images/svg/deep-green-arrow.svg";
import graduationCap from "../assets/images/svg/graduation-cap.svg";
import experience from "../assets/images/svg/experiance.svg";
import people from "../assets/images/svg/people.svg";
import book from "../assets/images/svg/book.svg";
import darkbook from "../assets/images/svg/darkbook.svg";
import passed from "../assets/images/svg/passed.svg";
import program from "../assets/images/svg/Program.svg";
import dots from "../assets/images/svg/dots.svg";
import addmission from "../assets/images/svg/addmission.svg";
import paint from "../assets/images/svg/paint.svg";
import heart from "../assets/images/svg/Heart.svg";
import tests from "../assets/images/svg/tests.svg";
import doubt from "../assets/images/svg/doubt.svg";
import personalAttention from "../assets/images/svg/personal-attention.svg";
import lifeAtCga1 from "../assets/images/life-at-cga1.webp";
import lifeAtCga2 from "../assets/images/life-at-cga2.webp";
import lifeAtCga3 from "../assets/images/life-at-cga3.webp";

const LandingPage = () => {
  return (
    <div>
      <main>
        {/* hero section  */}
        <section className="hero-section">
          <div className="big-circle"></div>

          <div className="container">
            <div className="hero-wrap">
              <div className="hero-content">
                <p className="small-heading">
                  Welcome to Commerce Gyan Academy
                </p>
                <h1 className="deep-green-black">
                  Learn Today.
                  <span className="leaf-green"> Lead Tomorrow.</span>
                </h1>
                <p className="tag-line">
                  A trusted tuition center in Faridabad, providing quality
                  education from class 1 to 12 in all subject. <br />
                  In our guidance,{" "}
                  <span className="leaf-green">no one has ever failed.</span>
                </p>
                <div className="hero-content-btn">
                  <button className="deep-green btn-bg-green">
                    Explore Courses{" "}
                    <img
                      className="arrow-img"
                      src={whiteArrow}
                      alt="White Arrow"
                    />
                  </button>
                  <button className="white btn-bg-white">
                    About Our Institute
                    <img
                      className="arrow-img"
                      src={deepGreenArrow}
                      alt="Deep Green Arrow"
                    />
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
                    <h4 className="fw-700">100+ Happy Students</h4>
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
                  <h3 className="banner-content-head">Our Mission</h3>
                  <p className="banner-content-para">
                    Empowering every student with the right guidance, personal
                    attention and love for learning.
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
                  <img src={passed} alt="Experience" />
                </div>
                <div className="stats-number">
                  <h3 className="white">100%</h3>
                  <p className="white">Students Passed</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* stats section  */}
        {/* our program section  */}
        <section className="our-program">
          <div className="container">
            <div className="our-program-wrapp">
              <p className="small-heading">Our Programs</p>
              <div className="our-programs-heading">
                <h2 className="deep-green-black">Explort Our Top Programs</h2>
                <button className="view-more-btn btn-bg-white">
                  View More
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 6.00003H11"
                      stroke="#010F0B"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7 1.00003L11 6.00003"
                      stroke="#010F0B"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M7 11L11 6.00003"
                      stroke="#010F0B"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="program-card-wrapper">
                <div className="programs-card">
                  <div className="program-card-img">
                    <img src={program} alt="Program icon" />
                  </div>
                  <h3 className="card-heading fw-700 white">Class 1 - 5</h3>
                  <p className="white program-card-para">
                    Foundation learning in Mathematics, English, Hindi, EVS &
                    more.
                  </p>
                  <button>
                    Learn More
                    <img src={whiteArrow} alt="" />
                  </button>
                  <img className="card-dots" src={dots} alt="dots" />
                </div>
                <div className="programs-card">
                  <div className="program-card-img">
                    <img src={addmission} alt="Program icon" />
                  </div>
                  <h3 className="card-heading fw-700 white">Class 6 - 8</h3>
                  <p className="white program-card-para">
                    Complete academic support across Mathematics, Science,
                    Social Science, English & Hindi.
                  </p>
                  <button>
                    Learn More
                    <img src={whiteArrow} alt="" />
                  </button>
                  <img className="card-dots" src={dots} alt="dots" />
                </div>
                <div className="programs-card">
                  <div className="program-card-img">
                    <img src={paint} alt="Program icon" />
                  </div>
                  <h3 className="card-heading fw-700 white">Class 9 - 10</h3>
                  <p className="white program-card-para">
                    Focused preparation for school exams and board-level
                    fundamentals.
                  </p>
                  <button>
                    Learn More
                    <img src={deepGreenArrow} alt="" />
                  </button>
                  <img className="card-dots" src={dots} alt="dots" />
                </div>
                <div className="programs-card">
                  <div className="program-card-img">
                    <img src={heart} alt="Program icon" />
                  </div>
                  <h3 className="card-heading fw-700 white">
                    Class 11 - 12 — Commerce
                  </h3>
                  <p className="white program-card-para">
                    Accounts, Economics, Business Studies, Mathematics &
                    English.
                  </p>
                  <button>
                    Learn More
                    <img src={whiteArrow} alt="" />
                  </button>
                  <img className="card-dots" src={dots} alt="dots" />
                </div>
              </div>
              <div className="benifits-wrapper">
                <div className="benifit">
                  <div className="benifit-icon">
                    <img src={tests} alt="Regular Tests" />
                  </div>
                  <div className="benifit-content">
                    <h4>Regular Tests</h4>
                    <p>Weekly tests and monthely assesments.</p>
                  </div>
                </div>
                <div className="benifit">
                  <div className="benifit-icon">
                    <img src={doubt} alt="Regular Tests" />
                  </div>
                  <div className="benifit-content">
                    <h4>Doubt Sessions</h4>
                    <p>Clear your doubts and strengthen concepts.</p>
                  </div>
                </div>
                <div className="benifit">
                  <div className="benifit-icon">
                    <img src={darkbook} alt="Regular Tests" />
                  </div>
                  <div className="benifit-content">
                    <h4>Homework Assistance</h4>
                    <p>Timely homework support and regular checking.</p>
                  </div>
                </div>
                <div className="benifit">
                  <div className="benifit-icon">
                    <img src={personalAttention} alt="Regular Tests" />
                  </div>
                  <div className="benifit-content">
                    <h4>Personal Attention</h4>
                    <p>Focus on every student's strength and weakness.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* =================================
    Life at CGA + Testimonial
================================= */}
        <section className="cga">
          <div className="container">
            <div className="cga-wrapper">
              {/* ==============================
          Life at CGA
      ============================== */}
              <div className="life-at-cga">
                <div className="life-at-cga-content">
                  <p className="small-heading">Life at Commerce Gyan Academy</p>

                  <h2 className="deep-green-black">
                    More Than Just
                    <br />
                    Tuition Classes.
                  </h2>

                  <p className="life-at-cga-para opacity">
                    We create a supportive learning environment where students
                    can learn confidently, clear their doubts, and grow with
                    personal attention.
                  </p>

                  <button className="btn-bg-green">
                    Discover Our Approach
                    <img src={whiteArrow} alt="" />
                  </button>
                </div>

                {/* ==============================
            Image Collage
        ============================== */}
                <div className="tuition-banner">
                  <div className="tuition-img">
                    <div className="two-image">
                      <div className="cga-image">
                        <img
                          src={lifeAtCga1}
                          alt="Students enjoying campus life"
                        />
                      </div>

                      <div className="cga-image">
                        <img
                          src={lifeAtCga2}
                          alt="Students playing basketball"
                        />
                      </div>
                    </div>

                    <div className="cga-image cga-image-large">
                      <img
                        src={lifeAtCga3}
                        alt="Students together at Commerce Gyan Academy"
                      />
                    </div>
                  </div>

                  {/* Floating icon */}
                  <div className="cga-floating-icon">
                    <img src={people} alt="" />
                  </div>
                </div>
              </div>

              {/* ==============================
          Divider
      ============================== */}
              <div className="cga-divider"></div>

              {/* ==============================
          Testimonial
      ============================== */}
              <div className="student-testimonial">
                <p className="small-heading">What Students Say</p>

                <h2 className="deep-green-black">
                  Voices of Our
                  <br />
                  Students
                </h2>

                <div className="testimonial-content">
                  <span className="testimonial-quote">“</span>

                  <p>
                    Commerce Gyan Academy has given me the confidence, knowledge
                    and exposure to chase my dreams.
                  </p>
                </div>

                <div className="testimonial-student">
                  <img src={studentProfileImg} alt="Student" />

                  <div>
                    <h4>Ananya Sharma</h4>
                    <p>B.Tech CSE, Final Year</p>
                  </div>
                </div>

                <div className="testimonial-bottom">
                  <div className="testimonial-dots">
                    <span></span>
                    <span></span>
                    <span className="active"></span>
                    <span></span>
                  </div>

                  <div className="testimonial-arrows">
                    <button aria-label="Previous testimonial">
                      <span>←</span>
                    </button>

                    <button aria-label="Next testimonial">
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LandingPage;
