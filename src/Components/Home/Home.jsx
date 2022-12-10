import React from "react";
import { Link } from "react-router-dom";
import TypeWriterEffect from "react-typewriter-effect";

const Home = () => {
  return (
    <div className="lg:mt-32 h-96 p-4">
      <div className="">
        <h1 className="lg:text-6xl md:text-4xl text-lg font-bold">
          MD MASUD RANA
        </h1>
        <div className="divider bg-primary w-24 mt-5 h-[6px]"></div>
        <div className="">
          {" "}
          <h2 className="lg:text-4xl md:text-3xl text-lg flex my-9">
            <span className="mr-5 text-gray-500"> Creative</span>
            <span>
              {" "}
              <TypeWriterEffect
                textStyle={{
                  fontFamily: "Red Hat Display",
                  color: "#3F3D56",
                  fontWeight: 500,
                  // fontSize: "1.5em",
                }}
                startDelay={2000}
                cursorColor="#3F3D56"
                multiText={[
                  "Web Developer",
                  "Frontend Web Developer",
                  "MERN Stack Developer",
                ]}
                multiTextDelay={5000}
                typeSpeed={50}
              />
            </span>
          </h2>
          <a
            // target="_blank"
            donload
            href="https://drive.google.com/file/d/134baqkTMDZfoAa55cVfhans2UGzUmjZF/view"
            className="btn btn-outline donload-btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
