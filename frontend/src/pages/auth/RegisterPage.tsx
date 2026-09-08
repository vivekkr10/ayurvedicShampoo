import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "../../style/RegisterPage.css";
import greenPeople from "../../assets/images/svg/green-people.svg";
import expert from "../../assets/images/svg/expert.svg";
import better from "../../assets/images/svg/better.svg";
import bulb from "../../assets/images/svg/bulb.svg";
import priority from "../../assets/images/svg/priority.svg";
import learnGrow from "../../assets/images/svg/learn-grow.svg";
import boy from "../../assets/images/boy.webp";

const RegisterPage = () => {
  return (
    <aside>
      <section className="register-page">
        <div className="register-page-wrapper">
          <div className="register-banner-wrap">
            <div className="logo-wrapper">
              <div className="logo">
                <img src={logo} alt="Commerce Gyan Academy" />
              </div>

              <h2 className="deep-green-black logo-text">
                Commerce Gyan <br /> Academy
              </h2>
            </div>
            <div className="register-banner">
              <h2 className="register-head">
                Take the First Step{" "}
                <span className="deep-sea-green">Toward a Brighter Future</span>
              </h2>
              <p>
                Join Commerce Gyan Academy and get expert guidance, small
                batches and personal attention to achieve your goals.
              </p>
              <div className="register-icon-wrapper">
                <div className="register-icon">
                  <div className="register-icon-img">
                    <img src={greenPeople} alt="Small Batches" />
                  </div>
                  <p>
                    Small <br /> Batches
                  </p>
                </div>
                <div className="register-icon">
                  <div className="register-icon-img">
                    <img src={expert} alt="Expert Guidance" />
                  </div>
                  <p>
                    Exptr
                    <br /> Guidance
                  </p>
                </div>
                <div className="register-icon">
                  <div className="register-icon-img">
                    <img src={better} alt="Better Result" />
                  </div>
                  <p>
                    Better
                    <br /> Result
                  </p>
                </div>
                <div className="register-icon">
                  <div className="register-icon-img">
                    <img src={bulb} alt="Continuous Support" />
                  </div>
                  <p>
                    Continuous
                    <br /> Support
                  </p>
                </div>
              </div>
            </div>
            <div className="green-circle-wrapper">
              <div className="text-img-wrapper">
                <div className="text-img">
                  <img src={priority} alt="Your success Our Priority" />
                </div>
                <p>
                  Better <br />
                  Learning. <br />A Stronger <br />
                  Tomorrow.
                </p>
              </div>
              <div className="boy-img"></div>
              <img className="boy-image" src={boy} alt="Boy" />
              <div className="green-circle"></div>
            </div>
          </div>
          <div className="register-form-wrap">
            <p>
              <Link className="back-btn" to={"/"}>
                <svg
                  width="13"
                  height="12"
                  viewBox="0 0 13 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5 6.00004H1.00003"
                    stroke="#626262"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M5.00003 11L1.00003 6.00004"
                    stroke="#626262"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                  <path
                    d="M5.00003 1.00004L1.00003 6.00004"
                    stroke="#013920"
                    stroke-width="2"
                    stroke-linecap="round"
                  />
                </svg>
                Back To Home
              </Link>
            </p>
            <div className="small-heading"></div>
            <div className="form-wrapper">
              <h3>
                Register at <br />
                <span className="deep-sea-green">Commerce Gyan Acadmey</span>
              </h3>
              <p>Fill in your details to get started.It's quick and easy!</p>
              <form className="register-form">
                {/* Name + Phone */}
                <div className="form-row">
                  {/* Full Name */}
                  <div className="form-group">
                    <label htmlFor="fullName">
                      <svg
                        width="31"
                        height="34"
                        viewBox="0 0 31 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.00618 33C0.506182 16.5 30.5064 16.5 29.5062 33"
                          stroke="#9C9C9C"
                          stroke-width="2"
                          stroke-linecap="round"
                        />
                        <circle
                          cx="15.5064"
                          cy="9"
                          r="8"
                          stroke="#9C9C9C"
                          stroke-width="2"
                        />
                      </svg>
                    </label>

                    <div className="input-wrapper">
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        placeholder="Full Name"
                      />
                    </div>
                  </div>

                  {/* Phone Number */}
                  <div className="form-group">
                    <label htmlFor="phone">
                      <svg
                        width="33"
                        height="36"
                        viewBox="0 0 33 36"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.04462 1.03225C3.54458 1.53225 1.54462 5.28208 1.04462 9.03224C0.0446745 16.5322 16.0446 34.5322 25.0446 34.5322C28.5446 34.5322 31.5446 31.5322 31.5446 29.0322C31.5446 26.5322 27.5446 22.0322 25.0446 22.0322C22.9249 22.0322 21.8284 22.9738 20.0667 24.2906C19.4489 24.7524 18.6141 24.7919 17.9523 24.3959C14.2283 22.1673 12.1346 20.2294 9.95262 16.6188C9.41759 15.7335 9.7154 14.6086 10.5484 13.9952C12.2734 12.7248 13.4381 11.3933 13.0446 9.03224C12.5446 6.03224 8.54466 0.532242 6.04462 1.03225Z"
                          stroke="#9C9C9C"
                          stroke-width="2"
                        />
                      </svg>
                    </label>

                    <div className="input-wrapper">
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="form-group">
                  <label htmlFor="email">
                    <svg
                      width="34"
                      height="29"
                      viewBox="0 0 34 29"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M33 2.99998L17.6032 15.0287C17.2472 15.3068 16.749 15.3117 16.3876 15.0407L1 3.5M1 3.5C1 3.5 1 22.5 1 24.5C1 26.5 1.5 27.5 3.5 27.5C5.5 27.5 28.5 27.5 30.5 27.5C32.5 27.5 33 26.5 33 24.5C33 22.5 33 6 33 3.99998C33 1.99997 32 0.999985 30.5 1C29 1.00002 4.5 1 3 1C1.5 1 1 2 1 3.5Z"
                        stroke="#9C9C9C"
                        stroke-width="2"
                      />
                    </svg>
                  </label>

                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                    />
                  </div>
                </div>

                {/* Select Class */}
                <div className="form-group">
                  <label htmlFor="class">
                    <svg
                      width="32"
                      height="31"
                      viewBox="0 0 32 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.92114 12.2584L15.0774 17.3584C15.6125 17.603 16.2282 17.5996 16.7605 17.3491L27.5783 12.2584M3.92114 12.2584L2.16851 11.4572C0.649845 10.7629 0.600378 8.62336 2.08533 7.85967L14.993 1.22142C15.5746 0.922349 16.2656 0.926457 16.8435 1.23242L29.3835 7.87127C30.8406 8.64263 30.791 10.7465 29.2994 11.4485L27.5783 12.2584M3.92114 12.2584V22.1749C3.92114 22.547 4.02084 22.9138 4.23378 23.2189C6.52526 26.5029 11.1494 29.2441 15.9211 29.2441C20.7384 29.2441 24.6285 27.6538 27.5884 23.2566C27.8105 22.9266 27.9142 22.5317 27.9012 22.1341L27.5783 12.2584"
                        stroke="#9C9C9C"
                        stroke-width="2"
                      />
                    </svg>
                  </label>

                  <div className="input-wrapper">
                    <select id="class" name="class" defaultValue="" required>
                      <option value="" disabled>
                        Select Class *
                      </option>

                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                    </select>
                  </div>
                </div>

                {/* Select Stream */}
                <div className="form-group">
                  <label htmlFor="stream">
                    <svg
                      width="34"
                      height="32"
                      viewBox="0 0 34 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 1C4.32524 1 3.03917 2.33649 1.55362 3.91529C1.19968 4.29144 1 4.78845 1 5.30494V24.8371C1 26.0033 1.99533 26.9142 3.16139 26.8988C7.04884 26.8473 10.3388 27.5533 13.1605 29.0991C14.7231 29.9552 17 28.9534 17 27.1715V5.70836C17 4.96533 16.5866 4.28148 15.9269 3.93956C11.6499 1.72271 9.77802 1 7 1Z"
                        stroke="#9C9C9C"
                        stroke-width="2"
                      />
                      <path
                        d="M27 1C29.6748 1 30.9608 2.33649 32.4464 3.91529C32.8003 4.29144 33 4.78845 33 5.30494V24.8371C33 26.0033 32.0047 26.9142 30.8386 26.8988C26.9512 26.8473 23.6612 27.5533 20.8395 29.0991C19.2769 29.9552 17 28.9534 17 27.1715V5.70836C17 4.96533 17.4134 4.28148 18.0731 3.93956C22.3501 1.72271 24.222 1 27 1Z"
                        stroke="#9C9C9C"
                        stroke-width="2"
                      />
                    </svg>
                  </label>

                  <div className="input-wrapper">
                    <select id="stream" name="stream" defaultValue="" required>
                      <option value="" disabled>
                        Select Stream *
                      </option>

                      <option value="commerce">Commerce</option>
                      <option value="science">Science</option>
                      <option value="arts">Arts</option>
                    </select>
                  </div>
                </div>

                {/* City / Location */}
                <div className="form-group">
                  <label htmlFor="location">
                    <svg
                      width="29"
                      height="37"
                      viewBox="0 0 29 37"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M28 14.5C28 20.5222 19.2961 31.0575 15.8659 34.9755C15.1243 35.8226 13.8353 35.8496 13.0461 35.0467C5.57108 27.4423 0.999971 20.6131 1 14.5C1.00003 8 6.49997 1.00006 14.5 1C22.5 0.999939 28 7 28 14.5Z"
                        stroke="#9C9C9C"
                        stroke-width="2"
                      />
                      <circle
                        cx="14.5"
                        cy="14.9999"
                        r="5.5"
                        stroke="#9C9C9C"
                        stroke-width="2"
                      />
                    </svg>
                  </label>

                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="City / Location *"
                      required
                    />
                  </div>
                </div>

                {/* Create Password */}
                <div className="form-group">
                  <label htmlFor="password">
                    <svg
                      width="30"
                      height="38"
                      viewBox="0 0 30 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 14H14.5H22.5M6.5 14C2.5 14 1 15 1 17.5C1 20 1 30 1 32.5C0.999997 35 3 36.5 6.5 36.5C10 36.5 21.5 36.5 24.5 36.5C27.5 36.5 28.5 35.5 28.5 32.5C28.5 29.5 28.5 21 28.5 18C28.5 15 26.5 14 22.5 14M6.5 14C5.71339 4.6848 9.5 1 14.5 1C19.5 1 23.5504 5.66773 22.5 14"
                        stroke="#9C9C9C"
                        stroke-width="2"
                      />
                      <circle
                        cx="15"
                        cy="24"
                        r="3"
                        stroke="#9C9C9C"
                        stroke-width="2"
                      />
                    </svg>
                  </label>

                  <div className="input-wrapper">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Create Password *"
                      required
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      aria-label="Show password"
                    >
                      {/* Eye icon */}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div className="form-group">
                  <label htmlFor="confirmPassword">
                    <svg
                      width="30"
                      height="38"
                      viewBox="0 0 30 38"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.5 14H14.5H22.5M6.5 14C2.5 14 1 15 1 17.5C1 20 1 30 1 32.5C0.999997 35 3 36.5 6.5 36.5C10 36.5 21.5 36.5 24.5 36.5C27.5 36.5 28.5 35.5 28.5 32.5C28.5 29.5 28.5 21 28.5 18C28.5 15 26.5 14 22.5 14M6.5 14C5.71339 4.6848 9.5 1 14.5 1C19.5 1 23.5504 5.66773 22.5 14"
                        stroke="#626262"
                        stroke-width="2"
                      />
                      <circle
                        cx="15"
                        cy="24"
                        r="3"
                        stroke="#626262"
                        stroke-width="2"
                      />
                    </svg>
                  </label>

                  <div className="input-wrapper">
                    <input
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      placeholder="Confirm Password *"
                      required
                    />

                    <button
                      type="button"
                      className="password-toggle"
                      aria-label="Show confirm password"
                    >
                      {/* Eye icon */}
                    </button>
                  </div>
                </div>
                  
                {/* Submit */}
                <button type="submit" className="register-submit-btn btn-bg-green">
                  Register Now
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </aside>
  );
};

export default RegisterPage;
