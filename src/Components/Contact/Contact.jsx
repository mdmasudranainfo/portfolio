import React from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const submitHanler = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ci3yvi7",
        "template_83ifjx3",
        e.target,
        "8cZMbL2zcUSv9irno"
      )
      .then((data) => {
        if (data.status === 200) {
          toast.success("Message sent successfully");
          e.target.reset();
        }
        console.log(data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div id="contact" data-aos="fade-up" className="lg:mt-32 m-4">
      <div className="">
        <h1 className=" font-bold uppercase text-xl text-center">Contact Me</h1>
        <div className="divider"></div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <div className="border-2 flex flex-col items-center	p-4 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
            />
          </svg>
          <p>Sirajganj, Bangladesh</p>
        </div>

        <div className="border-2 flex flex-col items-center	p-4 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>

          <p>mdmasude7@yahoo.com</p>
        </div>
        <div className="border-2 flex flex-col items-center	p-4 shadow-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>

          <p>01742818037</p>
        </div>
      </div>
      {/*  */}

      <div className="lg:px-20 ">
        <form onSubmit={submitHanler} className="card-body  ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Message</span>
            </label>
            <textarea
              className="textarea textarea-bordered"
              placeholder="Message"
              name="message"
            ></textarea>
          </div>

          <div className="form-control mt-6">
            <button className="btn btn-primary">Send Message</button>
          </div>
        </form>
      </div>

      {/*  */}
    </div>
  );
};

export default Contact;
