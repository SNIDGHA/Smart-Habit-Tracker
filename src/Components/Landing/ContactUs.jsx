// src/components/ContactUs.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Typewriter from 'typewriter-effect';

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    alert('Form submitted!');
  };

  return (
    <section className="h-screen flex items-center justify-between bg-[#263764] text-black relative" id="contact-us">
      <div className="absolute inset-0 opacity-60 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900/?nature,water')" }} />
      
      {/* Left Half: Form Section */}
      <div className="w-1/2 flex items-center justify-center p-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg w-full max-w-md"
        >
          <h2 className="text-3xl font-bold text-center mb-8">
            <Typewriter
              options={{
                strings: ['Contact Us'],
                autoStart: true,
                loop: true,
                delay: 75,
              }}
            />
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-800 text-sm font-bold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline max-h-28"
                id="message"
                placeholder="Your Message"
                rows="4"
                
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Right Half: Text Section */}
      <div className="w-1/2 flex items-center justify-center p-10 relative z-10">
        <Parallax y={[-20, 20]} tagOuter="figure">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg w-full max-w-md"
          >
            <h2 className="text-2xl font-bold mb-4">We're Here to Help!</h2>
            <p className="text-gray-800">
              Your feedback is important to us. Whether you have questions about our services, need assistance, or want to share your thoughts, feel free to reach out. We're committed to providing you with the best experience possible.
            </p>
            <p className="mt-4 text-gray-800">
              Don't hesitate to fill out the form on the left. We look forward to connecting with you and will respond as soon as possible!
            </p>
          </motion.div>
        </Parallax>
      </div>
    </section>
  );
};

export default ContactUs;
