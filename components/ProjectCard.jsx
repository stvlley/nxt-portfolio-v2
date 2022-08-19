import Image from "next/image";
import React, { useState } from "react"

function ProjectCard({ project, index }) {
    const [hidden, setHidden] = useState('hidden')
    return (
        <div className='p-5  bg-white rounded-xl m-5 overflow-hidden justify-center '>
            <h2 className="font-bold p-4 text-center">{project.name}</h2>
            <span className="shadow-gray-500 shadow-lg">
                <Image objectFit="cover" priority layout="" height={500} width={500} alt='' src={project.image} />
            </span>
            <div className={hidden}>
                <div className=" bg-white rounded-lg p-3 m-3">{project.description}</div>
                <div className="">
                    {project.skills.map(single => (
                        <div index={single} key={index} className="py-1 text-center px-3 bg-black m-1 rounded-full dark:bg-white">
                            <p className="  text-sm font-bold text-white dark:text-black">{single}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;