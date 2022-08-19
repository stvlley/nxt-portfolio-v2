import React from "react"

function ProjectCard({ project, index }) {
    console.log(project)
    return <div >
        <h2>{project.name}</h2>
        <p>IMAGE HERE</p>
        <div>{project.description}</div>
        <div className=''>
            {project.skills.map(single => (
                <div index={single} key={index} className="py-1 px-3 bg-black m-1 rounded-full dark:bg-white">
                    <p className="text-sm font-bold text-white dark:text-black">{single}</p>
                </div>
            ))}
        </div>
    </div>
}

export default ProjectCard;