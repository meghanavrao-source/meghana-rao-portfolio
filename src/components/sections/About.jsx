import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "TypeScript", "CSS", "TailwindCSS"];
  const backendSkills = ["Node.js", "DynamoDB", "AWS"];
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>
          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-gray-300 mb-6">
              I am a passionate Frontend Developer, who is dedicated to creating
              seamless, interactive user experiences with continuous learning
              and experimenting with new frameworks and technologies to improve
              performance and design. With a focus on clean, responsive code, I
              strive to bring designs to life and ensure the best user
              experience possible.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 🏫 Education </h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>
                  <strong>B. S. in Computer Science</strong> - JIT, Bengaluru
                  (2014 - 2018)
                </li>
                <li>
                  <strong>M. S. in Computer Science</strong> - Reva University,
                  Bengaluru (2018 - 2020)
                </li>
                <li>
                  Relavent Coursework: Data Structures, C++, Java, Web
                  Development, Database Management, Cloud Computiong
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4"> 💼 Work Experience </h3>
              <div className="text-gray-300 space-y-4">
                <div>
                  <h4 className="font-semibold">
                    Software Engineer at Polestar (2022 - present)
                  </h4>
                  <p>
                    Developed and maintained highly interactive web applications
                    using React and TypeScript for multiple projects, ensuring
                    scalability and responsiveness.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Junior Software Engineer at Infobip (2021 - 2022)
                  </h4>
                  <p>
                    Managed,developed and integrated front-end elements of web
                    products such as pagelayouts,logos,cus- tomized features
                    from initial design to completion, optimizing all
                    cross-browsers and multi-platform compatibility.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold">
                    Junior Software Engineer at Infobip (2021 - 2022)
                  </h4>
                  <p>
                    Learned the latest techstacks related to frontend
                    development such as JavaScript, HTML, CSS, React, Redux
                    along with debugging, code reviews, deployments,
                    troubleshooting closely with senior developr along
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
