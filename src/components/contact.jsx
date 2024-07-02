import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center py-20 px-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12">
        <div className="w-full lg:w-2/3 p-8 lg:p-12 rounded-2xl shadow-2xl bg-white">
          <div className="mb-8">
            <h1 className="font-bold uppercase text-5xl text-center lg:text-left">
              Send us a <br /> message
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="First Name*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Last Name*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Email*"
            />
            <input
              className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
              type="number"
              placeholder="Phone*"
            />
          </div>
          <div className="my-4">
            <textarea
              placeholder="Message*"
              className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="my-2 w-full md:w-1/2">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-[#37af65] text-gray-100 p-3 rounded-lg w-full 
                          focus:outline-none focus:shadow-outline"
            >
              Send Message
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/3 bg-[#37af65] p-8 lg:p-12 rounded-2xl text-white">
          <div className="flex flex-col">
            <h1 className="font-bold uppercase text-4xl my-4 text-center lg:text-left">
              CONTACT INFO
            </h1>

            <div className="flex flex-col my-4">
              <div className="flex items-center mb-4">
                <i className="fas fa-phone-alt pr-4" />
                <div>
                  <h2 className="text-2xl">Contact Us</h2>
                  <p>Tel: +48 791 676 244 </p>
                  <p>Email: greenartstech@gmail.com</p>
                </div>
              </div>

              <div className="flex justify-center lg:justify-start space-x-4">
                <a
                  href="https://www.linkedin.com/company/green-arts-tech/?"
                  target="_blank"
                  rel="noreferrer"
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-white text-[#37af65] text-2xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="h-8 w-8 flex items-center justify-center rounded-full bg-white text-[#37af65] text-2xl"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
