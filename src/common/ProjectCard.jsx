import React from 'react'

function ProjectCard ({src, title, stack, description })  {
  return (
  <span>
      <h2>{title}</h2>
      <h3>{stack}</h3>
      <video className="hover" controls> 
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
      </video>
      <p className="projectDescription">{description}</p>
  </span>
  )
}

export default ProjectCard;