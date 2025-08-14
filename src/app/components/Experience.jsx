// "use client";
// import React from "react";
// import { FaBriefcase } from "react-icons/fa";

// const experiences = [
//   {
//     role: "MERN Developer",
//     company: "Byte Scriptez",
//     period: "Jan 2025 – Present",
//     description:
//       "Working on modern web applications using the MERN stack, Next.js, Supabase, Firebase. Focused on responsive UI, API integration,backend development and performance optimization.",
//   },
//   {
//     role: "Software Engineer Intern",
//     company: "Fauji Fertilizer Company Limited",
//     period: "Aug 2024 – Sep 2024",
//     description:
//       "Learned agile methodologies, gained exposure to SAP systems, cybersecurity practices, and enterprise IT operations while contributing to front-end improvements",
//   },
//     {
//     role: "Web developer Intern",
//     company: "CodeSoft",
//     period: "April – May 2024",
//     description:
//       "Contributed to the development of responsive web applications, gaining hands-on experience with React.js.",
//   },
//   {
//     role: "Freelance Developer",
//     company: "Self-Employed",
//     period: "2023 – 2024",
//     description:
//       "Delivered custom websites and web apps for clients, specializing in React.js, Next.js, and Tailwind CSS.",
//   },
// ];

// const ExperienceSection = () => {
//   return (
//     <section id="experience" className="my-16 py-10">
//       <h2 className="text-3xl font-bold text-center mb-12 text-black dark:text-white">
//         Experience
//       </h2>
//       <div className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-6">
//         {experiences.map((exp, index) => (
//           <div
//             key={index}
//             className="mb-10 ml-4 group transition-all duration-300 hover:-translate-y-1"
//           >
//             {/* Dot */}
//             <span className="absolute -left-[9px] flex items-center justify-center w-5 h-5 bg-primary-500 rounded-full ring-4 ring-white dark:ring-[#18191E]">
//               <FaBriefcase size={10} className="text-white" />
//             </span>

//             {/* Card */}
//             <div className="bg-white dark:bg-[#18191E] p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 group-hover:shadow-lg">
//               <h3 className="text-lg font-semibold text-black dark:text-white">
//                 {exp.role}
//               </h3>
//               <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
//                 {exp.company}
//               </p>
//               <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">
//                 {exp.period}
//               </p>
//               <p className="text-sm text-gray-700 dark:text-[#ADB7BE]">
//                 {exp.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ExperienceSection;



"use client";
import React, { useState } from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    role: "MERN Developer",
    company: "Byte Scriptez",
    period: "Jan 2025 – Present",
    description:
      "Working on modern web applications using the MERN stack, Next.js, Supabase, and Firebase. Focused on responsive UI, API integration, backend development, and performance optimization.",
  },
  {
    role: "Software Engineer Intern",
    company: "Fauji Fertilizer Company Limited",
    period: "Aug 2024 – Sep 2024",
    description:
      "Learned agile methodologies, gained exposure to SAP systems, cybersecurity practices, and enterprise IT operations while contributing to front-end improvements.",
  },
  {
    role: "Web Developer Intern",
    company: "CodeSoft",
    period: "April – May 2024",
    description:
      "Contributed to the development of responsive web applications, gaining hands-on experience with React.js.",
  },
  {
    role: "Freelance Developer",
    company: "Self-Employed",
    period: "2023 – 2024",
    description:
      "Delivered custom websites and web apps for clients, specializing in React.js, Next.js, and Tailwind CSS.",
  },
];

const education = [
  {
    degree: "BS Computer Science",
    institution: "Khwaja Fareed University of Engineering and Information Technology (KFUEIT)",
    period: "2022 – 2026",
    description:"CGPA: 3.85",
   
  },
  {
    degree: "Intermediate (Pre-Medical)",
    institution: "Punjab College",
    period: "2018 – 2020",
    description:"Marks: 1020/1100"
  },
];

const TimelineCard = ({ icon, title, subtitle, period, description }) => (
  <div className="mb-10 ml-4 group transition-all duration-300 hover:-translate-y-1">
    {/* Dot */}
    <span className="absolute -left-[9px] flex items-center justify-center w-5 h-5 bg-primary-500 rounded-full ring-4 ring-white dark:ring-[#18191E]">
      {icon}
    </span>

    {/* Card */}
    <div className="bg-white dark:bg-[#18191E] p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700 transition-all duration-300 group-hover:shadow-lg">
      <h3 className="text-lg font-semibold text-black dark:text-white">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
        {subtitle}
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-500 mb-3">{period}</p>
      <p className="text-sm text-gray-700 dark:text-[#ADB7BE]">{description}</p>
    </div>
  </div>
);

const ExperienceEducationSection = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="experience-education" className="my-16 pt-10">
      <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-white">
        Experience & Education
      </h2>

      {/* Tabs */}
      <div className="flex justify-center mb-10">
        <button
          onClick={() => setActiveTab("experience")}
          className={`px-6 py-2 rounded-l-lg border ${
            activeTab === "experience"
              ? "bg-primary-500 text-white"
              : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          }`}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveTab("education")}
          className={`px-6 py-2 rounded-r-lg border ${
            activeTab === "education"
              ? "bg-primary-500 text-white"
              : "bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300"
          }`}
        >
          Education
        </button>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-gray-300 dark:border-gray-700 pl-6">
        {activeTab === "experience" &&
          experiences.map((exp, index) => (
            <TimelineCard
              key={index}
              icon={<FaBriefcase size={10} className="text-white" />}
              title={exp.role}
              subtitle={exp.company}
              period={exp.period}
              description={exp.description}
            />
          ))}

        {activeTab === "education" &&
          education.map((edu, index) => (
            <TimelineCard
              key={index}
              icon={<FaGraduationCap size={10} className="text-white" />}
              title={edu.degree}
              subtitle={edu.institution}
              period={edu.period}
              description={edu.description}
            />
          ))}
      </div>
    </section>
  );
};

export default ExperienceEducationSection;
