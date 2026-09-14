import {
  ArrowRight,
  BookOpenText,
  ChartColumnBig,
  CircleCheck,
  CirclePlay,
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
                  <h2>My Courses</h2>
                  <p>
                    <Link className="link-btn" to={""}>
                      View All <ArrowRight color="#21724D" />
                    </Link>
                  </p>
                </div>
                <Swiper
                className="my-courses-swiper"
                  spaceBetween={50}
                  slidesPerView={4}
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
                      <button>
                        <Link className="swiper-card-btn" to={""}>
                          Continue <ArrowRight color="#000000" />
                        </Link>
                      </button>
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
                      <div className="course-progress">
                        <div className="progress-header">
                          <span>Progress</span>
                          <span>60%</span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{ width: "72%" }}
                          ></div>
                        </div>
                      </div>
                      <button>
                        Continue <ArrowRight color="#000000" />
                      </button>
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
                      <div className="course-progress">
                        <div className="progress-header">
                          <span>Progress</span>
                          <span>45%</span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{ width: "72%" }}
                          ></div>
                        </div>
                      </div>
                      <button>
                        Continue <ArrowRight color="#000000" />
                      </button>
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
                      <div className="course-progress">
                        <div className="progress-header">
                          <span>Progress</span>
                          <span>30%</span>
                        </div>

                        <div className="progress-bar">
                          <div
                            className="progress-fill"
                            style={{ width: "72%" }}
                          ></div>
                        </div>
                      </div>
                      <button>
                        Continue <ArrowRight color="#000000" />
                      </button>
                    </div>
                  </SwiperSlide>
                </Swiper>
                <div className="course-navigation">
                  <button onClick={() => swiperRef.current?.slidePrev()}>
                    ←
                  </button>

                  <button onClick={() => swiperRef.current?.slideNext()}>
                    →
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
