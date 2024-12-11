import React from 'react';
import { motion } from 'framer-motion';
import sagar from '../../assets/test3.jpg';
import tejender from '../../assets/tejender.jpeg';
import priti from '../../assets/priti.jpeg';
import amlan from '../../assets/amlan.jpeg';

function OurTeam() {
  return (
    <div className="font-[sans-serif] bg-white">
      <div className="lg:max-w-6xl max-w-xl mx-auto p-4">
        <h2 className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-yellow-400 after:rounded-full">
          Meet Our Innovative Team
        </h2>
        <p className="text-gray-900 leading-relaxed font-light text-lg mx-auto pb-2 mt-6">
          Our innovative team is a dynamic group of professionals with diverse expertise, united by a passion for solving challenges and delivering exceptional results. We embrace creativity, cutting-edge technology, and collaboration to stay ahead of trends and continuously evolve, ensuring we make a meaningful impact.
        </p>

        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-md:justify-center mt-12">
          {/* Team Member 1 */}
          <motion.div
            className="flex items-center max-sm:flex-col bg-gray-100 gap-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-all"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.2 }}
          >
            <motion.img
              src={priti}
              className="w-full sm:h-60 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            />
            <div className="p-4">
              <h4 className="text-gray-800 text-base font-bold">Priti Nanda Patra</h4>
              <p className="text-gray-600 text-xs mt-1">Software Engineer</p>
              <div className="mt-4">
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  She is a talented software engineer skilled in developing efficient solutions and staying current with the latest technologies. She is known for her problem-solving abilities and delivering high-quality software.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            className="flex items-center max-sm:flex-col bg-gray-100 gap-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-all"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.4 }}
          >
            <motion.img
              src={tejender}
              className="w-full sm:h-60 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            />
            <div className="p-4">
              <h4 className="text-gray-800 text-base font-bold">Tejender Pal Singh</h4>
              <p className="text-gray-500 text-xs mt-1">Frontend Developer</p>
              <div className="mt-4">
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  He specializes in creating visually appealing and user-friendly websites with a focus on seamless user experiences.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            className="flex items-center max-sm:flex-col bg-gray-100 gap-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-all"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.6 }}
          >
            <motion.img
              src={sagar}
              className="sm:w-full lg:w-80 md:w-80 sm:h-60 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            />
            <div className="p-4">
              <h4 className="text-gray-800 text-base font-bold">Sagar Samal</h4>
              <p className="text-gray-500 text-xs mt-1">Full Stack Developer</p>
              <div className="mt-4">
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  He is a talented Full Stack Developer with expertise in both frontend and backend technologies. He excels in building scalable, efficient web applications.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Team Member 4 */}
          <motion.div
            className="flex items-center max-sm:flex-col bg-gray-100 gap-4 rounded-lg overflow-hidden hover:scale-[1.02] transition-all"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20, delay: 0.8 }}
          >
            <motion.img
              src={amlan}
              className="w-full sm:h-60 object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            />
            <div className="p-4">
              <h4 className="text-gray-800 text-base font-bold">Amlan Baral</h4>
              <p className="text-gray-500 text-xs mt-1">Admin Department</p>
              <div className="mt-4">
                <p className="text-gray-600 text-sm leading-relaxed text-justify">
                  Amlan Baral is a key member of the Admin Department, handling office coordination, scheduling, and administrative tasks with efficiency and attention to detail.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
