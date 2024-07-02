import React from "react";
import "./hero.css";

const Hero = () => {
  return (
    <div className="hero-bg">
      <div className="px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-64">
          <div className="text-center lg:text-left lg:-ml-60">
            <h1 className="mt-6 text-lg leading-8 text-gray-500 font-semibold">
              WELCOME TO GREEN Arts
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-gray-50 sm:text-5xl lg:text-6xl">
              Next Generation
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-gray-50 sm:text-5xl lg:text-6xl">
              Web <span className="text-[#37af65]">Design</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Empowering Your Online Presence with Sustainable Design
            </p>
            <div className="mt-10 flex items-center justify-center lg:justify-start gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#37af65] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#468d5f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#37af65]"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
