import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const StatsSection = () => {
  // useInView to trigger animation when in view
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  return (
    <section
      ref={ref}
      className="relative w-full h-screen bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-200 flex items-center justify-center text-gray-900"
    >
      <div className="absolute inset-0 bg-opacity-60"></div>

      <div className="container mx-auto text-center z-10 space-y-12">
        {/* Beautiful animated heading */}
        <motion.h2
          className="text-5xl font-extrabold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2 }}
          style={{ color: '#4c2882' }} // Subtle purple tone for beauty
        >
          Unlock the Power of <span className="text-blue-500">Insights</span> with Us
        </motion.h2>

        {/* Lightened description */}
        <motion.p
          className="text-xl font-light max-w-2xl mx-auto text-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 1.2 }}
        >
          Our platform helps you tap into your true potential with data-driven insights. Get a clear overview of your progress, habits, and improvements to reach your goals.
        </motion.p>

        {/* Stats Cards with beautiful color scheme and smooth animation */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-500 ease-in-out"
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1.0 }}
          >
            <h3 className="text-4xl font-bold text-blue-600 mb-4">500K+</h3>
            <p className="text-gray-600">Happy Users</p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-500 ease-in-out"
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 1.0 }}
          >
            <h3 className="text-4xl font-bold text-blue-600 mb-4">2M+</h3>
            <p className="text-gray-600">App Downloads</p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition duration-500 ease-in-out"
            initial={{ opacity: 0, y: 100 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 1.0 }}
          >
            <h3 className="text-4xl font-bold text-blue-600 mb-4">98%</h3>
            <p className="text-gray-600">Customer Satisfaction</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
