// "use client";
// import Link from "next/link";
// import React, { useState } from "react";
// import NavLink from "./NavLink";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
// import MenuOverlay from "./MenuOverlay";
// import ThemeToggle from './ThemeToggle'

// const navLinks = [
//   {
//     title: "About",
//     path: "#about",
//   },
//   {
//     title: "Projects",
//     path: "#projects",
//   },
//   {
//     title: "Contact",
//     path: "#contact",
//   },
// ];

// const Navbar = () => {
//   const [navbarOpen, setNavbarOpen] = useState(false);

//   return (
//     <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
//       <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
//         <Link
//           href={"/"}
//           className="text-2xl md:text-5xl text-white font-semibold"
//         >
          
//         </Link>

//         <div className="flex items-center space-x-4">
//             <ThemeToggle />
//           </div>
//         <div className="mobile-menu block md:hidden">
//           {!navbarOpen ? (
//             <button
//               onClick={() => setNavbarOpen(true)}
//               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
//             >
//               <Bars3Icon className="h-5 w-5" />
//             </button>
//           ) : (
//             <button
//               onClick={() => setNavbarOpen(false)}
//               className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
//             >
//               <XMarkIcon className="h-5 w-5" />
//             </button>
//           )}
//         </div>
//         <div className="menu hidden md:block md:w-auto" id="navbar">
//           <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
//             {navLinks.map((link, index) => (
//               <li key={index}>
//                 <NavLink href={link.path} title={link.title} />
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//       {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
//     </nav>
//   );
// };

// export default Navbar;



"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import ThemeToggle from './ThemeToggle'

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Skills",
    path:"#skills"
  },
  {
    title: "Experience & Education",
    path:"#experience-education"
  },
  {
    title: "Contact",
    path: "#contact",
  },
  
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    // <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">

     <nav className="fixed mx-auto border-b border-gray-200 dark:border-[#33353F] top-0 left-0 right-0 z-10 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-sm">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        {/* <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          
        </Link> */}

        <div className="flex items-center space-x-4">
            <ThemeToggle />
          </div>
        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
            //  className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            className="flex items-center px-3 py-2 border rounded border-gray-300 dark:border-slate-200 text-gray-600 dark:text-slate-200 hover:text-gray-900 dark:hover:text-white hover:border-gray-500 dark:hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
             // className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
             className="flex items-center px-3 py-2 border rounded border-gray-300 dark:border-slate-200 text-gray-600 dark:text-slate-200 hover:text-gray-900 dark:hover:text-white hover:border-gray-500 dark:hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
