import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';


const HeroSection = () => {
  return (
    <section className="relative w-full h-screen bg-gradient-to-br from-purple-900 via-indigo-700 to-blue-500 overflow-hidden text-white">
      {/* Background overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-blue-500 opacity-70"></div>

      <div className="container mx-auto flex flex-col justify-center items-center h-full relative z-10 text-center">
        {/* Motion Heading */}
        <motion.h1
          className="text-7xl font-extrabold mb-8 tracking-wide"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          Elevate Your <span className="text-yellow-400">Habits</span>
        </motion.h1>

        {/* Typewriter Effect for tagline */}
        <motion.div
          className="text-4xl font-light mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <Typewriter
            options={{
              strings: ['Track Your Progress', 'Predict Your Mood', 'Achieve Greatness'],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          className="space-x-4 mt-6"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <Link to="/signup">
            <button className="px-8 py-4 bg-yellow-400 text-black rounded-full text-lg font-semibold shadow-lg hover:bg-yellow-300 transition duration-300">
              Get Started
            </button>
          </Link>
          <button className="px-8 py-4 bg-transparent border border-white rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300">
            Learn More
          </button>
        </motion.div>
      </div>

      {/* Animated floating shapes using framer-motion */}
      <motion.div
        className="absolute bottom-10 left-10 w-32 h-32 bg-pink-400 rounded-full opacity-50"
        animate={{ y: [0, -20, 0], rotate: [0, 360, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />
      <motion.div
        className="absolute top-20 right-20 w-24 h-24 bg-blue-300 rounded-full opacity-50"
        animate={{ y: [0, -30, 0], rotate: [0, 360, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
      />
    </section>
  );
};

export default HeroSection;
