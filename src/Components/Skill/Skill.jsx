import React from "react";

const Skill = () => {
  return (
    <div id="skill" className="lg:mt-32 m-4">
      <div className="">
        <h1 className=" font-bold uppercase text-xl text-center">Skills</h1>
        <div className="divider"></div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-items-center	 gap-5">
        <div
          data-aos="fade-up"
          className=" flex justify-center items-center flex-col  shadow-2xl p-5 rounded-lg w-full"
        >
          <div
            className="radial-progress bg-neutral text-primary-content border-4 border-neutral"
            style={{ "--value": 90, "--size": "8rem", "--thickness": "15px" }}
          >
            90%
          </div>
          <h2>HTML</h2>
        </div>

        <div
          data-aos="fade-up"
          className=" flex justify-center items-center flex-col  shadow-2xl p-5 rounded-lg w-full"
        >
          <div
            className="radial-progress bg-neutral text-primary-content border-4 border-neutral"
            style={{ "--value": 90, "--size": "8rem", "--thickness": "15px" }}
          >
            90%
          </div>
          <h2>CSS</h2>
        </div>

        <div
          data-aos="fade-up"
          className=" flex justify-center items-center flex-col  shadow-2xl p-5 rounded-lg w-full"
        >
          <div
            className="radial-progress bg-neutral text-primary-content border-4 border-neutral"
            style={{ "--value": 90, "--size": "8rem", "--thickness": "15px" }}
          >
            90%
          </div>
          <h2>Bootstarp</h2>
        </div>

        <div
          data-aos="fade-up"
          className=" flex justify-center items-center flex-col  shadow-2xl p-5 rounded-lg w-full"
        >
          <div
            className="radial-progress bg-neutral text-primary-content border-4 border-neutral"
            style={{ "--value": 90, "--size": "8rem", "--thickness": "15px" }}
          >
            90%
          </div>
          <h2>Tailwind Css</h2>
        </div>

        <div
          data-aos="fade-up"
          className=" flex justify-center items-center flex-col  shadow-2xl p-5 rounded-lg w-full"
        >
          <div
            className="radial-progress bg-neutral text-primary-content border-4 border-neutral"
            style={{ "--value": 70, "--size": "8rem", "--thickness": "15px" }}
          >
            70%
          </div>
          <h2>JavaScript</h2>
        </div>

        <div
          data-aos="fade-up"
          className=" flex justify-center items-center flex-col  shadow-2xl p-5 rounded-lg w-full"
        >
          <div
            className="radial-progress bg-neutral text-primary-content border-4 border-neutral"
            style={{ "--value": 70, "--size": "8rem", "--thickness": "15px" }}
          >
            70%
          </div>
          <h2>React Js</h2>
        </div>
        <div
          data-aos="fade-up"
          className=" flex justify-center items-center flex-col  shadow-2xl p-5 rounded-lg w-full"
        >
          <div
            className="radial-progress bg-neutral text-primary-content border-4 border-neutral"
            style={{ "--value": 40, "--size": "8rem", "--thickness": "15px" }}
          >
            40%
          </div>
          <h2>Node Express Js</h2>
        </div>

        <div
          data-aos="fade-up"
          className=" flex justify-center items-center flex-col  shadow-2xl p-5 rounded-lg w-full"
        >
          <div
            className="radial-progress bg-neutral text-primary-content border-4 border-neutral"
            style={{ "--value": 50, "--size": "8rem", "--thickness": "15px" }}
          >
            50%
          </div>
          <h2>MongoDB</h2>
        </div>

        <div
          data-aos="fade-up"
          className=" flex justify-center items-center flex-col  shadow-2xl p-5 rounded-lg w-full"
        >
          <div
            className="radial-progress bg-neutral text-primary-content border-4 border-neutral"
            style={{ "--value": 70, "--size": "8rem", "--thickness": "15px" }}
          >
            70%
          </div>
          <h2>Firebase</h2>
        </div>

        <div
          data-aos="fade-up"
          className=" flex justify-center items-center flex-col  shadow-2xl p-5 rounded-lg w-full"
        >
          <div
            className="radial-progress bg-neutral text-primary-content border-4 border-neutral"
            style={{ "--value": 70, "--size": "8rem", "--thickness": "15px" }}
          >
            30%
          </div>
          <h2>WordPress</h2>
        </div>
      </div>
    </div>
  );
};

export default Skill;
