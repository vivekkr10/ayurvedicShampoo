import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="grid grid-cols-2">
      {/* image */}
      <div>
        <img
          className="w-full h-screen"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrX8uZKxJmsoEKcdQd1Yoqom92XHnj9B6qIGl7KN7UH1MVLQQUYU5Vx6tpe9iMatYvu_x6epANZbkYlYQq1KYT-d84M5PrgdlSI0DmR_JcbdaIGv23Av027Lvi5PPMID4bwQ4Z60YugM5WZpYI_OFnysGaseLb77vRWEla8yQ2KMsGsdYyDT6zpBgInhWHOTeXyRmIPrYsF8z0NhbpNBM0x9qYwnl-6nd5tk2a5W1wcJG2Ec3a4y4R0A"
          alt="register-page-image"
        />
      </div>
      {/* form */}
      <div className="px-30 flex flex-col justify-center">
        <h2 className="text-[var(--text-primary-color)] font-bold text-4xl">
          Create your account
        </h2>
        <p className="text-[var(--text-primary-color)] text-lg">
          Enter your details to get started with Lumina.
        </p>
        <form className="flex flex-col gap-3 mt-5">
          <div className="flex flex-col">
            <label
              htmlFor="fullname"
              className="text-[var(--text-primary-color)]"
            >
              Full Name
            </label>
            <input
              className="border border-gray-300 px-4 py-2 rounded-md outline-none focus:border-[var(--bg-tertiary-color)]"
              type="text"
              name="fullname"
              placeholder="John Smith"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              className="border border-gray-300 px-4 py-2 rounded-md outline-none focus:border-[var(--bg-tertiary-color)]"
              type="email"
              name="email"
              placeholder="john@example.com"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              className="border border-gray-300 px-4 py-2 rounded-md outline-none focus:border-[var(--bg-tertiary-color)]"
              type="text"
              name="password"
              placeholder="Password"
            />
            <p className="text-end text-blue-600 hover:underline">
              <Link to="/forgot-password">Forgot password ?</Link>
            </p>
          </div>
          <button
            type="submit"
            className="bg-[var(--bg-tertiary-color)] text-white py-2.5 cursor-pointer rounded-md"
          >
            Sign Up
          </button>
          {/* <div className="flex flex-col">
            <label htmlFor="confirmpass">Confirm Password</label>
            <input
              className="border border-gray-200 px-4 py-2 rounded-md"
              type="text"
              name="confirmpass"
              placeholder="Confirm Password"
            />
          </div> */}
        </form>
        <div className="flex mt-10 items-center">
          <span className="h-[1px] w-full bg-gray-300 inline-block"></span>
          <span className="text-gray-500 mx-6 inline-block w-full">
            Or continue with
          </span>
          <span className="h-[1px] w-full bg-gray-300 inline-block"></span>
        </div>
        <div className="mt-10">
          <button className="w-full bg-gray-200 flex justify-center items-center py-2.5 rounded-md gap-2 cursor-pointer active:scale-95 transition-transform duration-200">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="#4285F4"
                d="M21.35 12.27c0-.78-.07-1.53-.22-2.27H12v4.3h5.24a4.48 4.48 0 0 1-1.94 2.94v2.45h3.14c1.84-1.69 2.91-4.18 2.91-7.42z"
              />
              <path
                fill="#34A853"
                d="M12 21.5c2.63 0 4.84-.87 6.45-2.35l-3.14-2.45c-.87.58-1.98.93-3.31.93-2.54 0-4.69-1.72-5.46-4.03H3.3v2.53A9.75 9.75 0 0 0 12 21.5z"
              />
              <path
                fill="#FBBC05"
                d="M6.54 13.6A5.86 5.86 0 0 1 6.23 12c0-.56.11-1.1.31-1.6V7.87H3.3A9.76 9.76 0 0 0 2.25 12c0 1.57.38 3.05 1.05 4.13l3.24-2.53z"
              />
              <path
                fill="#EA4335"
                d="M12 6.38c1.43 0 2.71.49 3.72 1.45l2.79-2.79C16.84 3.46 14.63 2.5 12 2.5a9.75 9.75 0 0 0-8.7 5.37l3.24 2.53C7.31 8.1 9.46 6.38 12 6.38z"
              />
            </svg>
            <span className="text-[var(--text-primary-color)]">
              Sign up with Google
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
