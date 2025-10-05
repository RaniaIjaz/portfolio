// "use client";
// import React, { useTransition, useState } from "react";
// import Image from "next/image";
// import TabButton from "./TabButton";


// const TAB_DATA = [
//   {
//     title: "Skills",
//     id: "skills",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>Node.js</li>
//         <li>Express</li>
//         <li>PostgreSQL</li>
//         <li>Sequelize</li>
//         <li>JavaScript</li>
//         <li>React</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Education",
//     id: "education",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>Fullstack Academy of Code</li>
//         <li>University of California, Santa Cruz</li>
//       </ul>
//     ),
//   },
//   {
//     title: "Certifications",
//     id: "certifications",
//     content: (
//       <ul className="list-disc pl-2">
//         <li>AWS Cloud Practitioner</li>
//         <li>Google Professional Cloud Developer</li>
//       </ul>
//     ),
//   },
// ];

// const AboutSection = () => {


//   return (
//     <section className="text-gray-800 dark:text-white" id="about">
//       <div className="justify-center items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      
//         <div className="mt-4 md:mt-0 justify-center items-center text-left flex flex-col h-full">
//           <h2 className="text-4xl  font-bold justify-center items-center text-black dark:text-white mb-4">About Me</h2>
//           <p className="text-base justify-center items-center  text-black dark:text-white lg:text-lg">
//             I am a full stack web developer with a passion for creating
//             interactive and responsive web applications. I have experience
//             working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
//             Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
//             looking to expand my knowledge and skill set. I am a team player and
//             I am excited to work with others to create amazing applications.
//           </p>
          
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;



"use client";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#121212]">
      <div className="container mx-auto md:px-6 lg:px-16 text-center">
        
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-5xl font-bold text-center mb-8 dark:text-white"
        >
          About Me
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl  sm:mx-auto text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
        >
          {/* I am a full stack web developer with a passion for creating
          interactive and responsive web applications. I have experience
          working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
          MongoDb, Next.js, Supabase, Firebase, HTML, CSS, and Git. I am a quick learner and I am always
          looking to expand my knowledge and skill set. I am a team player and
          I am excited to work with others to create amazing applications. */}
          Full Stack Web Developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, MongoDB, Next.js, Supabase, Firebase, WordPress (themes & plugins), HTML, CSS, and Git. I am a quick learner, always eager to expand my knowledge and skill set. I am a strong team player and excited to collaborate with others to build innovative and user-friendly applications.
        </motion.p>

      </div>
    </section>
  );
};

export default AboutSection;
