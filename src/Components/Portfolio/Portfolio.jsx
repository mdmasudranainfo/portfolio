import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

const Portfolio = ({ setData }) => {
  const [porjects, setProjects] = useState([]);
  useEffect(() => {
    fetch("Projects.json")
      .then((response) => response.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  // console.log(porjects);
  return (
    <div id="portfolio" className="mt-32 m-4">
      <div className="">
        <h1 className=" font-bold uppercase text-xl text-center">protfolio</h1>
        <div className="divider"></div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {porjects.map((project) => (
          <div data-aos="fade-up">
            <div>
              <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
                <img
                  className="object-cover w-full h-56 md:h-64 xl:h-80"
                  src={project?.thum}
                  alt="Zindani"
                />
                <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-neutral bg-opacity-75 opacity-0 hover:opacity-100">
                  <div className="mb-1 text-lg font-bold text-white">
                    <h1 className="text-xl">{project.name}</h1>
                    <p className="text-sm">{project.title}</p>
                    <label
                      onClick={() => setData(project)}
                      htmlFor="my-modal-5"
                      className="btn"
                    >
                      Details
                    </label>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
