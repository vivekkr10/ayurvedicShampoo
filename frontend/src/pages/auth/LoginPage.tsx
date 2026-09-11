import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import googleIcon from "../../assets/images/svg/google-icon.svg";
import "../../style/RegisterPage.css";
import "../../style/LoginPage.css";
import loginImg from "../../assets/images/login.webp";
import axios, { isAxiosError } from "axios";
import { toast, Toaster } from "sonner";
import {
  ArrowRight,
  BookOpenText,
  ChartColumnBig,
  FileText,
  Users,
} from "lucide-react";

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      console.log("User is already logged in.");
      window.location.href = "/";
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setError("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    // validate
    if (!formData.email || !formData.password) {
      setError("All fields are required");
      toast.error("All fields are required");
      return;
    }

    const { email, password } = formData;
    try {
      setLoading(true);
      const API_URL = import.meta.env.VITE_API_URL;
      const response = await axios.post(`${API_URL}/api/auth/login`, {
        email,
        password,
      });
      const data = response.data;
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      setSuccess(data.message);
      toast.success(data.message);
      console.log("Loggedin User: ", data.user);
      console.log("Token", data.token);
      setTimeout(() => {
        window.location.href = "/";
      }, 1500);
    } catch (error) {
      console.log("Login error:", error);
      if (axios.isAxiosError(error)) {
        setError(error.response?.data?.message || "Login Failed");
        toast.error("Login Failed");
      } else {
        setError("Something went wrong please try again");
        toast.error("Something went wrong please try again");
      }
    } finally {
      setLoading(false);
    }
  };
  return (
    <aside>
      <section className="register-page">
        <div className="register-page-wrapper">
          {/* =========================
              LEFT REGISTER BANNER
          ========================== */}

          <div className="register-banner-wrap ">
            <div className="logo-wrapper">
              <div className="logo">
                <img src={logo} alt="Commerce Gyan Academy" />
              </div>

              <h2 className="deep-green-black logo-text">
                Commerce Gyan <br /> Academy
              </h2>
            </div>
            <p className="small-heading left-gap">Welcome Back</p>
            <div className="register-banner">
              <h2 className="register-head">
                Continue{" "}
                <span className="deep-sea-green">Your Learning Journey</span>
              </h2>

              <p>
                Login to access your courses, study materials, test series and
                more at Commerce Gyan Academy.
              </p>

              <div className="register-icon-wrapper">
                {/* Small Batches */}
                <div className="register-icon">
                  <div className="register-icon-img">
                    <BookOpenText color="#21724D" />
                  </div>

                  <p>
                    Access <br /> Your Courses
                  </p>
                </div>

                {/* Expert Guidance */}
                <div className="register-icon">
                  <div className="register-icon-img">
                    <ChartColumnBig color="#21724D" />
                  </div>

                  <p>
                    Track
                    <br /> Your Progress
                  </p>
                </div>

                {/* Better Result */}
                <div className="register-icon">
                  <div className="register-icon-img">
                    <FileText color="#21724D" />
                  </div>

                  <p>
                    Get
                    <br /> Stud Materials
                  </p>
                </div>

                {/* Continuous Support */}
                <div className="register-icon">
                  <div className="register-icon-img">
                    <Users color="#21724D" />
                  </div>

                  <p>
                    Stay
                    <br /> Connected
                  </p>
                </div>
              </div>
            </div>

            {/* Green Circle Section */}

            <div className="login-img">
              <img src={loginImg} alt="Login here" />
            </div>
          </div>

          {/* =========================
              REGISTER FORM
          ========================== */}

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
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  <path
                    d="M5.00003 11L1.00003 6.00004"
                    stroke="#626262"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />

                  <path
                    d="M5.00003 1.00004L1.00003 6.00004"
                    stroke="#013920"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
                Back To Home
              </Link>
            </p>

            <div className="small-heading"></div>

            <div className="form-wrapper">
              <div className="small-heading left-gap">
                Login TO Your Account
              </div>
              <h3 className="deep-sea-green">Welcome Back!</h3>

              <p>
                Log in to continue your learning journey with Commerce Gyan
                Acadmey
              </p>

              <form onSubmit={handleSubmit} className="register-form">
                {/* =========================
                    NAME + PHONE
                ========================== *
                {/* =========================
                    EMAIL
                ========================== */}

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
                        strokeWidth="4"
                      />
                    </svg>
                  </label>

                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address *"
                      required
                    />
                  </div>
                </div>
                {/* =========================
                    PASSWORD
                ========================== */}

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
                        strokeWidth="4"
                      />

                      <circle
                        cx="15"
                        cy="24"
                        r="3"
                        stroke="#9C9C9C"
                        strokeWidth="4"
                      />
                    </svg>
                  </label>

                  <div className="input-wrapper">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Password *"
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
                <p className="forgor-password">
                  <a href="/forgot-password">Forgot Password?</a>
                </p>
                {/* =========================
                    SUBMIT
                ========================== */}

                <div className="login-button">
                  <button
                    type="submit"
                    disabled={loading}
                    className="register-submit-btn btn-bg-green"
                  >
                    {loading ? "Logging in..." : "Login "}
                    {!loading && <ArrowRight color="#ffffff" />}
                  </button>
                  <div className="divider">
                    <span className="hr-line"></span>
                    <p>or</p>
                    <span className="hr-line"></span>
                  </div>
                  <button className="login-google">
                    <div className="google-icon-img">
                      <img src={googleIcon} alt="Login with google" />
                    </div>
                    Continue With Google
                  </button>
                  <p className="login-text">
                    Don't have an account?{" "}
                    <Link to={"/register"} className="deep-sea-green">
                      Register Here
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Sonner Toast */}
      <Toaster position="bottom-center" />
    </aside>
  );
};

export default LoginPage;
