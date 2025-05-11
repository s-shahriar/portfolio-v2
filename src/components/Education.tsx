"use client";

import { useEffect, useRef } from "react";

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Bachelor's Degree",
      program: "Electronics and Communications Engineering",
      institution: "Khulna University of Engineering and Technology",
      location: "Khulna, Bangladesh",
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
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
          />
        </svg>
      ),
      nostalgic:
        "Conducted research on Abstractive Bengali Text Summarization using NLP techniques, completed IoT-based projects, and organized a nationwide technological festival.",
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      program: "Science",
      institution: "Dhaka City College",
      location: "Dhaka, Bangladesh",
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
            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
          />
        </svg>
      ),
      nostalgic:
        "Developed a strong foundation in mathematics and science, participated in programming competitions, and cultivated analytical thinking skills.",
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      program: "Science",
      institution: "St. Gregory's High School & College",
      location: "Dhaka, Bangladesh",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
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
            d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
          />
        </svg>
      ),
      nostalgic:
        "Spent the best years of my life in these hallways, forming friendships and memories that will last forever.",
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

    const educationCards = document.querySelectorAll(".education-card");
    educationCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      educationCards.forEach((card) => {
        observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section
      id="education"
      className="py-20 bg-gray-50 dark:bg-gray-800"
      ref={sectionRef}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Educational Journey
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic background has equipped me with the knowledge and skills
            needed to excel in the field of technology and engineering.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-600"></div>

          {educationData.map((item, index) => (
            <div
              key={item.id}
              className={`education-card mb-12 opacity-0 transition-all duration-700 ease-out ${
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
                <div className="hidden md:block absolute left-1/2 top-10 transform -translate-x-1/2 w-6 h-6 rounded-full bg-white dark:bg-gray-800 border-4 border-primary z-10"></div>

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
                          {item.degree}
                        </h3>
                        <p className="text-white/90 font-medium">
                          {item.program}
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
                        <p className="text-gray-700 dark:text-gray-300 font-medium">
                          {item.institution}
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
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <p className="text-gray-600 dark:text-gray-400">
                          {item.location}
                        </p>
                      </div>

                      <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                        {item.id === 3 ? (
                          <div className="flex items-start">
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
                                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                              />
                            </svg>
                            <p className="text-gray-600 dark:text-gray-300 italic">
                              {item.nostalgic}
                            </p>
                          </div>
                        ) : (
                          <div>
                            {item.nostalgic.split(", ").map((point, idx) => (
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
                                <p className="text-gray-600 dark:text-gray-300">
                                  {point.trim()}.
                                </p>
                              </div>
                            ))}
                          </div>
                        )}
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

export default Education;
