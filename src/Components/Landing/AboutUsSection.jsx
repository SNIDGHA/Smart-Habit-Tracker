import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { Parallax } from 'react-scroll-parallax';

const teamMembers = [
    {
        name: 'Snigdha Nayak',
        role: 'Frontend Developer',
        image: 'https://via.placeholder.com/150', // Replace with actual image URLs
    },
    {
        name: 'Pranjal Srivastava',
        role: 'Backend Developer',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Kunal Verma',
        role: 'Frontend Developer',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Arnab',
        role: 'Machine Learning Specialist',
        image: 'https://via.placeholder.com/150',
    },
];

const AboutUsSection = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-16">
            <Parallax y={[-20, 20]} tagOuter="figure">
                <motion.h1
                    className="text-5xl font-bold mb-4"
                    initial={{ y: -50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    About Us
                </motion.h1>
            </Parallax>
            <motion.div
                className="text-xl mb-10 text-center"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Typewriter
                    options={{
                        strings: ['We are a passionate team.', 'Innovating for a better future.'],
                        autoStart: true,
                        delay: 50,
                        loop: true,
                    }}
                />
            </motion.div>

            {/* Grid of team member cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
                {teamMembers.map((member, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-lg shadow-lg"
                        initial={{ opacity: 0, y: 50 }}  // Start hidden
                        whileInView={{ opacity: 1, y: 0 }} // Slide in effect
                        viewport={{ once: false, amount: 0.5 }} // Trigger when 50% of the element is in view
                        transition={{ duration: 0.5, delay: index * 0.2 }} // Staggered delay for each card
                    >
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-32 h-32 rounded-full mx-auto mb-4"
                        />
                        <h2 className="text-2xl font-semibold text-center">{member.name}</h2>
                        <p className="text-gray-600 text-center">{member.role}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default AboutUsSection;
