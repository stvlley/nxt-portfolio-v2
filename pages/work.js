import React from 'react'
import ProjectCard from '../components/ProjectCard.jsx'



const Work = ({projects}) => {
   console.group(projects)
    return (
        <div  className='flex flex-col justify-center sm:items-center w-full h-full'>
            <div className='m-5 border-2  shadow-md shadow-gray-400  border-gray-700  p-1 rounded-lg px-3 mx-6 hover:scale-110 duration-500 '>
              <p className='text-left text-2xl px-1 sm:text-3xl md:text-4xl font-bold   mb-1 w-full text-gray-600 '>Projects</p>
          </div>
            <div >
            <div className='m-4 p-5 md:flex'>{projects?.map((project) => {
                const index = projects.indexOf(project)
                return <ProjectCard key={index} project={project} />
                
            })}</div>
            </div>
        </div>
    )
}

export default Work