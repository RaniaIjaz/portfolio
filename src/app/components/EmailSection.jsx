// "use client";
// import React, { useState } from "react";
// import GithubIcon from "../../../public/github-icon.svg";
// import LinkedinIcon from "../../../public/linkedin-icon.svg";
// import Link from "next/link";
// import Image from "next/image";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// const EmailSection = () => {
//   const [emailSubmitted, setEmailSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const data = {
//       email: e.target.email.value,
//       subject: e.target.subject.value,
//       message: e.target.message.value,
//     };
//     const JSONdata = JSON.stringify(data);
//     const endpoint = "/api/send";

//     // Form the request for sending data to the server.
//     const options = {
//       // The method is POST because we are sending data.
//       method: "POST",
//       // Tell the server we're sending JSON.
//       headers: {
//         "Content-Type": "application/json",
//       },
//       // Body of the request is the JSON data we created above.
//       body: JSONdata,
//     };

//     const response = await fetch(endpoint, options);
//     const resData = await response.json();

//     if (response.status === 200) {
//       console.log("Message sent.");
//       setEmailSubmitted(true);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="grid  md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
//     >
//       <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
//       <div className="z-0">
//         <h5 className="text-xl font-bold text-black dark:text-white my-2">
//           Let&apos;s Connect
//         </h5>
//         <p className="text-gray-700 dark:text-[#ADB7BE] mb-4 max-w-md">
//           {" "}
//           I&apos;m currently looking for new opportunities, my inbox is always
//           open. Whether you have a question or just want to say hi, I&apos;ll
//           try my best to get back to you!
//         </p>
//         <div className="socials flex flex-row gap-2">
//           <Link href="github.com">
//             <Image src={GithubIcon} alt="Github Icon" />
//           </Link>
//           <Link href="linkedin.com">
//             <Image src={LinkedinIcon} alt="Linkedin Icon" />
//           </Link>
//         </div>
//       </div>
//       <div>
//         {emailSubmitted ? (
//           <p className="text-green-500 text-sm mt-2">
//             Email sent successfully!
//           </p>
//         ) : (
//           <form className="flex flex-col" onSubmit={handleSubmit}>
//             <div className="mb-6">
//               <label
//                 htmlFor="email"
//                 className="text-white block mb-2 text-sm font-medium"
//               >
//                 Your email
//               </label>
//               <input
//                 name="email"
//                 type="email"
//                 id="email"
//                 required
//                 className="bg-gray-200 dark:bg-[#18191E] border dark:border-[#33353F] placeholder-gray-500 dark:placeholder-[#9CA2A9] text-black dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="user@google.com"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="subject"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Subject
//               </label>
//               <input
//                 name="subject"
//                 type="text"
//                 id="subject"
//                 required
//                 className="bg-gray-200 dark:bg-[#18191E] border dark:border-[#33353F] placeholder-gray-500 dark:placeholder-[#9CA2A9] text-black dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Just saying hi"
//               />
//             </div>
//             <div className="mb-6">
//               <label
//                 htmlFor="message"
//                 className="text-white block text-sm mb-2 font-medium"
//               >
//                 Message
//               </label>
//               <textarea
//                 name="message"
//                 id="message"
//                 className="bg-gray-200 dark:bg-[#18191E] border dark:border-[#33353F] placeholder-gray-500 dark:placeholder-[#9CA2A9] text-black dark:text-gray-100 text-sm rounded-lg block w-full p-2.5"
//                 placeholder="Let's talk about..."
//               />
//             </div>
//             <button
//               type="submit"
//               className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
//             >
//               Send Message
//             </button>
//           </form>
//         )}
//       </div>
//     </section>
//   );
// };

// export default EmailSection;



"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactSection = () => {
  const contacts = [
    {
      title: "Email",
      value: "raniaijaz1122@gmail.com",
      icon: <FaEnvelope size={28} />,
      link: "mailto:raniaijaz1122@gmail.com",
    },
    {
      title: "Phone",
      value: "+92 313 6111274",
      icon: <FaPhone size={28} />,
      link: "tel:+923136111274",
    },
    {
      title: "GitHub",
      value: "github.com/RaniaIjaz",
      icon: <FaGithub size={28} />,
      link: "https://github.com/RaniaIjaz",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/RaniaIjaz",
      icon: <FaLinkedin size={28} />,
      link: "https://www.linkedin.com/in/rania-ijaz-0a9781283/",
    },
  ];

  return (
    <section id="contact" className="my-16 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-black dark:text-white">
        Let&apos;s Connect
      </h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {contacts.map((contact, index) => (
          <a
            key={index}
            href={contact.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white dark:bg-[#18191E] border border-gray-200 dark:border-[#33353F] p-6 rounded-xl shadow-md flex flex-col items-center justify-center gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="text-primary-500">{contact.icon}</div>
            <h3 className="text-lg font-semibold text-black dark:text-white">
              {contact.title}
            </h3>
            <p className="text-sm text-gray-700 dark:text-[#ADB7BE] text-center break-words">
              {contact.value}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
