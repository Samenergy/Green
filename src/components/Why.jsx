import React from "react";

const Why = () => {
  return (
    <div className="text-center p-8 bg-[#f9fafb]">
      <div className="flex flex-wrap items-center -mt-40 text-left">
        <div className="w-full md:w-3/5 lg:w-1/2 px-4 relative top-20">
          <img
            src="https://images.pexels.com/photos/5198239/pexels-photo-5198239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="gem"
            className="inline-block rounded-lg shadow-lg border-none w-full lg:w-[900px]"
          />
        </div>
        <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12 mt-12 md:mt-0 lg:mt-52">
          <h3 className="font-bold mt-8 lg:text-5xl md:mt-0 text-2xl sm:text-3xl md:text-4xl">
            Web Design Company
            <p className="mt-4 md:mt-2 lg:mt-0">
              You Can <span className="text-[#37af65]">Trust</span>
            </p>
          </h3>
          <p className="text-base sm:text-lg mt-6">
            We specialize in crafting professional and unique websites that set
            you apart in the digital landscape. Our dedicated team stays ahead
            of the curve, constantly exploring new technologies to ensure your
            web projects are modern, high-tech, and tailored to your needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Why;
