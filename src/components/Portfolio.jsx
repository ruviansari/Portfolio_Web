import React from "react";
import { motion } from "framer-motion";
// external CSS import

const projects = [
  {
    title: "Change Background color",
    desc: "MERN stack project with Rest API, ",
    link: "https://bg-changer-three-gamma.vercel.app/",
  },

   {
    title: "E-commerce Website",
    desc: "Product listing, cart and checkout UI (frontend).",
    link: "https://vite-project2-theta.vercel.app/",
  },

  {
    title: "ChatRoom App",
    desc: "MERN stack project By Using Api And  Select Country and Show Flags",
    link: "https://chat-application-nu-blush.vercel.app/",
  },

  {
    title: "Library Management System",
    desc: "MERN stack project with CRUD, authentication and role-based access.",
    link: "https://github.com/",
  },
  {
    title: "Notes App",
    desc: "Rich-text notes, tags, search and export to PDF.",
    link: "https://github.com/",
  },
 
  {
    title: "Property Management ",
    desc: "Product listing, cart and Pricing Rooms Image upload role based access (frontend).",
    link: "https://github.com/",
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio">
      <div className="container">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="header"
        >
          <motion.img
            src="/profile1.jpg"
            alt="Profile"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="profile-img"
          />

          <div className="text-center md:text-left">
            <motion.h1
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="intro h1"
            >
              Er.Rumana Ansari
            </motion.h1>
            <motion.p
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="intro p"
            >
              <b> Full-Stack Developer </b> MERN Node.JS
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-6 flex flex-wrap justify-center md:justify-start gap-4"
            >
              <a
                href="#projects"
                className="px-6 py-2 rounded-full bg-sky-600 text-white font-medium shadow hover:opacity-90 transition"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-6 py-2 rounded-full border border-sky-600 text-sky-600 font-medium hover:bg-sky-50 transition"
              >
                Contact Me
              </a>
            </motion.div>
          </div>
        </motion.header>
        {/* About */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card"
        >
          <h2 className="card h2">About Me</h2>
        <div className="text-slate-700 leading-relaxed">
  <h2 className="text-2xl font-bold text-slate-900 mb-2">
    Hi, I’m <span className="text-indigo-600">Er.Rumana Ansari</span>
  </h2>
  <p className="text-lg mb-4">
    A <span className="font-semibold text-indigo-600">Full-Stack Developer (MERN)</span> 
    passionate about crafting clean, scalable, and responsive web applications.
  </p>
  <p className="mb-4">
    With internship experience and multiple real-world projects, I continuously 
    refine my skills to deliver <span className="italic">professional, user-friendly, and impactful solutions.</span>
  </p>
  <p>
    ⚡ I love working with{" "}
    <strong>React.js, Tailwind CSS, Bootstrap, HTML5, CSS3</strong> on the frontend, 
    and <strong>Node.js, Express, MongoDB</strong> on the backend.  
  </p>
  <p className="mt-4 font-medium text-indigo-500">
    "Turning ideas into functional, scalable, and modern digital solutions."
  </p>
</div>

        </motion.section>
        {/* Projects */}
        <motion.section
          id="projects"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="projects">Selected Projects</h2>
          <div className="project-card">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="projects"
              >
                <h3 className="project-card h3">{p.title}</h3>
                <p className="project-card a:hover">{p.desc}</p>
                <a href={p.link} className="project-card a ">
                  Live Link
                </a>
              </motion.article>
            ))}
          </div>
        </motion.section>
        {/* Hobbis */}.
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card"
        >
          <h2 className="card h2">Hobbies</h2>

          <li>
            <ul>
              <strong> Coding & building web applications</strong>
            </ul>
          </li>
          <li>
            <ul>
              <strong>Exploring new technologies</strong>
            </ul>
          </li>
          <li>
            <ul>
              <strong>Reading tech blogs & case studies</strong>
            </ul>
          </li>

          <li>
            <ul>
              <strong>Designing UI/UX layouts</strong>
            </ul>
          </li>

          <li>
            <ul>
              <strong>Playing badminton</strong>
            </ul>
          </li>
        </motion.section>
        {/* //Strengths / */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card"
        >
          <h2 className="card h2">Strengths</h2>

          <li>
            <ul>
              <strong> Strong problem-solving skills</strong>
            </ul>
          </li>
          <li>
            <ul>
              <strong>Quick learner & adaptive to new technologies</strong>
            </ul>
          </li>
          <li>
            <ul>
              <strong>Teamwork and leadership abilities</strong>
            </ul>
          </li>

          <li>
            <ul>
              <strong>Good communication skills</strong>
            </ul>
          </li>

          <li>
            <ul>
              <strong>Consistency & dedication towards work</strong>
            </ul>
          </li>
        </motion.section>
        {/* work experience */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card"
        >
          <h2 className="card h2">Work Experience </h2>

          <li>
            <ul>
              6 Months Internship <strong>(Aug 2024 – Jan 2025) </strong>{" "}
              Learned and applied <strong>MERN stack development </strong>
              Worked on CRUD operations, authentication, and role-based access
              projects
            </ul>
          </li>

          <li>
            <ul>
              3 Months Internship <strong>(April 2025 – Jul 2025) </strong>
              Worked on frontend Tailwind css React improvements Implemented
              responsive and mobile-friendly designs Enhanced API integration &
              error handling
            </ul>
          </li>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card"
        >
          <h2 className="">Contact</h2>

          <ul>
            <li>
              📧 <strong> Email:-</strong> ruviansari144@gmail.com
            </li>
          </ul>

          <ul>
            <li>
              <strong>📱 Phone:- </strong> +91-9305988767
            </li>
          </ul>

          <ul>
            <li>
              {" "}
              <strong>📍 Address:- </strong> Talgram, Kannauj, Uttar Pradesh,
              India
            </li>
          </ul>

          <ul>
            <li>
              <strong>💼 LinkedIn:- </strong> linkedin.com/in/rumana-ansari
            </li>
          </ul>

          <ul>
            <li>
              <strong>🌐 Portfolio Website:- </strong>yourname.github.io
            </li>
          </ul>
        </motion.section>
        {/* Contact */}
        <motion.section
          id="contact"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="card"
        >
          <h2 className="card h2">Get in Touch</h2>
          <p className="btn.primary:hover">
            Email me at <strong>ruviansari144@gmail.com</strong> or send me a
            quick message below:
          </p>
          <form className="form">
            <input type="text" placeholder="Your name" className="form input" />
            <input
              type="email"
              placeholder="Your email"
              className="form input:focus"
            />
            <textarea
              placeholder="Message"
              className="form input:focus form textarea:focus"
              rows={5}
            ></textarea>
            <button type="submit" className="form button form button:hover ">
              Send Message
            </button>
          </form>
        </motion.section>
      </div>
    </div>
  );
}
