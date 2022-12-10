import React from "react";

const Skill = () => {
  return (
    <div className="lg:mt-32 m-4">
      <div className="">
        <h1 className="text-gray-700 font-bold uppercase text-xl">Skills</h1>
        <div className="divider"></div>
      </div>
      <div className="grid grid-cols-3 justify-items-center	 gap-5">
        <div className="">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 90, "--size": "8rem", "--thickness": "15px" }}
          >
            90%
          </div>
          <h2>HTML CSS</h2>
        </div>

        <div className="">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 70, "--size": "8rem", "--thickness": "15px" }}
          >
            70%
          </div>
          <h2>JavaScript</h2>
        </div>

        <div className="">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 70, "--size": "8rem", "--thickness": "15px" }}
          >
            70%
          </div>
          <h2>React Js</h2>
        </div>
        <div className="">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 40, "--size": "8rem", "--thickness": "15px" }}
          >
            40%
          </div>
          <h2>Node Express Js</h2>
        </div>

        <div className="">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 50, "--size": "8rem", "--thickness": "15px" }}
          >
            50%
          </div>
          <h2>MongoDB</h2>
        </div>

        <div className="">
          <div
            className="radial-progress bg-primary text-primary-content border-4 border-primary"
            style={{ "--value": 70, "--size": "8rem", "--thickness": "15px" }}
          >
            70%
          </div>
          <h2>Firebase</h2>
        </div>
      </div>
    </div>
  );
};

export default Skill;
