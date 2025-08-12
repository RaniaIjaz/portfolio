// "use client";
// import React, { useState, useRef } from "react";
// import ProjectCard from "./ProjectCard";
// import ProjectTag from "./ProjectTag";
// import { motion, useInView } from "framer-motion";

// const projectsData = [
//   {
//     id: 1,
//     title: "React Portfolio Website",
//     description: "Project 1 description",
//     image: "/images/projects/1.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 2,
//     title: "Potography Portfolio Website",
//     description: "Project 2 description",
//     image: "/images/projects/2.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 3,
//     title: "E-commerce Application",
//     description: "Project 3 description",
//     image: "/images/projects/3.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 4,
//     title: "Food Ordering Application",
//     description: "Project 4 description",
//     image: "/images/projects/4.png",
//     tag: ["All", "Mobile"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 5,
//     title: "React Firebase Template",
//     description: "Authentication and CRUD operations",
//     image: "/images/projects/5.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
//   {
//     id: 6,
//     title: "Full-stack Roadmap",
//     description: "Project 5 description",
//     image: "/images/projects/6.png",
//     tag: ["All", "Web"],
//     gitUrl: "/",
//     previewUrl: "/",
//   },
// ];

// const ProjectsSection = () => {
//   const [tag, setTag] = useState("All");
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true });

//   const handleTagChange = (newTag) => {
//     setTag(newTag);
//   };

//   const filteredProjects = projectsData.filter((project) =>
//     project.tag.includes(tag)
//   );

//   const cardVariants = {
//     initial: { y: 50, opacity: 0 },
//     animate: { y: 0, opacity: 1 },
//   };

//   return (
//     <section id="projects">
//       <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
//         My Projects
//       </h2>
//       {/* <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
//         <ProjectTag
//           onClick={handleTagChange}
//           name="All"
//           isSelected={tag === "All"}
//         />
//         <ProjectTag
//           onClick={handleTagChange}
//           name="Web"
//           isSelected={tag === "Web"}
//         />
//         <ProjectTag
//           onClick={handleTagChange}
//           name="Mobile"
//           isSelected={tag === "Mobile"}
//         />
//       </div> */}
//       <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
//         {filteredProjects.map((project, index) => (
//           <motion.li
//             key={index}
//             variants={cardVariants}
//             initial="initial"
//             animate={isInView ? "animate" : "initial"}
//             transition={{ duration: 0.3, delay: index * 0.4 }}
//           >
//             <ProjectCard
//               key={project.id}
//               title={project.title}
//               description={project.description}
//               imgUrl={project.image}
//               gitUrl={project.gitUrl}
//               previewUrl={project.previewUrl}
//             />
//           </motion.li>
//         ))}
//       </ul>
//     </section>
//   );
// };

// export default ProjectsSection;





"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
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
    image: "/images/projects/carrer.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/RaniaIjaz/careerCraft",
    previewUrl: "https://career-craft-steel.vercel.app/",
    techStack: ["Next.js", "Tailwind Css","Prisma","MongoDb", "Clerk", "Gemini"]
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.01 });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    hiddenLeft: { x: -50, opacity: 0 },
    hiddenRight: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl font-bold text-black dark:text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      
      <div ref={ref} className="grid grid-cols-1 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div
              key={project.id}
              initial={isEven ? "hiddenLeft" : "hiddenRight"}
              animate={isInView ? "visible" : isEven ? "hiddenLeft" : "hiddenRight"}
              variants={cardVariants}
              className={`flex ${isEven ? "justify-start" : "justify-end"}`}
            >
              <div className="w-full ">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  imgUrl={project.image}
                  gitUrl={project.gitUrl}
                  previewUrl={project.previewUrl}
                  isReversed={index % 2 !== 0} 
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;