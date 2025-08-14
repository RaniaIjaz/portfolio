


// "use client";
// import { motion } from "framer-motion";
// import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

// const fadeInVariant = (direction) => ({
//   hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
//   visible: {
//     opacity: 1,
//     x: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// });

// const ProjectsSection = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "Food Delivery Website",
//       description:
//         "A full-stack MERN application with an intuitive UI for browsing menus, adding items to a cart, placing orders, and making secure payments via Stripe. Includes a robust admin panel for managing menu items, tracking orders, and updating delivery statuses in real time.",
//       image: "/images/projects/food.png",
//       techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe"],
//       gitUrl: "https://github.com/RaniaIjaz/Food-Dilevery-app",
//       previewUrl: "https://food-dilevery-app-frontend.onrender.com/",
//     },
//     {
//       id: 2,
//       title: "5Crest",
//       description:
//         "5Crest is a modern platform that connects businesses with top-tier offshore professionals quickly and cost-effectively.",
//       image: "/images/projects/5crest.png",
//       techStack: ["Next.js", "Tailwind Css", "Firebase", "Firestore"],
//       gitUrl: "/",
//       previewUrl: "https://www.5crest.com/",
//     },
//     {
//       id: 3,
//       title: "Career Craft",
//       description:
//         "Career Craft is an AI-driven tool designed to help professionals and job seekers streamline their career growth.",
//       image: "/images/projects/carrer.png",
//       techStack: ["Next.js", "Tailwind Css", "Prisma", "MongoDb", "Clerk", "Gemini"],
//       gitUrl: "https://github.com/RaniaIjaz/careerCraft",
//       previewUrl: "https://career-craft-steel.vercel.app/",
//     },
//   ];

//   return (
//     <section className="py-20 px-4 sm:px-6 lg:px-12 relative">
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true }}
//         transition={{ duration: 0.6 }}
//         className="text-4xl sm:text-5xl font-bold text-center mb-16 dark:text-white"
//       >
//         My Projects
//       </motion.h2>

//       <div className="flex flex-col gap-20">
//         {projects.map((project, index) => {
//           const isEven = index % 2 === 0;
//           return (
//             <div
//               key={project.id}
//               className={`grid grid-cols-1 md:grid-cols-2 items-center gap-10 ${
//                 isEven ? "" : "md:grid-flow-col-dense"
//               }`}
//             >
//               {/* Image */}
//               <motion.div
//                 variants={fadeInVariant(isEven ? "left" : "right")}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.3 }}
//                 className="relative overflow-hidden rounded-2xl shadow-lg group"
//               >
//                 <motion.img
//                   whileHover={{ scale: 1.05 }}
//                   transition={{ duration: 0.4 }}
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-72 object-cover rounded-2xl"
//                 />
//                 {/* Overlay Icons */}
//                 <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 transition-opacity">
//                   <a
//                     href={project.gitUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 bg-white rounded-full hover:bg-gray-200 transition"
//                   >
//                     <CodeBracketIcon className="h-6 w-6 text-gray-800" />
//                   </a>
//                   <a
//                     href={project.previewUrl}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="p-3 bg-white rounded-full hover:bg-gray-200 transition"
//                   >
//                     <EyeIcon className="h-6 w-6 text-gray-800" />
//                   </a>
//                 </div>
//               </motion.div>

//               {/* Text Content */}
//               <motion.div
//                 variants={fadeInVariant(isEven ? "right" : "left")}
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.3 }}
//                 className="flex flex-col"
//               >
//                 <h3 className="text-2xl font-semibold mb-3 dark:text-white">
//                   {project.title}
//                 </h3>
//                 <p className="text-gray-700 dark:text-gray-300 mb-5">
//                   {project.description}
//                 </p>

//                 {/* Tech Stack */}
//                 <div className="flex flex-wrap gap-2">
//                   {project.techStack.map((tech, i) => (
//                     <span
//                       key={i}
//                       className="text-xs px-2 py-1 bg-gray-200/60 dark:bg-neutral-800/70 rounded-full text-gray-700 dark:text-gray-300"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </motion.div>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;


"use client";
import { motion } from "framer-motion";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";

const fadeInVariant = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -100 : 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
});

const ProjectsSection = () => {
  const projects = [
  {
    id: 1,
    title: "Food Delivery Website",
    description: " A full-stack MERN application with an intuitive UI for browsing menus, adding items to a cart, placing orders, and making secure payments via Stripe. Includes a robust admin panel for managing menu items, tracking orders, and updating delivery statuses in real time. Designed for responsiveness and smooth user experience across devices.",
    image: "/images/projects/food.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RaniaIjaz/Food-Dilevery-app",
    previewUrl: "https://food-dilevery-app-frontend.onrender.com/",
    techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe"]
  },
  {
    id: 2,
    title: "5Crest",
    description: "5Crest is a modern platform that connects businesses with top-tier offshore professionals quickly and cost-effectively. It streamlines hiring, reduces expenses, and offers access to a diverse talent pool, enabling companies to boost productivity and maintain a competitive edge.",
    image: "/images/projects/5crest.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.5crest.com/",
    techStack: ["Next.js", "Tailwind Css", "Firebase", "Firestore"]
  },
  {
    id: 3,
    title: "Career Craft",
    description: "Career Craft is an AI-driven tool designed to help professionals and job seekers streamline their career growth. The platform enables users to create tailored resumes, generate compelling cover letters, and gain valuable industrial insights effortlessly. Leveraging the power of AI, Career Craft ensures personalized and professional outputs, making the job application process faster and more effective.",
    image: "/images/projects/career.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RaniaIjaz/careerCraft",
    previewUrl: "https://career-craft-steel.vercel.app/",
    techStack: ["Next.js", "Tailwind Css","Prisma","MongoDb", "Clerk", "Gemini"]
  },
  ];

  return (
    <section className="pb-20 xl:px-8 max-w-7xl mx-auto ">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-16 dark:text-white"
      >
        My Projects
      </motion.h2>

      <div className="flex flex-col gap-20">
        {projects.map((project, index) => {
          const isEven = index % 2 === 0;
          return (
            <div
              key={project.id}
              className="grid grid-cols-1 md:grid-cols-2 items-center gap-10"
            >
              {/* Image - Order changes based on index */}
              <motion.div
                variants={fadeInVariant(isEven ? "left" : "right")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`relative overflow-hidden rounded-2xl shadow-lg group ${
                  isEven ? "md:order-1" : "md:order-2"
                }`}
              >
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-72 border-black shadow-xl  object-cover rounded-2xl"
                />
                {/* Overlay Icons */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-6 transition-opacity duration-300">
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    <CodeBracketIcon className="h-6 w-6 text-gray-800" />
                  </a>
                  <a
                    href={project.previewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-full hover:bg-gray-200 transition-colors duration-200"
                  >
                    <EyeIcon className="h-6 w-6 text-gray-800" />
                  </a>
                </div>
              </motion.div>

              {/* Text Content - Order changes based on index */}
              <motion.div
                variants={fadeInVariant(isEven ? "right" : "left")}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className={`flex flex-col ${
                  isEven ? "md:order-2" : "md:order-1"
                }`}
              >
                <h3 className="text-2xl font-semibold mb-3 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-5 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-200/60 dark:bg-neutral-800/70 rounded-full text-gray-700 dark:text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;



// "use client";
// import React, { useState, useRef } from "react";
// import ProjectCard from "./ProjectCard";
// import ProjectTag from "./ProjectTag";
// import { motion, useInView } from "framer-motion";

// const projectsData = [
  // {
  //   id: 1,
  //   title: "Food Delivery Website",
  //   description: " A full-stack MERN application with an intuitive UI for browsing menus, adding items to a cart, placing orders, and making secure payments via Stripe. Includes a robust admin panel for managing menu items, tracking orders, and updating delivery statuses in real time. Designed for responsiveness and smooth user experience across devices.",
  //   image: "/images/projects/food.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/RaniaIjaz/Food-Dilevery-app",
  //   previewUrl: "https://food-dilevery-app-frontend.onrender.com/",
  //   techStack: ["MongoDB", "Express.js", "React.js", "Node.js", "Stripe"]
  // },
  // {
  //   id: 2,
  //   title: "5Crest",
  //   description: "5Crest is a modern platform that connects businesses with top-tier offshore professionals quickly and cost-effectively. It streamlines hiring, reduces expenses, and offers access to a diverse talent pool, enabling companies to boost productivity and maintain a competitive edge.",
  //   image: "/images/projects/5crest.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "https://www.5crest.com/",
  //   techStack: ["Next.js", "Tailwind Css", "Firebase", "Firestore"]
  // },
  // {
  //   id: 3,
  //   title: "Career Craft",
  //   description: "Career Craft is an AI-driven tool designed to help professionals and job seekers streamline their career growth. The platform enables users to create tailored resumes, generate compelling cover letters, and gain valuable industrial insights effortlessly. Leveraging the power of AI, Career Craft ensures personalized and professional outputs, making the job application process faster and more effective.",
  //   image: "/images/projects/carrer.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/RaniaIjaz/careerCraft",
  //   previewUrl: "https://career-craft-steel.vercel.app/",
  //   techStack: ["Next.js", "Tailwind Css","Prisma","MongoDb", "Clerk", "Gemini"]
  // },

// ];

// const ProjectsSection = () => {
//   const [tag, setTag] = useState("All");
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: false, amount: 0.01 });

//   const handleTagChange = (newTag) => {
//     setTag(newTag);
//   };

//   const filteredProjects = projectsData.filter((project) =>
//     project.tag.includes(tag)
//   );

//   const cardVariants = {
//     hiddenLeft: { x: -50, opacity: 0 },
//     hiddenRight: { x: 50, opacity: 0 },
//     visible: {
//       x: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 15,
//         duration: 0.5
//       }
//     }
//   };

//   return (
//     <section id="projects" className="xl:pt-4 xl:pb-16 xl:px-8 max-w-7xl mx-auto">
//       <h2 className="text-center text-4xl font-bold text-black dark:text-white mt-4 mb-8 md:mb-12">
//         My Projects
//       </h2>
      
//       <div ref={ref} className="grid grid-cols-1 gap-8 md:gap-12">
//         {filteredProjects.map((project, index) => {
//           const isEven = index % 2 === 0;
          
//           return (
//             <motion.div
//               key={project.id}
//               initial={isEven ? "hiddenLeft" : "hiddenRight"}
//               animate={isInView ? "visible" : isEven ? "hiddenLeft" : "hiddenRight"}
//               variants={cardVariants}
//               className={`flex ${isEven ? "justify-start" : "justify-end"}`}
//             >
//               <div className="w-full ">
//                 <ProjectCard
//                   title={project.title}
//                   description={project.description}
//                   techStack={project.techStack}
//                   imgUrl={project.image}
//                   gitUrl={project.gitUrl}
//                   previewUrl={project.previewUrl}
//                   isReversed={index % 2 !== 0} 
//                 />
//               </div>
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;