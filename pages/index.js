"use client"

import { useState, useEffect } from "react"
import Head from "next/head"
import { motion } from "framer-motion"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import ProjectCard from "../components/ProjectCard"
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa"
import {
  SiMaterialui,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiPhp,
  SiMysql,
  SiFigma,
  SiAdobephotoshop,
  SiAdobeillustrator,
} from "react-icons/si"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const projects = [
    {
      id: 1,
      title: "Property Management System",
      description: "A comprehensive system for managing properties, tenants, and maintenance requests.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      image: "/images/property-management.jpg",
    },
    {
      id: 2,
      title: "Tender Management System",
      description: "Platform for managing the complete tender lifecycle from announcement to award.",
      technologies: ["MERN Stack", "Material UI", "Redux"],
      image: "/images/tender-management.jpg",
    },
    {
      id: 3,
      title: "Medical Practice Application",
      description:
        "Full-stack web application for a medical practice with appointment scheduling and patient management.",
      technologies: ["React", "Node.js", "MySQL", "Express"],
      image: "/images/medical-app.jpg",
    },
  ]

  const skills = [
    { name: "React", icon: <SiReact className="text-blue-500" size={40} /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-600" size={40} /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" size={40} /> },
    { name: "Express", icon: <SiExpress className="text-gray-700" size={40} /> },
    { name: "PHP", icon: <SiPhp className="text-purple-600" size={40} /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-800" size={40} /> },
    { name: "Material UI", icon: <SiMaterialui className="text-blue-600" size={40} /> },
    { name: "Figma", icon: <SiFigma className="text-purple-500" size={40} /> },
    { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-900" size={40} /> },
    { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-600" size={40} /> },
  ]

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Head>
        <title>Zerihun Kibret | Full-Stack Developer</title>
        <meta
          name="description"
          content="Full-Stack Developer with expertise in MERN stack, PHP, MySQL, and UI/UX design"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center justify-between py-16 min-h-[80vh]">
          <motion.div
            className="md:w-1/2 mb-8 md:mb-0"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={fadeIn}
          >
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
              variants={fadeIn}
            >
              Zerihun Kibret
            </motion.h1>
            <motion.h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300" variants={fadeIn}>
              Full-Stack Developer
            </motion.h2>
            <motion.p className="text-lg text-gray-400 mb-8 leading-relaxed" variants={fadeIn}>
              With 3+ years of experience in MERN stack, PHP, and MySQL, alongside over 5 years in graphic and UI
              design, I bring a strong blend of technical and creative expertise to create robust, user-friendly
              applications.
            </motion.p>
            <motion.div className="flex space-x-4" variants={fadeIn}>
              <a
                href="mailto:zeruhabesha09@gmail.com"
                className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="tel:+0935964964"
                className="p-3 bg-green-600 hover:bg-green-700 rounded-full transition-all duration-300"
              >
                <FaPhone size={24} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-700 hover:bg-gray-800 rounded-full transition-all duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-blue-800 hover:bg-blue-900 rounded-full transition-all duration-300"
              >
                <FaLinkedin size={24} />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg shadow-blue-500/30">
              <img
                src="/placeholder.svg?height=320&width=320"
                alt="Zerihun Kibret"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <motion.section
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
          <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              At Beta Tech Hub, I developed a Property Management System, Tender Management System, and a full-stack web
              application for a medical practice, gaining hands-on experience in front- and back-end development.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I am skilled in MaterialUI and CoreUI, allowing me to craft user-friendly and visually appealing
              interfaces aligned with modern design standards.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My background in graphic design and UI/UX with tools like Figma, Photoshop, and Illustrator further
              enables me to deliver cohesive, engaging applications that meet user expectations.
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
          <motion.div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2"
                variants={fadeIn}
              >
                {skill.icon}
                <span className="mt-3 text-center">{skill.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </motion.section>

        {/* Contact Section */}
        <motion.section
          className="py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
          <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaEnvelope className="mr-3 text-blue-500" />
                    <a href="mailto:zeruhabesha09@gmail.com" className="hover:text-blue-400 transition-colors">
                      zeruhabesha09@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="mr-3 text-green-500" />
                    <a href="tel:+0935964964" className="hover:text-green-400 transition-colors">
                      0935964964
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  )
}

