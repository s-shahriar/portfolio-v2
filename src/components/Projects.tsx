import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Asset Mart",
      description:
        "Enterprise asset management system with real-time inventory tracking and request processing.",
      image: "/images/projects/asset-mart.jpg",
      gradient: "from-blue-500 to-blue-700",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
      ),
      technologies: [
        "Node.js",
        "JavaScript",
        "Firebase",
        "MongoDB",
        "React.js",
        "Express.js",
        "TanStack Query",
      ],
      demoLink: "https://assetmart-8e93a.web.app/",
      codeLink: "https://github.com/s-shahriar/Asset-Mart",
      features: [
        "Implemented real-time asset inventory tracking system with instant availability updates",
        "Developed secure payment gateway integration for seamless package upgrades",
        "Engineered intelligent request management system for returnable and non-returnable assets",
        "Created comprehensive HR dashboard with advanced team and asset management capabilities",
        "Built responsive employee portal with personalized borrowing analytics and HR communication channel",
      ],
    },
    {
      id: 2,
      title: "LibHub",
      description:
        "Comprehensive library management system with dynamic book catalog and borrowing functionality.",
      image: "/images/projects/libhub.jpg",
      gradient: "from-green-500 to-green-700",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
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
      technologies: [
        "Node.js",
        "Firebase",
        "MongoDB",
        "React.js",
        "Express.js",
        "TanStack Query",
      ],
      demoLink: "https://libhub-46f8c.web.app/",
      codeLink: "https://github.com/s-shahriar/LibHub",
      features: [
        "Architected dynamic book catalog system with real-time availability tracking and status updates",
        "Implemented role-based access control with specialized librarian management interface",
        "Integrated OAuth authentication for frictionless user onboarding and enhanced security",
        "Developed automated borrowing system with intelligent due date management and notifications",
        "Created intuitive category-based navigation for optimized book discovery and exploration",
      ],
    },
    {
      id: 4,
      title: "Go Beyond",
      description:
        "Interactive travel discovery platform with personalized spot collections and dynamic filtering.",
      image: "/images/projects/go-beyond.jpg",
      gradient: "from-red-500 to-red-700",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      technologies: [
        "Node.js",
        "JavaScript",
        "Firebase",
        "MongoDB",
        "React.js",
        "Express.js",
        "TanStack Query",
      ],
      demoLink: "https://project-client-ecf0b.web.app/",
      codeLink: "https://github.com/s-shahriar/Go-Beyond",
      features: [
        "Engineered single-page application architecture with React Router for seamless user experience",
        "Implemented advanced category-based filtering system for efficient destination discovery",
        "Integrated social authentication for streamlined user onboarding and profile management",
        "Developed personalized collection system for customized travel planning and organization",
        "Created dynamic theme switching functionality for enhanced user interface customization",
      ],
    },
    {
      id: 5,
      title: "Quick Send",
      description:
        "Secure mobile financial service platform with comprehensive transaction management.",
      image: "/images/projects/quick-send.jpg",
      gradient: "from-yellow-500 to-yellow-700",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      technologies: [
        "Node.js",
        "Firebase",
        "MongoDB",
        "React.js",
        "Express.js",
        "TanStack Query",
      ],
      demoLink: "https://mfs-project-d9f9e.web.app/",
      codeLink: "https://github.com/s-shahriar/Quick-Send",
      features: [
        "Developed comprehensive financial transaction system with role-specific interfaces for users and agents",
        "Implemented multi-layer security with PIN verification and JWT authentication for all transactions",
        "Built real-time transaction monitoring system with instant status updates and notifications",
        "Created intuitive transaction management dashboards with detailed history and analytics",
        "Designed administrative control panel with advanced user management and transaction oversight",
      ],
    },
    {
      id: 3,
      title: "Realisto",
      description:
        "Comprehensive real estate platform with advanced property listings and management.",
      image: "/images/projects/realisto.jpg",
      gradient: "from-purple-500 to-purple-700",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
          />
        </svg>
      ),
      technologies: [
        "MongoDB",
        "React.js",
        "Firebase Auth",
        "JavaScript",
        "TailwindCSS",
      ],
      demoLink: "https://realisto-e1cc0.web.app/",
      codeLink: "https://github.com/s-shahriar/Realisto",
      features: [
        "Developed comprehensive property listing platform with advanced search and filtering capabilities",
        "Implemented detailed property information pages with interactive navigation and media galleries",
        "Integrated secure authentication system with social login options for streamlined access",
        "Created customizable user dashboard for efficient profile and listing management",
        "Built responsive design system ensuring optimal experience across all device types",
      ],
    },
    {
      id: 6,
      title: "Smart Ticketing System",
      description:
        "Interactive ticket booking platform with dynamic pricing and seat selection.",
      image: "/images/projects/smart-ticketing.jpg",
      gradient: "from-blue-400 to-blue-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"
          />
        </svg>
      ),
      technologies: [
        "JavaScript",
        "DOM Manipulation",
        "CSS",
        "HTML",
        "TailwindCSS",
      ],
      demoLink: "https://s-shahriar.github.io/Smart-Ticketing-System/",
      codeLink: "https://github.com/s-shahriar/Smart-Ticketing-System",
      features: [
        "Engineered interactive ticket purchasing system with intuitive seat selection interface",
        "Implemented dynamic pricing algorithm with real-time availability updates and inventory management",
        "Developed automated discount system with secure coupon code validation and application",
        "Created intelligent cost calculation engine based on seat selection and applied discounts",
        "Built fully responsive design ensuring seamless booking experience across all devices",
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="section-title">Featured Projects</h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="h-48 overflow-hidden relative">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  width={400}
                  height={300}
                  unoptimized
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-4 mb-4">
                  <div className="text-sm text-gray-700 mb-2 font-medium">
                    Key Features:
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1 list-disc pl-4">
                    {project.features.slice(0, 2).map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <Link
                    href={project.demoLink}
                    className="text-primary hover:text-primary/80 font-medium flex items-center gap-1"
                    target="_blank"
                  >
                    <span>Live Demo</span>
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

                  <Link
                    href={project.codeLink}
                    className="text-gray-600 hover:text-gray-800 flex items-center gap-1"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span>Code</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
