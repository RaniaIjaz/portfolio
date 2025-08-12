import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import AchievementsSection from "./components/AchievementsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white dark:bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        {/* <AchievementsSection /> */}
        <AboutSection />
        <ProjectsSection />
        <Skills />
        <Experience />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

// "use client"
// import { useState } from 'react';
// import HeroSection from "./components/HeroSection";
// import Navbar from "./components/Navbar";
// import AboutSection from "./components/AboutSection";
// import ProjectsSection from "./components/ProjectsSection";
// import EmailSection from "./components/EmailSection";
// import Footer from "./components/Footer";
// import AchievementsSection from "./components/AchievementsSection";

// export default function Home() {
//   const [darkMode, setDarkMode] = useState(true);

//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };

//   return (
//     <main className={`flex min-h-screen flex-col ${darkMode ? 'dark-theme' : 'light-theme'}`} 
//           style={{ backgroundColor: 'var(--background)', color: 'var(--text)' }}>
//       <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
//       <div className="container mt-24 mx-auto px-12 py-4">
//         <HeroSection />
//         {/* <AchievementsSection /> */}
//         <AboutSection />
//         <ProjectsSection />
//         <EmailSection />
//       </div>
//       <Footer />
//     </main>
//   );
// }