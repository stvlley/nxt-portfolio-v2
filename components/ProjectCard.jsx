import React from "react"

function ProjectCard({ project }) {
    console.log(project)
    return <div>{project.name}</div>
}

export default ProjectCard;