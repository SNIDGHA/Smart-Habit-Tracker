import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#fad4d4] flex justify-center items-center p-8">
      {/* Centered Container styled as a popup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white shadow-lg rounded-lg w-full max-w-sm p-4 flex flex-col"
      >
        {/* Heading with Typewriter Effect */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-extrabold text-gray-900 text-center mb-3"
        >
          <Typewriter
            options={{
              strings: ["Login to Your Account"],
              autoStart: true,
              loop: false,
              delay: 70,
              deleteSpeed: 50,
            }}
          />
        </motion.h1>

        {/* Subheading */}
        <p className="text-gray-600 text-center text-md mb-6">
          Welcome back! Please enter your details.
        </p>

        {/* Form */}
        <form className="space-y-4">
          {/* Email Input */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
              type="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </motion.div>

          {/* Password Input */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative"
          >
            <label
              className="block text-gray-700 font-semibold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 transition duration-300"
              type="password"
              id="password"
              placeholder="••••••••"
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4"
          >
            <button
              type="submit"
              className="w-full px-6 py-2 bg-indigo-600 text-white font-bold text-md rounded-lg shadow-lg hover:bg-indigo-700 transition duration-300"
            >
              Login
            </button>
          </motion.div>
        </form>

        {/* Forgot Password & Sign Up Links */}
        <div className="mt-4 text-center">
          <Link
            to="/forgot-password"
            className="text-indigo-500 hover:text-indigo-600 transition duration-300"
          >
            Forgot Password?
          </Link>
        </div>

        <div className="mt-2 text-center">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="text-indigo-500 hover:text-indigo-600 transition duration-300"
          >
            Sign Up
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
