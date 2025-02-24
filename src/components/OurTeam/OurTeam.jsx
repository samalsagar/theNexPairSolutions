import React from 'react';
import { motion } from 'framer-motion';
import sagar from '../../assets/Team/samal.jpg';
import tejender from '../../assets/tejender.jpeg';
import seo from '../../assets/Team/seo.jpeg';
import amlan from '../../assets/Team/manoj.jpeg';
import dibya from '../../assets/Team/soumitree.jpeg';

function OurTeam() {
  return (
    <div className="font-[sans-serif] px-4 py-8 bg-gradient-to-t from-green-100 via-purple-200 to-blue-100">
      <div className="lg:max-w-5xl sm:max-w-2xl mx-auto">
        <header className="text-center mx-auto mb-10 lg:px-20">
          <motion.h2
            className="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-yellow-400 after:rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Meet Our Innovative Team
          </motion.h2>
          <motion.p
            className="text-gray-900 leading-relaxed font-light text-lg mx-auto pb-2 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            A team driven by creativity and passion, dedicated to creating innovative solutions that push boundaries and make an impact.
          </motion.p>
        </header>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-8 max-sm:gap-12 max-md:justify-center mt-16">
          {/* Team Member 1 */}
          <motion.div
            className="flex items-center p-6 bg-white rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-yellow-400 hover:ring-2 hover:ring-yellow-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src={seo}
              className="w-24 h-24 rounded-full transform transition duration-300 hover:scale-110 hover:brightness-110"
              whileHover={{ scale: 1.1 }}
            />
            <div className="ml-6">
              <motion.h4
                className="text-gray-800 text-base font-semibold transition-colors duration-200 hover:text-yellow-500"
                whileHover={{ scale: 1.05 }}
              >
                Debasis Mahanto
              </motion.h4>
              <p className="text-xs text-blue-600 mt-1">SEO Analyst</p>
            </div>
          </motion.div>

          {/* Team Member 2 */}
          <motion.div
            className="flex items-center p-6 bg-white rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-yellow-400 hover:ring-2 hover:ring-yellow-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <motion.img
              src={tejender}
              className="w-24 h-24 rounded-full transform transition duration-300 hover:scale-110 hover:brightness-110"
              whileHover={{ scale: 1.1 }}
            />
            <div className="ml-6">
              <motion.h4
                className="text-gray-800 text-base font-semibold transition-colors duration-200 hover:text-yellow-500"
                whileHover={{ scale: 1.05 }}
              >
                Tejender Pal Singh
              </motion.h4>
              <p className="text-xs text-blue-600 mt-1">Web Developer</p>
            </div>
          </motion.div>

          {/* Team Member 3 */}
          <motion.div
            className="flex items-center p-6 bg-white rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-yellow-400 hover:ring-2 hover:ring-yellow-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.img
              src={sagar}
              className="w-24 h-24 rounded-full transform transition duration-300 hover:scale-110 hover:brightness-110"
              whileHover={{ scale: 1.1 }}
            />
            <div className="ml-6">
              <motion.h4
                className="text-gray-800 text-base font-semibold transition-colors duration-200 hover:text-yellow-500"
                whileHover={{ scale: 1.05 }}
              >
                Sagar Samal
              </motion.h4>
              <p className="text-xs text-blue-600 mt-1">Full Stack Developer</p>
            </div>
          </motion.div>

          {/* Team Member 4 */}
          <motion.div
            className="flex items-center p-6 bg-white rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-yellow-400 hover:ring-2 hover:ring-yellow-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.img
              src={dibya}
              className="w-24 h-24 rounded-full transform transition duration-300 hover:scale-110 hover:brightness-110"
              whileHover={{ scale: 1.1 }}
            />
            <div className="ml-6">
              <motion.h4
                className="text-gray-800 text-base font-semibold transition-colors duration-200 hover:text-yellow-500"
                whileHover={{ scale: 1.05 }}
              >
                Soumitree Jena
              </motion.h4>
              <p className="text-xs text-blue-600 mt-1">Full Stack Developer</p>
            </div>
          </motion.div>

          {/* Team Member 5 */}
          <motion.div
            className="flex items-center p-6 bg-white rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-yellow-400 hover:ring-2 hover:ring-yellow-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.img
              src={amlan}
              className="w-24 h-24 rounded-full transform transition duration-300 hover:scale-110 hover:brightness-110"
              whileHover={{ scale: 1.1 }}
            />
            <div className="ml-6">
              <motion.h4
                className="text-gray-800 text-base font-semibold transition-colors duration-200 hover:text-yellow-500"
                whileHover={{ scale: 1.05 }}
              >
                Manoj Kumar Roul
              </motion.h4>
              <p className="text-xs text-blue-600 mt-1">BDE</p>
            </div>
          </motion.div>

          {/* Team Member 6 */}
          <motion.div
            className="flex items-center p-6 bg-white rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:border-2 hover:border-yellow-400 hover:ring-2 hover:ring-yellow-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <motion.img
              src="https://readymadeui.com/team-6.webp"
              className="w-24 h-24 rounded-full transform transition duration-300 hover:scale-110 hover:brightness-110"
              whileHover={{ scale: 1.1 }}
            />
            <div className="ml-6">
              <motion.h4
                className="text-gray-800 text-base font-semibold transition-colors duration-200 hover:text-yellow-500"
                whileHover={{ scale: 1.05 }}
              >
                Prachi Mishra
              </motion.h4>
              <p className="text-xs text-blue-600 mt-1">Web Designer</p>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default OurTeam;
