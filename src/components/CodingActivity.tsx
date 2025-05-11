"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

// LeetCode API response interface
interface LeetCodeApiResponse {
  status: string;
  message: string;
  totalSolved: number;
  totalQuestions: number;
  easySolved: number;
  totalEasy: number;
  mediumSolved: number;
  totalMedium: number;
  hardSolved: number;
  totalHard: number;
  acceptanceRate: number;
  ranking: number;
  contributionPoints: number;
  reputation: number;
  submissionCalendar: Record<string, number>;
}

interface LeetCodeStats {
  username: string;
  userId: string;
  totalSolved: number;
  easySolved: number;
  easyTotal: number;
  mediumSolved: number;
  mediumTotal: number;
  hardSolved: number;
  hardTotal: number;
  acceptanceRate?: number;
  ranking?: number;
}

const CodingActivity = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [leetCodeStats, setLeetCodeStats] = useState<LeetCodeStats>({
    username: "syedshahriar99",
    userId: "934045",
    totalSolved: 130,
    easySolved: 85,
    easyTotal: 875,
    mediumSolved: 38,
    mediumTotal: 1839,
    hardSolved: 7,
    hardTotal: 830,
  });

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        // Fetch data from LeetCode Stats API
        const response = await fetch(
          "https://leetcode-stats-api.herokuapp.com/syedshahriar99"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: LeetCodeApiResponse = await response.json();

        if (data.status === "success") {
          setLeetCodeStats({
            username: "syedshahriar99",
            userId: "934045",
            totalSolved: data.totalSolved,
            easySolved: data.easySolved,
            easyTotal: data.totalEasy,
            mediumSolved: data.mediumSolved,
            mediumTotal: data.totalMedium,
            hardSolved: data.hardSolved,
            hardTotal: data.totalHard,
            acceptanceRate: data.acceptanceRate,
            ranking: data.ranking,
          });
        }

        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching LeetCode stats:", error);
        // Keep the default stats in case of error
        setIsLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  // Recent repositories
  const recentRepos = [
    {
      name: "Asset-Mart",
      description:
        "Enterprise asset management system with real-time inventory tracking",
      stars: 12,
      forks: 5,
      language: "JavaScript",
      languageColor: "#f1e05a",
      url: "https://github.com/s-shahriar/Asset-Mart",
    },
    {
      name: "LibHub",
      description:
        "Comprehensive library management system with dynamic book catalog",
      stars: 8,
      forks: 3,
      language: "TypeScript",
      languageColor: "#2b7489",
      url: "https://github.com/s-shahriar/LibHub",
    },
    {
      name: "Quick-Send",
      description:
        "Secure mobile financial service platform with transaction management",
      stars: 15,
      forks: 7,
      language: "JavaScript",
      languageColor: "#f1e05a",
      url: "https://github.com/s-shahriar/Quick-Send",
    },
  ];

  return (
    <section id="coding-activity" className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto">
        <h2 className="section-title dark:text-white">Coding Activity</h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LeetCode Stats */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
              LeetCode Activity
            </h3>

            {isLoading ? (
              <div className="h-64 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : (
              <div className="space-y-6">
                {/* User Info and Total Card */}
                <div className="bg-blue-100 border border-blue-300 rounded-lg p-6 shadow-sm hover:shadow transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* LeetCode Logo */}
                      <div className="p-2 rounded-md bg-white/50 text-amber-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.111.744 1.715.744 1.314 0 2.292-.989 2.292-2.33 0-.637-.244-1.216-.721-1.694l-2.994-2.919c-.903-.904-2.196-1.397-3.597-1.397-1.401 0-2.694.493-3.596 1.396l-4.825 4.825c-.904.904-1.396 2.196-1.396 3.597s.493 2.694 1.396 3.596l4.833 4.825c.903.903 2.196 1.397 3.596 1.397 1.401 0 2.694-.493 3.597-1.397l3.01-2.937c.462-.462.7-1.069.7-1.676 0-1.297-.962-2.33-2.33-2.33-.637 0-1.216.244-1.695.72z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-blue-800">
                          syedshahriar99
                        </h4>
                        <span className="text-blue-600 text-sm">#934045</span>
                      </div>
                    </div>

                    {/* Total Problems Solved */}
                    <div className="relative w-24 h-24">
                      <svg className="w-full h-full" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#FDE68A"
                          strokeWidth="3"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#F59E0B"
                          strokeWidth="3"
                          strokeDasharray="100, 100"
                          strokeDashoffset={
                            100 -
                            (leetCodeStats.totalSolved /
                              (leetCodeStats.easyTotal +
                                leetCodeStats.mediumTotal +
                                leetCodeStats.hardTotal)) *
                              100
                          }
                        />
                      </svg>
                      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                        <div className="text-center">
                          <span className="text-2xl font-bold text-amber-600">
                            {leetCodeStats.totalSolved}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                    {leetCodeStats.ranking && (
                      <div className="text-blue-800">
                        <span className="font-medium">Global Ranking:</span> #
                        {leetCodeStats.ranking.toLocaleString()}
                      </div>
                    )}

                    {leetCodeStats.acceptanceRate && (
                      <div className="text-blue-800">
                        <span className="font-medium">Acceptance Rate:</span>{" "}
                        {leetCodeStats.acceptanceRate.toFixed(1)}%
                      </div>
                    )}
                  </div>
                </div>

                {/* Problem Difficulty Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Easy */}
                  <div className="bg-green-100 border border-green-300 rounded-lg p-4 shadow-sm hover:shadow transition-all">
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-md bg-white/50 mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-green-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-green-800">Easy</h3>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-green-800 font-medium">
                        {leetCodeStats.easySolved} solved
                      </span>
                      <span className="text-green-600">
                        of {leetCodeStats.easyTotal}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-green-500 h-2.5 rounded-full"
                        style={{
                          width: `${
                            (leetCodeStats.easySolved /
                              leetCodeStats.easyTotal) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="mt-2 text-right text-green-700 text-sm font-medium">
                      {(
                        (leetCodeStats.easySolved / leetCodeStats.easyTotal) *
                        100
                      ).toFixed(1)}
                      %
                    </div>
                  </div>

                  {/* Medium */}
                  <div className="bg-amber-100 border border-amber-300 rounded-lg p-4 shadow-sm hover:shadow transition-all">
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-md bg-white/50 mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-amber-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-amber-800">
                        Medium
                      </h3>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-amber-800 font-medium">
                        {leetCodeStats.mediumSolved} solved
                      </span>
                      <span className="text-amber-600">
                        of {leetCodeStats.mediumTotal}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-amber-500 h-2.5 rounded-full"
                        style={{
                          width: `${
                            (leetCodeStats.mediumSolved /
                              leetCodeStats.mediumTotal) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="mt-2 text-right text-amber-700 text-sm font-medium">
                      {(
                        (leetCodeStats.mediumSolved /
                          leetCodeStats.mediumTotal) *
                        100
                      ).toFixed(1)}
                      %
                    </div>
                  </div>

                  {/* Hard */}
                  <div className="bg-red-100 border border-red-300 rounded-lg p-4 shadow-sm hover:shadow transition-all">
                    <div className="flex items-center mb-3">
                      <div className="p-2 rounded-md bg-white/50 mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 text-red-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-lg font-bold text-red-800">Hard</h3>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-red-800 font-medium">
                        {leetCodeStats.hardSolved} solved
                      </span>
                      <span className="text-red-600">
                        of {leetCodeStats.hardTotal}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-red-500 h-2.5 rounded-full"
                        style={{
                          width: `${
                            (leetCodeStats.hardSolved /
                              leetCodeStats.hardTotal) *
                            100
                          }%`,
                        }}
                      ></div>
                    </div>
                    <div className="mt-2 text-right text-red-700 text-sm font-medium">
                      {(
                        (leetCodeStats.hardSolved / leetCodeStats.hardTotal) *
                        100
                      ).toFixed(1)}
                      %
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="mt-6 text-center">
              <Link
                href="https://leetcode.com/syedshahriar99/"
                target="_blank"
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1"
              >
                View LeetCode Profile
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>

          {/* Recent Repositories */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-md p-6 hover:shadow-lg transition-all">
            <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">
              Recent Repositories
            </h3>

            {isLoading ? (
              <div className="h-64 flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
              </div>
            ) : (
              <div className="space-y-4">
                {recentRepos.map((repo, index) => (
                  <div
                    key={index}
                    className="bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg p-4 hover:border-primary shadow-sm hover:shadow transition-all"
                  >
                    <Link
                      href={repo.url}
                      target="_blank"
                      className="text-lg font-medium text-primary hover:underline"
                    >
                      {repo.name}
                    </Link>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                      {repo.description}
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-300">
                        <span
                          className="inline-block w-3 h-3 rounded-full mr-1"
                          style={{ backgroundColor: repo.languageColor }}
                        ></span>
                        {repo.language}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-300">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        {repo.stars}
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-300">
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                        {repo.forks}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-6 text-center">
              <Link
                href="https://github.com/s-shahriar?tab=repositories"
                target="_blank"
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1"
              >
                View All Repositories
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodingActivity;
