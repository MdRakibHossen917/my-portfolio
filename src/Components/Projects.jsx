import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";

// Project Images
import dashboardImg1 from "../assets/Dashboard.JPG";
import dashboardImg2 from "../assets/Dashboard1.JPG";
import dashboardImg3 from "../assets/Dashboard2.JPG";
import portfolioImg1 from "../assets/portfolio.JPG";
import portfolioImg2 from "../assets/portfolio1.JPG";
import gojoyImg1 from "../assets/Gojoy.JPG";
import gojoyImg2 from "../assets/Gojoy2.JPG";
import express1 from "../assets/delivery-1.JPG";
import express2 from "../assets/delivery-2.JPG";
import express3 from "../assets/delivery-3.JPG";
import express4 from "../assets/delivery-4.JPG";
import agro1 from "../assets/agro/agro1.png";
import agro2 from "../assets/agro/agro2.png";
import agro3 from "../assets/agro/agro3.png";
import agro4 from "../assets/agro/agro4.png";
import agro5 from "../assets/agro/agro5.png";
import lifeImg1 from "../assets/lifeNest/life1.png";
import lifeImg2 from "../assets/lifeNest/life2.png";
import lifeImg3 from "../assets/lifeNest/life3.png";
import lifeImg4 from "../assets/lifeNest/life4.png";
import lifeImg5 from "../assets/lifeNest/life5.png";
import airbnbImg1 from "../assets/airbnb/airbnbImg1.png";
import airbnbImg2 from "../assets/airbnb/airbnbImg2.png";
import airbnbImg3 from "../assets/airbnb/airbnbImg3.png";

const projectsData = [
  {
    id: "project1",
    name: "Analytics Dashboard",
    images: [dashboardImg1, dashboardImg2, dashboardImg3],
    des: "A dynamic data visualization dashboard featuring interactive charts and graphs for real-time insights, analysis, and user-friendly decision-making experience.",
    icons: [FaReact, SiJavascript, SiMongodb],
    liveLink: "https://example.com/project1",
    githubClient: "https://github.com/username/project1-client",
    category: "fullstack",
  },
  {
    id: "project2",
    name: "Delivery Express Application",
    images: [express1, express2, express3, express4],
    des: "A user-friendly interface where customers can register, log in, send parcels, and track them using a tracking ID. Admins assign riders, riders update delivery status, and their earnings are managed via a wallet system. The UI is intuitive and responsive for smooth courier management.",
    icons: [FaReact, SiJavascript, SiTailwindcss],
    liveLink: "https://express-delivery-9e788.web.app/",
    githubClient:
      "https://github.com/MdRakibHossen917/courier-and-parcel-management-system-client",
    category: "fullstack",
  },
  {
    id: "project3",
    name: "GoJoy Booking Website",
    images: [gojoyImg1, gojoyImg2],
    des: "GoJoy is a seamless tour package booking website offering secure, fast, and user-friendly travel planning for unforgettable journeys worldwide.",
    icons: [FaNodeJs, SiJavascript, SiExpress],
    liveLink: "https://gojoy-auth.web.app/",
    githubClient: "https://github.com/MdRakibHossen917/Gojoy_Traveller",
    category: "backend",
  },
  {
    id: "project4",
    name: "Portfolio Website",
    images: [portfolioImg1, portfolioImg2],
    des: "A modern, responsive portfolio website showcasing skills, projects, and experience to highlight expertise and attract potential clients or employers.",
    icons: [FaReact, SiTailwindcss],
    liveLink: "https://my-portfolio-dd98e.web.app/",
    githubClient: "https://github.com/MdRakibHossen917/my-portfolio",
    category: "frontend",
  },
  {
    id: "project5",
    name: "Agro-vet Website",
    images: [agro1, agro2, agro3, agro4, agro5],
    des: "Agro-Vet is a responsive veterinary and agricultural product platform designed for farmers and livestock caretakers. Built with Next.js and Tailwind CSS, it offers product listings, veterinary services, and educational resources.",
    icons: [FaReact, SiTailwindcss, SiNextdotjs],
    liveLink: "https://agro-vet.vercel.app/",
    githubClient: "https://github.com/MdRakibHossen917/agro-vet",
    category: "frontend",
  },
  {
    id: "project6",
    name: "Life Nest Insurance Company",
    images: [lifeImg1, lifeImg2, lifeImg3, lifeImg4, lifeImg5],
    des: "A full-stack Life Insurance Management Platform built with the MERN stack, featuring authentication, role-based dashboards (Admin, Agent, Customer), dynamic policy and blog systems, secure payment integration, and modern UI/UX.",
    icons: [FaReact, SiTailwindcss, SiNextdotjs],
    liveLink: "https://life-nest-insurance.web.app/",
    githubClient:
      "https://github.com/MdRakibHossen917/life-nest-insurance-company-client",
    category: "fullstack",
  },
  {
    id: "project7",
    name: "Airbnb Clone",
    images: [airbnbImg1, airbnbImg2, airbnbImg3],
    des: "A fully responsive Airbnb clone built with React, TailwindCSS, and Next.js featuring property listings, search functionality, and booking system.",
    icons: [SiNextdotjs,SiTypescript, SiTailwindcss ],
    liveLink: "https://airbnb-eta-henna.vercel.app/",
    githubClient: "https://github.com/MdRakibHossen917/airbnb",
    category: "fullstack",
  },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <section
      id="projects"
      className="mt-24 mb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
        >
          My <span className="text-blue-600 dark:text-blue-400">Projects</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          A showcase of some of my recent works.
        </motion.p>
      </div>

      {/* Tabs */}
      <motion.div
        className="flex justify-center mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="inline-flex rounded-md shadow-sm bg-gray-100 dark:bg-gray-800 p-1">
          {["all", "frontend", "backend", "fullstack"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                activeTab === tab
                  ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-blue-400 shadow"
                  : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              aria-label={`Filter projects by ${tab}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="flex flex-wrap gap-8 justify-center">
        {filteredProjects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="w-full sm:w-[48%] lg:w-[32%] xl:w-[30%] 2xl:w-[28%] bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700 group"
          >
            <div className="relative h-48 overflow-hidden group-hover:scale-105 transition-transform duration-300">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
                interval={3000}
                className="h-full"
                swipeable
                emulateTouch
                dynamicHeight={false}
                lazyLoad
              >
                {project.images.map((img, idx) => (
                  <div key={idx} className="h-48">
                    <img
                      src={img}
                      alt={`${project.name} Screenshot ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </Carousel>
            </div>

            <div className="p-5 space-y-4 min-h-[200px] flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-800 dark:text-white">
                    {project.name}
                  </h3>
                  <div className="flex space-x-2">
                    {project.icons.map((Icon, idx) => (
                      <Icon key={idx} className="text-xl text-blue-500" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  {project.des}
                </p>
              </div>

              <div className="flex space-x-3 mt-4">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
                >
                  <FiExternalLink className="mr-1" /> Live
                </a>
                <a
                  href={project.githubClient}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 text-sm bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600 text-white rounded-md transition-colors"
                >
                  <FiGithub className="mr-1" /> Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
