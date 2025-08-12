// import { CodeBracketIcon, ServerIcon, CpuChipIcon, PaintBrushIcon } from '@heroicons/react/24/outline';

// const skills = {
//   frontend: [
//     { name: 'HTML5', level: 95 },
//     { name: 'CSS3/Tailwind', level: 90 },
//     { name: 'JavaScript', level: 85 },
//     { name: 'React/Next.js', level: 85 },
//     { name: 'TypeScript', level: 80 },
//   ],
//   backend: [
//     { name: 'Node.js', level: 85 },
//     { name: 'Express', level: 80 },
//     { name: 'Python/Django', level: 75 },
//     { name: 'REST APIs', level: 85 },
//     { name: 'GraphQL', level: 70 },
//   ],
//   database: [
//     { name: 'MongoDB', level: 80 },
//     { name: 'PostgreSQL', level: 75 },
//     { name: 'Firebase', level: 70 },
//     { name: 'Redis', level: 65 },
//   ],
//   tools: [
//     { name: 'Git/GitHub', level: 85 },
//     { name: 'Docker', level: 70 },
//     { name: 'AWS', level: 65 },
//     { name: 'CI/CD', level: 75 },
//   ],
// };

// export default function SkillsSection() {
//   return (
//     <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-12">
//           <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
//             My Technical Skills
//           </h2>
//           <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">
//             Full stack capabilities for modern web development
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Frontend Skills */}
//           <SkillCategory
//             title="Frontend"
//             icon={<CodeBracketIcon className="h-6 w-6" />}
//             skills={skills.frontend}
//             color="from-purple-500 to-blue-500"
//           />

//           {/* Backend Skills */}
//           <SkillCategory
//             title="Backend"
//             icon={<ServerIcon className="h-6 w-6" />}
//             skills={skills.backend}
//             color="from-amber-500 to-red-500"
//           />

//           {/* Database Skills */}
//           <SkillCategory
//             title="Database"
//             icon={<CpuChipIcon className="h-6 w-6" />}
//             skills={skills.database}
//             color="from-emerald-500 to-teal-500"
//           />

//           {/* Tools */}
//           <SkillCategory
//             title="Dev Tools"
//             icon={<PaintBrushIcon className="h-6 w-6" />}
//             skills={skills.tools}
//             color="from-indigo-500 to-violet-500"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

// function SkillCategory({ title, icon, skills, color }) {
//   return (
//     <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
//       <div className="flex items-center mb-4">
//         <div className={`p-3 rounded-lg bg-gradient-to-r ${color}`}>
//           {icon}
//         </div>
//         <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
//           {title}
//         </h3>
//       </div>
//       <div className="space-y-4">
//         {skills.map((skill, index) => (
//           <div key={index}>
//             <div className="flex justify-between mb-1">
//               <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
//                 {skill.name}
//               </span>
//               <span className="text-xs text-gray-500 dark:text-gray-400">
//                 {skill.level}%
//               </span>
//             </div>
//             <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
//               <div
//                 className={`bg-gradient-to-r h-2 rounded-full ${color}`}
//                 style={{ width: `${skill.level}%` }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";
import { motion } from "framer-motion";
import {
  CodeBracketIcon,
  ServerIcon,
  CpuChipIcon,
  PaintBrushIcon,
  CloudIcon,
} from "@heroicons/react/24/outline";

const skills = {
  frontend: [
    { name: "HTML5", level: 98 },
    { name: "CSS/Tailwind", level: 98 },
    { name: "JavaScript", level: 98 },
    { name: "React/Next.js", level: 95 },
    { name: "Redux", level: 90 },
    { name: "Three.js", level: 85 },
    { name: "TypeScript", level: 80 },
  ],
  backend: [
    { name: "Node.js", level: 95 },
    { name: "Express", level: 95 },
    { name: "Authentication (JWT, OAuth)", level: 95 },
    { name: "REST APIs", level: 95 },
    { name: "GraphQL", level: 85 },
  ],
  database: [
    { name: "MongoDB", level: 98 },
    { name: "PostgreSQL", level: 95 },
    { name: "Firebase", level: 95 },
    { name: "MySQL", level: 95 },
  ],
  cloud: [
    { name: "Supabase", level: 97 },
    { name: "Firebase/Firestore", level: 95 },
    { name: "Prisma", level: 96 },
    { name: "Neon (Serverless PostgreSQL)", level: 95 }, 
    { name: "AI Integration", level: 95 },
  ],
  tools: [
    { name: "Git/GitHub", level: 95 },
    { name: "VS Code", level: 98 },
    { name: "Postman", level: 95 },
     { name: "Vercel/Netlify/Render", level: 90 },
    { name: "AWS", level: 80 },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const progressVariants = {
  hidden: { width: 0 },
  visible: (level) => ({
    width: `${level}%`,
    transition: { duration: 1, ease: "easeOut" },
  }),
};

export default function SkillsSection() {
     
  return (
    <section id="skills" className="py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            My Technical Skills
          </h2>
          <p className="mt-3 text-xl text-gray-600 dark:text-gray-300">
            Full stack capabilities for modern web development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <SkillCategory
            title="Frontend"
            icon={<CodeBracketIcon className="h-6 w-6" />}
            skills={skills.frontend}
            color="from-purple-500 to-blue-500"
          />

          <SkillCategory
            title="Backend"
            icon={<ServerIcon className="h-6 w-6" />}
            skills={skills.backend}
            color="from-amber-500 to-red-500"
          />

          <SkillCategory
            title="Database"
            icon={<CpuChipIcon className="h-6 w-6" />}
            skills={skills.database}
            color="from-emerald-500 to-teal-500"
          />

               <SkillCategory
            title="Cloud Services"
            icon={<CloudIcon className="h-6 w-6" />}
            skills={skills.cloud}
            color="from-cyan-500 to-blue-500"
          />
      
          <SkillCategory
            title="Dev Tools"
            icon={<PaintBrushIcon className="h-6 w-6" />}
            skills={skills.tools}
            color="from-indigo-500 to-violet-500"
          />
         
        </motion.div>
      </div>
    </section>
  );
}

function SkillCategory({ title, icon, skills, color }) {
  return (
    <motion.div
      variants={itemVariants}
      className="bg-gray-200 dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-r ${color}`}>{icon}</div>
        <h3 className="ml-3 text-lg font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {skill.name}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-gray-400 dark:bg-gray-700 rounded-full h-2">
              <motion.div
                custom={skill.level}
                variants={progressVariants}
                className={`bg-gradient-to-r h-2 rounded-full ${color}`}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
