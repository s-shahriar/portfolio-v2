import Image from "next/image";
import Link from "next/link";
import TypewriterEffect from "./TypewriterEffect";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-secondary text-white py-20"
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center pb-12 md:pb-0">
        <div className="space-y-6 text-center md:text-left md:pr-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Hi, I&apos;m{" "}
            <span className="text-primary">
              <TypewriterEffect text="Shahriar" delay={150} />
            </span>
            <br />A Software Engineer
          </h1>
          <p className="text-lg text-gray-300 max-w-lg">
            I build exceptional digital experiences with clean, efficient code
            and creative problem-solving.
          </p>
          <div className="space-y-4">
            <p className="text-gray-300">
              <span className="text-primary font-semibold">
                Specialized in:
              </span>{" "}
              Frontend development, RESTful APIs, and Database design.
            </p>
            <p className="text-gray-300">
              <span className="text-primary font-semibold">Tech stack:</span>{" "}
              JavaScript, TypeScript, React, Angular, Node.js, Express, MongoDB.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="#projects"
              className="btn-primary bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md transition-colors"
            >
              View My Work
            </Link>
            <Link
              href="#contact"
              className="border border-white/20 hover:bg-white/10 text-white px-6 py-3 rounded-md transition-colors"
            >
              Contact Me
            </Link>
          </div>
        </div>
        <div className="flex justify-center md:justify-end relative">
          <div className="relative w-72 h-72 md:w-96 md:h-96 bg-primary/20 rounded-full flex items-center justify-center p-1 md:p-1">
            <div className="w-full h-full rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
              <Image
                src="/images/profile/profile.jpg"
                alt="Syed Shahriar"
                className="object-cover w-full h-full"
                width={500}
                height={700}
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-white p-4 rounded-full">
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
            </div>
          </div>
        </div>
      </div>
      <Link
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        aria-label="Scroll to About section"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-white/70 hover:text-white transition-colors"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </Link>
    </section>
  );
};

export default Hero;
