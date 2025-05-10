"use client";

import { useEffect, useRef } from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Junior Software Engineer",
      company: "Business Novelty Ltd.",
      location: "Dhaka, Bangladesh",
      duration: "November 2024 - Present",
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      description: [
        "Developing responsive and interactive user interfaces using Angular and React for enterprise applications",
        "Implementing AI chatbot integrations with custom UIs, enhancing user engagement and support capabilities",
        "Building reusable component libraries and implementing state management solutions for complex applications",
        "Collaborating with cross-functional teams to translate business requirements into technical solutions",
        "Optimizing frontend performance and ensuring cross-browser compatibility for seamless user experience",
      ],
      technologies: [
        "Angular",
        "React",
        "TypeScript",
        "AI Integration",
        "REST APIs",
      ],
    },
    {
      id: 2,
      role: "Project Co-Ordinator",
      company: "Robi Axiata Limited",
      location: "Dhaka, Bangladesh",
      duration: "July 2023 - October 2024",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
          />
        </svg>
      ),
      description: [
        "Developed Python scripts for EMS/NMS task automation (U2020, ENM), reducing manual operations by 60% and improving workflow efficiency",
        "Engineered Python-based data processing pipelines to onboard 500+ network nodes using NETCONF/YANG and SNMP protocols",
        "Created custom Python monitoring scripts to track network KPIs (uptime, latency, throughput) with real-time alert integration",
        "Coordinated agile collaboration between vendors and internal teams for requirements gathering, troubleshooting, and CI/CD-style upgrades",
        "Built data transformation utilities in Python to convert network logs into JSON/CSV formats for Angular dashboard visualization",
      ],
      technologies: [
        "Python",
        "Network Automation",
        "NETCONF/YANG",
        "JSON/CSV",
        "Angular",
      ],
    },
  ];

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const experienceCards = document.querySelectorAll(".experience-card");
    experienceCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      experienceCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section id="experience" className="py-20 bg-gray-50" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Work Experience
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            My professional journey has equipped me with valuable experience in
            software development and project coordination.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>

          {experiences.map((item, index) => (
            <div
              key={item.id}
              className={`experience-card mb-12 opacity-0 transition-all duration-700 ease-out ${
                index % 2 === 0 ? "md:ml-auto" : ""
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 top-10 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white border-4 border-primary z-10"></div>

                {/* Content */}
                <div className="md:w-1/2 md:px-8">
                  <div
                    className={`${item.bgColor} ${item.borderColor} border rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                  >
                    {/* Header with gradient */}
                    <div
                      className={`bg-gradient-to-r ${item.color} p-6 flex items-center gap-4`}
                    >
                      <div className="bg-white/20 p-3 rounded-full">
                        <div className="text-white">{item.icon}</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {item.role}
                        </h3>
                        <p className="text-white/90 font-medium">
                          {item.company}
                        </p>
                      </div>
                    </div>

                    {/* Body content */}
                    <div className="p-6">
                      <div className="flex items-center mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                        <p className="text-gray-700 font-medium">
                          {item.location}
                        </p>
                      </div>

                      <div className="flex items-center mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-gray-500 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        <p className="text-gray-600">{item.duration}</p>
                      </div>

                      <div className="border-t border-gray-200 pt-4">
                        <div>
                          {item.description.map((point, idx) => (
                            <div
                              key={idx}
                              className="flex items-start mb-2 last:mb-0"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <p className="text-gray-600">{point}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-200">
                        {item.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className={`text-xs px-3 py-1.5 rounded-full text-sm font-medium ${
                              index === 0
                                ? "bg-blue-100 text-blue-800"
                                : "bg-green-100 text-green-800"
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
