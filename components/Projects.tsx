import React from 'react';

const Projects: React.FC = () => {
  const projectData = [
    {
      name: "Pac-Man Game with Pygame & Amazon Developer CLI",
      description:
        "A Pac-Man game implemented using Pygame, integrated with Amazon Developer CLI for additional functionality.",
      repoLink: "https://github.com/Oghenesuvwe-dev/PacMan-game-with-pygame-and-amazonqdevelopercli",
    },
    {
      name: "DS201 - Foundations of Apache Cassandra",
      description:
        "Foundational resources and implementations for understanding and working with Apache Cassandra.",
      repoLink: "https://github.com/Oghenesuvwe-dev/DS201-Foundations-of-Apache-Cassandra",
    },
    {
      name: "Resume Kraft",
      description:
        "A project for building and managing professional resumes using customizable templates.",
      repoLink: "https://github.com/Oghenesuvwe-dev/Resume-Kraft",
    },
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <ul>
        {projectData.map((project, index) => (
          <li key={index}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Repository
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
