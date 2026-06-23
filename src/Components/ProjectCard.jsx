import React from "react";
import { LuGlobe } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";



function ProjectCard({ image, url_live, url_github, head, description, technologies = [] }) {

  return (
    <div className="project-card">

      {/* 1. Image Container */}
      <div className="project-image-wrapper">
        <img src={image} alt={head} className="project-img" />
      </div>

      <div className="pro-det">
        {/* 2. Heading / Title */}
        <h3 className="project-head">{head}</h3>

        {/* 3. Description */}
        <p className="project-desc">{description}</p>

        {/* 4. Action Link / URL */}
        <div className="project-links">
          {/* 🌟 MOVED .icon-box AND data-title TO THE anchor TAGS AND REMOVED THE DOT */}
          <div className="pro-links">
            <a
              href={url_live}
              target="_blank"
              rel="noreferrer"
              className="project-btn icon-box"
              data-title="Visit Website"
            >
              <LuGlobe className="pro-down-ico" />
            </a>

            <a
              href={url_github}
              target="_blank"
              rel="noreferrer"
              className="project-btn icon-box"
              data-title="View on GitHub"
            >
              <FiGithub className="pro-down-ico" />
            </a>
          </div>
          <div className="tech-icons" style={{ display: "flex", gap: ".5em"}}>
            {technologies.map((tech, index) => (
              <span key={index} className="icon-box" data-title={tech.name}>
                {React.cloneElement(tech.icon, { className: "tech-istyle" })}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;