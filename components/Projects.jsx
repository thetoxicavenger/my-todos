import React from 'react'
import Project from './Project'
import styled from 'styled-components'

const CardsContainer = styled.main`
    display: flex;
    justify-content: space-around;
`

function Projects({ projects }) {
    const projectsList = projects.map(project => {
        return <Project key={project.id} {...project} />
    })
    return (
        <>
            <CardsContainer>
                {projectsList}
            </CardsContainer>
        </>
    )
}

export default Projects