import React from "react";
import { Link } from "react-router-dom";
import TypeWriterEffect from "react-typewriter-effect";
import resume from "../../Assets/resume.pdf";
import {
  FaBeer,
  FaFacebook,
  FaGit,
  FaGithubAlt,
  FaGithubSquare,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Home = () => {
  return (
    <div id="home">
      <div
        className="lg:mt-32 h-96 p-4 lg:grid lg:grid-cols-2 grid-cols-1 align-items-center

"
      >
        <div
          className=""
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1 className="lg:text-6xl md:text-4xl text-lg font-bold">
            MD MASUD RANA
          </h1>
          <div className="divider bg-neutral w-24 mt-5 h-[6px]"></div>
          <div className="">
            <h2 className="lg:text-4xl md:text-3xl text-lg flex my-9">
              <span className="mr-5 text-gray-500"> Creative</span>
              <span className="">
                {" "}
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "Red Hat Display",

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
                  multiTextDelay={2000}
                  typeSpeed={50}
                  loop={Infinity}
                />
              </span>
            </h2>
            <a
              target="_blank"
              donload
              href="https://drive.google.com/file/d/134baqkTMDZfoAa55cVfhans2UGzUmjZF/view"
              className="btn btn-outline donload-btn"
            >
              Download Resume
            </a>
          </div>
          <div className="mt-5 flex w-6/12">
            <a href="https://www.facebook.com/mdmasudranainfo" target="_blank">
              <FaFacebook className="text-4xl mr-5"></FaFacebook>
            </a>
            <a
              href="https://www.linkedin.com/in/mdmasudranainfo/"
              target="_blank"
            >
              <FaLinkedin className="text-4xl mr-5"></FaLinkedin>
            </a>
            <a href="https://github.com/mdmasudranainfo">
              <FaGithubSquare className="text-4xl mr-5"></FaGithubSquare>
            </a>
            <a href="https://twitter.com/MdMasudRanainfo" target="_blank">
              <FaTwitter className="text-4xl mr-5"></FaTwitter>
            </a>
          </div>
        </div>

        <div
          className="lg:flex justify-center hidden"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <img
            className="w-3/4 "
            src="https://i.ibb.co/b1SGZG5/my-bg.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
