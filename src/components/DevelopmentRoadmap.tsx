"use client";

import { useState } from "react";

const DevelopmentRoadmap = () => {
  const [activeTab, setActiveTab] = useState("current");

  const roadmapData = {
    current: [
      {
        title: "Data Structures and Algorithms",
        description:
          "Mastering fundamental data structures and algorithms for efficient problem-solving, including arrays, linked lists, trees, graphs, sorting, and searching algorithms.",
        progress: 75,
        resources: [
          {
            name: "LeetCode",
            url: "https://leetcode.com/",
          },
          {
            name: "Algorithms by Princeton University",
            url: "https://algs4.cs.princeton.edu/home/",
          },
        ],
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
              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            />
          </svg>
        ),
        color: "bg-blue-100 border-blue-300 text-blue-800",
      },
      {
        title: "Next.js 15 & Server Components",
        description:
          "Exploring the latest features of Next.js 15 including React Server Components, Server Actions, and the App Router for building high-performance web applications.",
        progress: 60,
        resources: [
          { name: "Next.js Documentation", url: "https://nextjs.org/docs" },
          { name: "Vercel Blog", url: "https://vercel.com/blog" },
        ],
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
        color: "bg-green-100 border-green-300 text-green-800",
      },
      {
        title: "Angular v19",
        description:
          "Mastering Angular framework with focus on components, services, dependency injection, and state management for building robust single-page applications.",
        progress: 45,
        resources: [
          {
            name: "Angular Documentation",
            url: "https://angular.io/docs",
          },
          {
            name: "Angular University",
            url: "https://angular-university.io/",
          },
        ],
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
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        ),
        color: "bg-purple-100 border-purple-300 text-purple-800",
      },
    ],
    planned: [
      {
        title: "Web3 & Blockchain Development",
        description:
          "Learning blockchain fundamentals, smart contract development with Solidity, and building decentralized applications (dApps) on Ethereum.",
        timeline: "Q2 2024",
        resources: [
          {
            name: "Ethereum Documentation",
            url: "https://ethereum.org/en/developers/docs/",
          },
          { name: "CryptoZombies", url: "https://cryptozombies.io/" },
        ],
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
              d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
            />
          </svg>
        ),
        color: "bg-yellow-100 border-yellow-300 text-yellow-800",
      },
      {
        title: "AI & Machine Learning Integration",
        description:
          "Exploring integration of AI/ML models into web applications using TensorFlow.js and Hugging Face Transformers for enhanced user experiences.",
        timeline: "Q3 2024",
        resources: [
          { name: "TensorFlow.js", url: "https://www.tensorflow.org/js" },
          { name: "Hugging Face", url: "https://huggingface.co/" },
        ],
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
        color: "bg-red-100 border-red-300 text-red-800",
      },
      {
        title: "Cloud Architecture & DevOps",
        description:
          "Mastering cloud architecture patterns, infrastructure as code, and CI/CD pipelines using AWS, Terraform, and GitHub Actions.",
        timeline: "Q4 2024",
        resources: [
          { name: "AWS Documentation", url: "https://docs.aws.amazon.com/" },
          {
            name: "Terraform Learning",
            url: "https://learn.hashicorp.com/terraform",
          },
        ],
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
              d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
            />
          </svg>
        ),
        color: "bg-indigo-100 border-indigo-300 text-indigo-800",
      },
    ],
  };

  return (
    <section id="development-roadmap" className="py-20 bg-gray-50 dark:bg-dark">
      <div className="container mx-auto">
        <h2 className="section-title dark:text-white">
          Personal Development Roadmap
        </h2>

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
            Continuous learning is at the core of my professional journey.
            Here's what I'm currently focused on and what I'm planning to
            explore next.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === "current"
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab("current")}
            >
              Currently Learning
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === "planned"
                  ? "bg-primary text-white"
                  : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600"
              }`}
              onClick={() => setActiveTab("planned")}
            >
              Future Plans
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roadmapData[activeTab as keyof typeof roadmapData].map(
            (item, index) => (
              <div
                key={index}
                className={`rounded-lg border ${item.color} dark:bg-gray-700 dark:border-gray-600 p-6 transition-all hover:shadow-md`}
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-md bg-white/50 dark:bg-gray-600/50 mr-3">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-bold dark:text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-gray-700 dark:text-gray-200 mb-4">
                  {item.description}
                </p>

                {activeTab === "current" && "progress" in item && (
                  <div className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium dark:text-gray-300">
                        Progress
                      </span>
                      <span className="text-sm font-medium dark:text-gray-300">
                        {item.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2.5">
                      <div
                        className="bg-primary h-2.5 rounded-full"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                {activeTab === "planned" && "timeline" in item && (
                  <div className="mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <svg
                        className="mr-1.5 h-2 w-2 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx="4" cy="4" r="3" />
                      </svg>
                      Future Plan
                    </span>
                  </div>
                )}

                <div className="mt-4">
                  <h4 className="text-sm font-semibold mb-2 dark:text-gray-200">
                    Learning Resources:
                  </h4>
                  <ul className="space-y-1">
                    {item.resources.map((resource, idx) => (
                      <li key={idx} className="text-sm">
                        <a
                          href={resource.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline flex items-center"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 mr-1"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            />
                          </svg>
                          {resource.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentRoadmap;
