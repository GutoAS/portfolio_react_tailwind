import React from "react";

const Contact = () => {
  return (
    <section
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </h1>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>

        <div className="flex justify-center items-center">
          <form
            action="https://formspree.io/f/xeqdylrr"
            className="flex flex-col w-full md:w-1/2"
            method="Post"
          >
            <input
              name="name"
              placeholder="Enter your name"
              type="text"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></input>
            <input
              name="email"
              placeholder="Enter your email"
              type="email"
              className="p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></input>
            <textarea
              rows="10"
              name="message"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              placeholder="Enter your message "
            ></textarea>
            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
