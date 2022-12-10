import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="mt-32 m-4">
      <div className="">
        <h1 className="text-gray-700 font-bold uppercase text-xl">protfolio</h1>
        <div className="divider"></div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <a target="_blank" href="https://zindani-8acac.web.app/">
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://i.ibb.co/TcSrwNX/2.png"
                alt="Zindani"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-primary bg-opacity-75 opacity-0 hover:opacity-100">
                <div className="mb-1 text-lg font-bold text-white">
                  <h1 className="text-xl">Zindani</h1>
                  <p className="text-sm">Old Phon Salling Website</p>
                </div>

                <div className="flex items-center justify-center space-x-3">
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  ></Link>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  ></Link>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a target="_blank" href="https://home-cookin-60455.web.app/">
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://i.ibb.co/T82NYmc/7922893.jpg"
                alt="Zindani"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-primary bg-opacity-75 opacity-0 hover:opacity-100">
                <div className="mb-1 text-lg font-bold text-white">
                  <h1 className="text-xl">Hoom Cooking</h1>
                  <p className="text-sm">Hoom Food Salling Website</p>
                </div>

                <div className="flex items-center justify-center space-x-3">
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  ></Link>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  ></Link>
                </div>
              </div>
            </div>
          </div>
        </a>

        <a target="_blank" href="https://e-learning-a10.web.app/">
          <div>
            <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                className="object-cover w-full h-56 md:h-64 xl:h-80"
                src="https://i.ibb.co/vmpBt3P/4905784.jpg"
                alt="Zindani"
              />
              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-primary bg-opacity-75 opacity-0 hover:opacity-100">
                <div className="mb-1 text-lg font-bold text-white">
                  <h1 className="text-xl">E Learning</h1>
                  <p className="text-sm">Course Salling Website</p>
                </div>

                <div className="flex items-center justify-center space-x-3">
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  ></Link>
                  <Link
                    href="/"
                    className="text-white transition-colors duration-300 hover:text-teal-accent-400"
                  ></Link>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
