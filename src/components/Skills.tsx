const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      color: "bg-blue-100 text-blue-800",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
      skills: [
        { name: "JavaScript", color: "bg-blue-100 text-blue-800" },
        { name: "TypeScript", color: "bg-blue-100 text-blue-800" },
        { name: "React", color: "bg-blue-100 text-blue-800" },
        { name: "Angular", color: "bg-blue-100 text-blue-800" },
        { name: "Vue.js", color: "bg-blue-100 text-blue-800" },
        { name: "HTML5", color: "bg-blue-100 text-blue-800" },
        { name: "CSS3", color: "bg-blue-100 text-blue-800" },
        { name: "Tailwind CSS", color: "bg-blue-100 text-blue-800" },
        { name: "Redux", color: "bg-blue-100 text-blue-800" },
      ],
    },
    {
      title: "Backend Development",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
      color: "bg-green-100 text-green-800",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      iconBg: "bg-green-100",
      skills: [
        { name: "Node.js", color: "bg-green-100 text-green-800" },
        { name: "Express", color: "bg-green-100 text-green-800" },
        { name: "Python", color: "bg-green-100 text-green-800" },
        { name: "Django", color: "bg-green-100 text-green-800" },
        { name: "Java", color: "bg-green-100 text-green-800" },
        { name: "Spring Boot", color: "bg-green-100 text-green-800" },
        { name: "RESTful API", color: "bg-green-100 text-green-800" },
      ],
    },
    {
      title: "Database & Storage",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
      color: "bg-yellow-100 text-yellow-800",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
      iconBg: "bg-yellow-100",
      skills: [
        { name: "PostgreSQL", color: "bg-yellow-100 text-yellow-800" },
        { name: "MongoDB", color: "bg-yellow-100 text-yellow-800" },
        { name: "MySQL", color: "bg-yellow-100 text-yellow-800" },
        { name: "Firebase", color: "bg-yellow-100 text-yellow-800" },
      ],
    },
    {
      title: "Tools & Workflow",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      color: "bg-red-100 text-red-800",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      iconBg: "bg-red-100",
      skills: [
        { name: "Git", color: "bg-red-100 text-red-800" },
        { name: "JIRA", color: "bg-red-100 text-red-800" },
        { name: "Agile/Scrum", color: "bg-red-100 text-red-800" },
        { name: "VS Code", color: "bg-red-100 text-red-800" },
        { name: "Postman", color: "bg-red-100 text-red-800" },
        { name: "Figma", color: "bg-red-100 text-red-800" },
      ],
    },
    {
      title: "Other Skills",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
      color: "bg-indigo-100 text-indigo-800",
      bgColor: "bg-indigo-50",
      borderColor: "border-indigo-200",
      iconBg: "bg-indigo-100",
      skills: [
        {
          name: "Testing (Jest, Cypress)",
          color: "bg-indigo-100 text-indigo-800",
        },
        { name: "UI/UX Design", color: "bg-indigo-100 text-indigo-800" },
        { name: "Responsive Design", color: "bg-indigo-100 text-indigo-800" },
        {
          name: "Performance Optimization",
          color: "bg-indigo-100 text-indigo-800",
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-dark">
      <div className="container mx-auto">
        <h2 className="section-title mb-4 dark:text-white">My Skills</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center max-w-3xl mx-auto mb-12">
          A collection of technologies and tools I've worked with throughout my
          career
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.slice(0, 2).map((category, index) => (
            <div
              key={index}
              className={`${category.bgColor} dark:bg-gray-700 border ${category.borderColor} dark:border-gray-600 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-lg ${category.iconBg} text-gray-800`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`skill-tag ${skill.color} dark:bg-gray-600 dark:text-white px-3 py-1.5 rounded-full text-sm font-medium inline-block mb-2 transition-all duration-200 hover:shadow-sm`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.slice(2).map((category, index) => (
            <div
              key={index + 2}
              className={`${category.bgColor} dark:bg-gray-700 border ${category.borderColor} dark:border-gray-600 rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`p-3 rounded-lg ${category.iconBg} text-gray-800`}
                >
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`skill-tag ${skill.color} dark:bg-gray-600 dark:text-white px-3 py-1.5 rounded-full text-sm font-medium inline-block mb-2 transition-all duration-200 hover:shadow-sm`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
