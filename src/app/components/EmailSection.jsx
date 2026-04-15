
"use client";
import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";

const ContactSection = () => {
  const contacts = [
    {
      title: "Email",
      value: "raniaijaz1122@gmail.com",
      icon: <FaEnvelope size={28} />,
      link: "mailto:raniaijaz03@gmail.com",
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
      link: "https://www.linkedin.com/in/rania-ijaz",
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
