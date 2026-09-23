

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
          Full Stack Web Developer with a passion for creating interactive and responsive web applications. I have experience working with JavaScript, TypeScript, React, Redux, Node.js, Express, PostgreSQL, MongoDB, Next.js, Supabase, Firebase, WordPress (themes & plugins), HTML, CSS, and Git. I am a quick learner, always eager to expand my knowledge and skill set. I am a strong team player and excited to collaborate with others to build innovative and user-friendly applications.
        </motion.p>

      </div>
    </section>
  );
};

export default AboutSection;
