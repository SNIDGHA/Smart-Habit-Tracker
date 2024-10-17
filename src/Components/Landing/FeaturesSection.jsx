import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Parallax } from 'react-scroll-parallax';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
};

const FeaturesSection = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-blue-200 via-indigo-300 to-purple-400 text-gray-900 py-24">
      <div className="container mx-auto px-8 py-16">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true }}
        >
          <motion.h2 className="text-5xl font-bold mb-4">
            <Typewriter
              options={{
                strings: ['Explore Our Unique Features'],
                autoStart: true,
                loop: true,
                delay: 100,
                cursor: '|',
                deleteSpeed: 50,
                pauseFor: 1000,
              }}
            />
          </motion.h2>
          <motion.p className="text-xl text-gray-700">
            Discover the innovative features designed to enhance your experience and streamline your tasks.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature Card 1 */}
          <Parallax className="parallax" y={[-20, 20]} tagOuter="figure">
            <motion.div
              className="bg-white rounded-full shadow-lg p-8 flex flex-col justify-between items-center transition-transform transform hover:scale-105"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.7 }} // Trigger when the card is halfway into view
            >
              <h3 className="text-xl font-semibold mb-2 text-center">Smart Analytics</h3>
              <p className="text-gray-700 text-center">
                Leverage powerful analytics tools that provide insights into user behavior and performance metrics, helping you make informed decisions.
              </p>
            </motion.div>
          </Parallax>

          {/* Feature Card 2 */}
          <Parallax className="parallax" y={[-20, 20]} tagOuter="figure">
            <motion.div
              className="bg-white rounded-full shadow-lg p-8 flex flex-col justify-between items-center transition-transform transform hover:scale-105"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.7 }} // Trigger when the card is halfway into view
            >
              <h3 className="text-xl font-semibold mb-2 text-center">Seamless Integration</h3>
              <p className="text-gray-700 text-center">
                Enjoy effortless integration with existing systems and tools, allowing for a smooth workflow without disruptions.
              </p>
            </motion.div>
          </Parallax>

          {/* Feature Card 3 */}
          <Parallax className="parallax" y={[-20, 20]} tagOuter="figure">
            <motion.div
              className="bg-white rounded-full shadow-lg p-8 flex flex-col justify-between items-center transition-transform transform hover:scale-105"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.7 }} // Trigger when the card is halfway into view
            >
              <h3 className="text-xl font-semibold mb-2 text-center">User-Friendly Interface</h3>
              <p className="text-gray-700 text-center">
                Our intuitive interface ensures that you can navigate and utilize features with ease, enhancing your overall user experience.
              </p>
            </motion.div>
          </Parallax>

          {/* Feature Card 4 */}
          <Parallax className="parallax" y={[-20, 20]} tagOuter="figure">
            <motion.div
              className="bg-white rounded-full shadow-lg p-8 flex flex-col justify-between items-center transition-transform transform hover:scale-105"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.7 }} // Trigger when the card is halfway into view
            >
              <h3 className="text-xl font-semibold mb-2 text-center">Customizable Solutions</h3>
              <p className="text-gray-700 text-center">
                Tailor our solutions to meet your specific needs, ensuring you get the most out of your investment while addressing unique challenges.
              </p>
            </motion.div>
          </Parallax>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
