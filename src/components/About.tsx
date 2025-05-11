const About = () => {
  return (
    <section id="about" className="py-20 bg-light dark:bg-dark">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-2 flex justify-center">
            <div className="w-full h-auto rounded-lg overflow-hidden bg-gray-900 flex flex-col shadow-xl">
              {/* IDE Header */}
              <div className="bg-gray-800 px-4 py-2 flex items-center">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-gray-400 text-xs ml-4">developer.tsx</div>
              </div>

              {/* Code Content */}
              <div className="flex-1 p-4 overflow-hidden font-mono text-sm text-left">
                <div className="text-blue-400">
                  interface <span className="text-green-400">Developer</span>{" "}
                  {`{`}
                </div>
                <div className="text-gray-300 ml-4">
                  name:{" "}
                  <span className="text-yellow-300">
                    &apos;Syed Shahriar&apos;
                  </span>
                  ;
                </div>
                <div className="text-gray-300 ml-4">
                  skills: <span className="text-yellow-300">string[]</span>;
                </div>
                <div className="text-gray-300 ml-4">
                  focus: <span className="text-yellow-300">string</span>;
                </div>
                <div className="text-green-400 ml-2">{`}`}</div>
                <div className="mt-4 text-blue-400">
                  const <span className="text-purple-400">me</span>
                  <span className="text-gray-300">: Developer = {`{`}</span>
                </div>
                <div className="text-gray-300 ml-4">
                  name:{" "}
                  <span className="text-yellow-300">
                    &apos;Syed Shahriar&apos;
                  </span>
                  ,
                </div>
                <div className="text-gray-300 ml-4">
                  skills: [
                  <span className="text-yellow-300">&apos;React&apos;</span>,{" "}
                  <span className="text-yellow-300">
                    &apos;TypeScript&apos;
                  </span>
                  , <span className="text-yellow-300">&apos;Angular&apos;</span>
                  ],
                </div>
                <div className="text-gray-300 ml-4">
                  focus:{" "}
                  <span className="text-yellow-300">
                    &apos;Frontend Excellence&apos;
                  </span>
                </div>
                <div className="text-gray-300 ml-2">{`}`};</div>
                <div className="mt-4 text-blue-400">
                  export default <span className="text-purple-400">me;</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 space-y-5">
            <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center md:text-left">
              Software Engineer & Problem Solver
            </h3>

            <p className="text-gray-700 dark:text-gray-300 text-center md:text-left">
              I&apos;m a passionate software engineer with experience building
              web applications and services. My journey in tech began with an
              Electronics and Communications Engineering degree, where I
              developed a strong foundation in both hardware and software
              systems.
            </p>

            <p className="text-gray-700 dark:text-gray-300 text-center md:text-left">
              I specialize in frontend development with expertise in
              JavaScript/TypeScript, React, Angular, and RESTful API
              integration. I&apos;m driven by creating elegant solutions to
              complex problems and building software that makes a positive
              impact.
            </p>

            <div className="flex flex-wrap gap-3 pt-4 justify-center md:justify-start">
              <a
                href="https://github.com/s-shahriar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/syed-shahriar/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                </svg>
                LinkedIn
              </a>
              <a
                href="https://leetcode.com/u/syedshahriar99/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                </svg>
                LeetCode
              </a>
              <a
                href="https://drive.google.com/drive/u/0/folders/1h30-XOUtyDfZrZGO-9q97v5zS1BjqXe3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
