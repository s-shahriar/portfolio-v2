import Image from "next/image";
import Link from "next/link";

interface ProjectType {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
  features: string[];
}

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Asset Mart",
      description:
        "Enterprise asset management system with real-time inventory tracking and request processing.",
      image: "/images/projects/asset-mart.jpg",
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
      ],
    },
    {
      id: 2,
      title: "LibHub",
      description:
        "Comprehensive library management system with dynamic book catalog and borrowing functionality.",
      image: "/images/projects/libhub.jpg",
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
      ],
    },
    {
      id: 3,
      title: "Go Beyond",
      description:
        "Interactive travel discovery platform with personalized spot collections and dynamic filtering.",
      image: "/images/projects/go-beyond.jpg",
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
      ],
    },
    {
      id: 4,
      title: "Quick Send",
      description:
        "Secure mobile financial service platform with comprehensive transaction management.",
      image: "/images/projects/quick-send.jpg",
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
      ],
    },
    {
      id: 5,
      title: "Smart Ticketing System",
      description:
        "Interactive ticket booking platform with dynamic pricing and seat selection.",
      image: "/images/projects/smart-ticketing.jpg",
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
      ],
    },
  ];

  // Render a project card
  const renderProjectCard = (project: ProjectType) => (
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

      <div className="p-6 dark:bg-gray-800">
        <h3 className="text-xl font-bold mb-2 dark:text-white">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 dark:text-gray-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 mb-4">
          <div className="text-sm text-gray-700 dark:text-gray-300 mb-2 font-medium">
            Key Features:
          </div>
          <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1 list-disc pl-4">
            {project.features.map((feature, index) => (
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
            className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200 flex items-center gap-1"
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
  );

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto">
        <h2 className="section-title">Featured Projects</h2>

        {/* First row - 3 projects */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map(renderProjectCard)}
        </div>

        {/* Second row - 2 projects centered */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:w-2/3 mx-auto">
          {projects.slice(3, 5).map(renderProjectCard)}
        </div>
      </div>
    </section>
  );
};

export default Projects;
