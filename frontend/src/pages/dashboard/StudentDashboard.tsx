import {
  ArrowLeft,
  ArrowRight,
  BookOpenText,
  ChartColumnBig,
  CircleCheck,
  CirclePlay,
  FileText,
  Megaphone,
  MessageCircleMore,
} from "lucide-react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import student from "../../assets/images/student-dashboard-banner.webp";
import "../../style/student-dashboard.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import type { Swiper as SwiperType } from "swiper";
import tagline from "../../assets/images/svg/Decipline-tag-line.svg";
import accountancy from "../../assets/images/accountancy.webp";
import commerceFoundation from "../../assets/images/commerce-foundation.webp";
import economics from "../../assets/images/econimics.webp";
import businessStudies from "../../assets/images/business-studies.webp";
import announcement from "../../assets/images/announcements.webp";

const StudentDashboard = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <>
      <div className="overflow">
        <main className="student-dashboard-main">
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
          <section className="my-courses-section">
            <div className="dash-container">
              <div className="my-courses-wrapper">
                <div className="my-courses-heading">
                  <h3>My Courses</h3>
                  <p>
                    <Link className="link-btn" to={""}>
                      View All <ArrowRight color="#21724D" />
                    </Link>
                  </p>
                </div>
                <Swiper
                  className="my-courses-swiper"
                  spaceBetween={20}
                  slidesPerView={1}
                  breakpoints={{
                    576: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 25,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 25,
                    },
                    1200: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                    1440: {
                      slidesPerView: 4,
                      spaceBetween: 30,
                    },
                  }}
                  onSlideChange={() => {
                    console.log("slide change");
                  }}
                  onSwiper={(swiper: SwiperType) => {
                    swiperRef.current = swiper;
                  }}
                >
                  <SwiperSlide>
                    <div className="swiper-card">
                      <div className="swiper-card-img">
                        <img src={accountancy} alt="Accountancy" />
                        <p className="card-name">
                          Class 12 <br />
                          Accountancy
                        </p>
                      </div>
                      <div className="course-progress-wrapper">
                        <div className="course-progress">
                          <div className="progress-header">
                            <span>Progress</span>
                            <span>72%</span>
                          </div>

                          <div className="progress-bar">
                            <div
                              className="progress-fill"
                              style={{ width: "72%" }}
                            ></div>
                          </div>
                        </div>
                        <Link to={""}>
                          <button className="swiper-card-btn">
                            Continue <ArrowRight color="#000000" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-card">
                      <div className="swiper-card-img">
                        <img src={businessStudies} alt="Accountancy" />
                        <p className="card-name">
                          Class 12 <br />
                          Business Studies
                        </p>
                      </div>
                      <div className="course-progress-wrapper">
                        <div className="course-progress">
                          <div className="progress-header">
                            <span>Progress</span>
                            <span>60%</span>
                          </div>

                          <div className="progress-bar">
                            <div
                              className="progress-fill"
                              style={{ width: "60%" }}
                            ></div>
                          </div>
                        </div>
                        <Link to={""}>
                          <button className="swiper-card-btn">
                            Continue <ArrowRight color="#000000" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-card">
                      <div className="swiper-card-img">
                        <img src={economics} alt="Accountancy" />
                        <p className="card-name">
                          Class 12 <br />
                          Economics
                        </p>
                      </div>
                      <div className="course-progress-wrapper">
                        <div className="course-progress">
                          <div className="progress-header">
                            <span>Progress</span>
                            <span>45%</span>
                          </div>

                          <div className="progress-bar">
                            <div
                              className="progress-fill"
                              style={{ width: "45%" }}
                            ></div>
                          </div>
                        </div>
                        <Link to={""}>
                          <button className="swiper-card-btn">
                            Continue <ArrowRight color="#000000" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="swiper-card">
                      <div className="swiper-card-img">
                        <img src={commerceFoundation} alt="Accountancy" />
                        <p className="card-name">
                          Class 12 <br />
                          Commerce Foundation
                        </p>
                      </div>
                      <div className="course-progress-wrapper">
                        <div className="course-progress">
                          <div className="progress-header">
                            <span>Progress</span>
                            <span>30%</span>
                          </div>

                          <div className="progress-bar">
                            <div
                              className="progress-fill"
                              style={{ width: "30%" }}
                            ></div>
                          </div>
                        </div>
                        <Link to={""}>
                          <button className="swiper-card-btn">
                            Continue <ArrowRight color="#000000" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="course-navigation">
                  <button
                    className="swiper-btns"
                    onClick={() => swiperRef.current?.slidePrev()}
                  >
                    <ArrowLeft color="#0000009f" />
                  </button>

                  <button
                    className="swiper-btns"
                    onClick={() => swiperRef.current?.slideNext()}
                  >
                    <ArrowRight color="#0000009f" />
                  </button>
                </div>
              </div>
            </div>
          </section>
          <section className="announcement-sec">
            <div className="dash-container">
              <div className="announcement-sec-wrapper">
                <div className="recent-announce">
                  <div className="announce-head">
                    <h3>Recent Announcement</h3>
                    <p>
                      <Link className="link-btn" to={""}>
                        View All <ArrowRight color="#21724D" />
                      </Link>
                    </p>
                  </div>
                  <div className="announcement-wrapper">
                    <div className="announce-icon">
                      <Megaphone />
                    </div>
                    <div className="announcement">
                      <h4>Unit Test 2 Schedule Released</h4>
                      <p className="para12">
                        Class 12th test will be conducted from 20th Sep 2025.
                      </p>
                    </div>
                  </div>
                  <div className="hr-line"></div>
                  <div className="announcement-wrapper">
                    <div className="announce-icon">
                      <FileText />
                    </div>
                    <div className="announcement">
                      <h4>New Study Matetial Uploaded</h4>
                      <p className="para12">
                        Chapter-wise notes for Business Studies are now
                        available.
                      </p>
                    </div>
                  </div>
                  <div className="hr-line"></div>
                  <div className="announcement-wrapper">
                    <div className="announce-icon">
                      <MessageCircleMore />
                    </div>
                    <div className="announcement">
                      <h4>Live Doubt Session this Saturday</h4>
                      <p className="para12">
                        Join the special doubt clearing sesson at 5:pm.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="recent-announce-banner">
                  <img src={announcement} alt="Recent announcement" />
                <button className="announce-banner-btn">
                  <Link to={""}>
                    <ArrowRight color="#ffffff"/>
                  </Link>
                </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default StudentDashboard;
