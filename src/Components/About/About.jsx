import React from "react";

const About = () => {
  return (
    <div id="about">
      <div className="lg:mt-32 m-5">
        {/* about */}
        <div className="">
          <h1 className="  font-bold uppercase text-xl text-center">
            About Me
          </h1>
          <div className="divider"></div>
        </div>
        {/*  */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 ">
          <div
            className="pr-5"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <p>
              Hello there! My name is Masud Rana. I am a Web Developer, and I'm
              very passionate and dedicated to my work. With 3 years Learning
              experience as a professional a Web Developer, I have acquired the
              skills and knowledge necessary to make your project a success.
            </p>
          </div>
          <div
            className=""
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <address>
              <p className="mt-1">Name: Md Masud Rana</p>
              <p className="mt-1">Address: Sirajganj, Bangladesh</p>
              <p className="mt-1">Address: Sirajganj</p>
              <p className="mt-1">Study: Dobila Islampur Degree Collage</p>
              <p className="mt-1">Mail: mdmasudranainfo@yahoo.com</p>
              <p className="mt-1">Phone: 01742818037</p>
            </address>
          </div>
        </div>

        {/* about */}
      </div>
    </div>
  );
};

export default About;
