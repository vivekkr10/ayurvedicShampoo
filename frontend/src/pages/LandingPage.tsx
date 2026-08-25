import React from "react";
import "../index.css";

const LandingPage = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="hero-wrap w-full flex flex-row flex-wrap items-center justify-between">
            <div className="hero-content max-w-112.5 lg:w-full w-full flex flex-col gap-6.5">
              <p className="!text-[var(--bg-tertiary-color)] !font-extrabold uppercase">
                Smarter Studying. Powered by AI
              </p>
              <h1 className="text-[--text-primary-color] font-bricol-bold">
                Turn Your Notes <br /> Into Deeper <br />
                <span className="text-[var(--bg-tertiary-color)]">
                  Understanding
                </span>
              </h1>
              <p>
                Create notes, organize your knoweledge, and let AI <br />{" "}
                summarize, explain, question and turn your material <br /> into
                flash cards -- all in one intlligent workspace.
              </p>
              <div className="hero-btns flex flex-row gap-2.5">
                <button className="purple-button flex flex-row gap-2.5 rounded-lg py-3.5 px-5 cursor-pointer bg-[var(--bg-tertiary-color)] text-white ">
                  Start Studying Free
                  <span className="material-symbols-outlined">
                    trending_flat
                  </span>
                </button>
                <button className="white-button border rounded-lg py-3.5 px-5 cursor-pointer">
                  See How It Works
                </button>
              </div>
            </div>
            <div className="hero-banner w-full max-w-180 lg:max-w-150 relative p-10">
              <div className="hero-banner-cards rounded-2xl flex flex-col max-w-75 w-full shadow-[0_-12px_35px_rgba(0,0,0,0.12),0_12px_30px_rgba(0,0,0,0.10)] py-4 bg-white">
                <div className="banner-heading flex flex-row justify-between items-center w-full pb-3.5 pl-6 pr-14 pr- border-b border-[#dddddd]">
                  <p className="text-m">My Notes</p>
                  <span className="material-symbols-outlined cursor-pointer">
                    trending_flat
                  </span>
                </div>
                <div className="hero-notes-content flex flex-col gap-6">
                  <div className="para flex flex-col gap-4 pt-2.5 pl-6 pr-12">
                    <h2 className="text-xl font-bold">Javascript Closures</h2>
                    <p className="text-sm">
                      A closure is combinaition of a function budled
                      together(enclosed) with reference to its surrounding state
                      (the laxical envtioment).
                    </p>
                  </div>
                  <div className="para pl-6 pr-12">
                    <h3 className="text-xl font-bold">Key Points</h3>
                    <ul className="list-disc pl-3 pt-3.5">
                      <li>
                        <p className="text-sm">
                          A closure gives a function access to its outer scope.
                        </p>
                      </li>
                      <li>
                        <p className="text-sm">
                          Closures are commonly used in cllbacks.
                        </p>
                      </li>
                      <li>
                        <p className="text-sm">
                          Variables can remain accessable after execution.
                        </p>
                      </li>
                    </ul>
                  </div>
                  <div className="hero-banner-card-tags flex flex-row gap-2 flex-wrap pl-6 pr-14 ">
                    <span className="bg-[#dbdbdb91] px-5 py-1 rounded-4xl text-sm">
                      <p>Javascript</p>
                    </span>
                    <span className="bg-[#dbdbdb91] px-5 py-1 rounded-4xl text-sm">
                      <p>Funcitons</p>
                    </span>
                  </div>
                </div>
              </div>
              <div className="hero-banner-cards absolute top-20 left-80 rounded-2xl flex flex-col max-w-75 w-full shadow-[0_-12px_35px_rgba(0,0,0,0.12),0_12px_30px_rgba(0,0,0,0.10)] pt-5 pb-5 bg-white p-6">
                <div className="banner-heading flex flex-row justify-between items-center pb-5">
                  <h2 className="text-[20px] font-bold">Ai Summary</h2>
                  <span className="material-symbols-outlined">bookmark</span>
                </div>
                <div className="hero-notes-content flex flex-col gap-6">
                  <div className="para">
                    <p className="text-sm">
                      Closures allows a function to remember <br /> and access
                      variables from its laxical <br /> enviroment even the
                      outer function <br /> has finished executing.
                    </p>
                  </div>
                  <div className="hero-banner-card-tags flex flex-col gap-3">
                    <h3 className="text-[15px] font-bold">Important Terms</h3>
                    <div className="hero-banner-card-tags flex flex-row flex-wrap gap-2">
                      <span className="bg-[#dbdbdb91] px-5 py-1 rounded-4xl text-sm">
                        Closure
                      </span>
                      <span className="bg-[#dbdbdb91] px-5 py-1 rounded-4xl text-sm">
                        Lexical Scope
                      </span>
                      <span className="bg-[#dbdbdb91] px-5 py-1 rounded-4xl text-sm">
                        Callback
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-banner-cards absolute bottom-15 left-90 rotate-355 rounded-2xl border-b-5 border-b-[var(--bg-tertiary-color)] flex flex-col max-w-75 w-full shadow-[0_-12px_35px_rgba(0,0,0,0.12),0_12px_30px_rgba(0,0,0,0.10)] pt-5 pb-7 bg-white p-6">
                <div className="para">
                  <ul>
                    <li className="text-2xl font-bricol-bold">
                      What does a closure preserve ?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
