import React from 'react'
import ProjectCard from '../components/ProjectCard.jsx'
import { projects } from '../data/projectData.js'


const Work = () => {
   
    return (
        <div>
            <h1>Recent Projects</h1>
            <div>{projects?.map((project) => {
                const index = projectData.indexOf(project)
                return <ProjectCard key={index} project={project} />
            })}</div>
        </div>
    )
}

export default Work