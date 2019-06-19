import React from 'react'
import Project from './Project'

function Projects({ projects }) {
    const projectsList = projects.map(project => {
        return <Project key={project.id} {...project} />
    })
    return (
        <>
            {projectsList}
        </>
    )
}

export default Projects