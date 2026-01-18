import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/80">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-gray-900 dark:text-white">
              Portfolio
            </div>
            <div className="hidden space-x-8 md:flex">
              <a
                href="#home"
                className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex min-h-screen items-center justify-center px-6 pt-20"
      >
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 inline-block rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 p-1">
            <div className="h-32 w-32 rounded-full bg-white dark:bg-gray-900"></div>
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 dark:text-white md:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-teal-500 to-emerald-600 bg-clip-text text-transparent">
              Your Name
            </span>
          </h1>
          <p className="mb-8 text-xl text-gray-600 dark:text-gray-400 md:text-2xl">
            Full Stack Developer & Creative Problem Solver
          </p>
          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-500 dark:text-gray-500">
            I create beautiful, functional, and user-centered digital
            experiences. Welcome to my portfolio.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-gradient-to-r from-teal-500 to-emerald-600 px-8 py-3 text-white transition-all hover:scale-105 hover:shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-full border-2 border-gray-300 px-8 py-3 text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-800"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen px-6 py-20 dark:bg-gray-900"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            About Me
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-2xl font-semibold text-gray-800 dark:text-white">
                Who I Am
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                I&apos;m a passionate full-stack developer with a love for
                creating elegant solutions to complex problems. With expertise
                in modern web technologies, I bring ideas to life through clean
                code and thoughtful design.
              </p>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                My journey in web development started with curiosity and has
                evolved into a career focused on building impactful digital
                experiences. I enjoy working on projects that challenge me and
                allow me to grow as a developer.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                When I&apos;m not coding, you can find me exploring new
                technologies, contributing to open-source projects, or sharing
                knowledge with the developer community.
              </p>
            </div>
            <div className="space-y-6">
              <div className="rounded-lg bg-gradient-to-br from-teal-50 to-emerald-50 p-6 dark:from-teal-900/20 dark:to-emerald-900/20">
                <h4 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                  Experience
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  5+ years of experience building web applications and working
                  with diverse teams to deliver high-quality software solutions.
                </p>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-emerald-50 to-green-50 p-6 dark:from-emerald-900/20 dark:to-green-900/20">
                <h4 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                  Education
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Bachelor&apos;s degree in Computer Science with a focus on
                  software engineering and web technologies.
                </p>
              </div>
              <div className="rounded-lg bg-gradient-to-br from-green-50 to-lime-50 p-6 dark:from-green-900/20 dark:to-lime-900/20">
                <h4 className="mb-2 text-lg font-semibold text-gray-800 dark:text-white">
                  Philosophy
                </h4>
                <p className="text-gray-600 dark:text-gray-400">
                  I believe in writing clean, maintainable code and creating
                  user experiences that are both beautiful and functional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Skills & Technologies
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Frontend",
                skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
                color: "from-teal-500 to-emerald-500",
              },
              {
                title: "Backend",
                skills: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
                color: "from-emerald-500 to-green-500",
              },
              {
                title: "Tools & Others",
                skills: ["Git", "Docker", "AWS", "CI/CD"],
                color: "from-green-500 to-lime-500",
              },
            ].map((category, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
              >
                <div
                  className={`mb-4 inline-block rounded-lg bg-gradient-to-r ${category.color} p-3`}
                >
                  <h3 className="text-xl font-semibold text-white">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <li
                      key={skillIdx}
                      className="text-gray-600 dark:text-gray-400"
                    >
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen px-6 py-20 dark:bg-gray-900"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Featured Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((project) => (
              <div
                key={project}
                className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg transition-all hover:scale-105 hover:shadow-xl dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="h-48 bg-gradient-to-br from-teal-400 via-emerald-500 to-green-500"></div>
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                    Project {project}
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    A brief description of the project and its key features.
                    This project showcases my skills in web development.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-teal-100 px-3 py-1 text-sm text-teal-800 dark:bg-teal-900/30 dark:text-teal-300">
                      React
                    </span>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                      Next.js
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Get In Touch
          </h2>
          <p className="mb-12 text-lg text-gray-600 dark:text-gray-400">
            I&apos;m always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <div className="mb-12 grid gap-6 md:grid-cols-3">
            {[
              { label: "Email", value: "hello@example.com", icon: "✉️" },
              { label: "Phone", value: "+1 (555) 000-0000", icon: "📱" },
              { label: "Location", value: "San Francisco, CA", icon: "📍" },
            ].map((contact, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900"
              >
                <div className="mb-2 text-3xl">{contact.icon}</div>
                <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                  {contact.label}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {contact.value}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            {["GitHub", "LinkedIn", "Twitter"].map((social, idx) => (
              <a
                key={idx}
                href="#"
                className="rounded-full border border-gray-300 px-6 py-3 text-gray-700 transition-all hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-800"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white px-6 py-8 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
      </main>
  );
}
