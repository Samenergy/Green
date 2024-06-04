import React from "react";
const Pricing = () => {
  return (
    <div>
      <div className="min-w-screen min-h-screen bg-gray-100 px-5 py-5">
        <div className="w-full mx-auto bg-white px-5 py-10 text-gray-950 mb-10">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-5">
              Website Design Packages
            </h1>
            <h3 className="text-xl font-medium mb-10">
              We offer a few standard packages as well as custom projects. Our
              web design company specializes in the professional creation of
              unique sites.
            </h3>
          </div>
          <div className="max-w-4xl mx-auto md:flex">
            <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
              <div className="w-full flex-grow">
                <h2 className="text-center font-bold uppercase mb-4">
                  Basic Package
                </h2>
                <h3 className="text-center font-bold text-4xl mb-5">$999</h3>
                <ul className="text-sm px-5 mb-8">
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Ideal for
                    small businesses and startups
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i>{" "}
                    Custom-designed website with up to 5 pages
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Responsive
                    design for seamless viewing on all devices{" "}
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Basic SEO
                    optimization to improve search engine visibility{" "}
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <button className="font-bold bg-[#37af65] hover:bg-[#477257] text-white rounded-md px-10 py-2 transition-colors w-full">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:-mx-3 md:mb-0 rounded-md shadow-lg shadow-gray-600 md:relative  md:flex md:flex-col">
              <div className="w-full flex-grow">
                <h2 className="text-center font-bold uppercase mb-4">
                  Standard Package{" "}
                </h2>
                <h3 className="text-center font-bold text-4xl md:text-5xl mb-5">
                  $1999
                </h3>
                <ul className="text-sm px-5 mb-8">
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Perfect for
                    growing businesses and organizations
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i>{" "}
                    Custom-designed website with up to 10 pages
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Enhanced SEO
                    optimization for improved search engine ranking
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Integration
                    of social media and contact forms
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <button className="font-bold bg-[#37af65] hover:bg-[#477257] text-white rounded-md px-10 py-2 transition-colors w-full">
                  Buy Now
                </button>
              </div>
            </div>
            <div className="w-full md:w-1/3 md:max-w-none bg-white px-8 md:px-10 py-8 md:py-10 mb-3 mx-auto md:my-6 rounded-md shadow-lg shadow-gray-600 md:flex md:flex-col">
              <div className="w-full flex-grow">
                <h2 className="text-center font-bold uppercase mb-4">
                  Premium Package
                </h2>
                <h3 className="text-center font-bold text-4xl mb-5">$3999</h3>
                <ul className="text-sm px-5 mb-8">
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Tailored for
                    larger businesses and enterprises
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i>{" "}
                    Custom-designed website with unlimited pages
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Advanced SEO
                    optimization and keyword research
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> E-commerce
                    functionality for online stores
                  </li>
                  <li className="leading-tight">
                    <i className="mdi mdi-check-bold text-lg"></i> Much more...
                  </li>
                </ul>
              </div>
              <div className="w-full">
                <button className="font-bold bg-[#37af65] hover:bg-[#477257] text-white rounded-md px-10 py-2 transition-colors w-full">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
          <div className="text-center mt-5">
            <p>
              Note: Prices are subject to change based on project requirements.
              Contact us for a personalized quote.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
