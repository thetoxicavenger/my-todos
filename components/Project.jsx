import React from 'react'
import styled from 'styled-components'

const CardsContainer = styled.main`
    display: flex;
`

const ProjectCard = styled.a`
    display: block;
    border-radius: 1em;
    padding: 1em 2em;
`

const ProjectImg = styled.img`
    max-width: 20%;
    display: block;
`

const ProjectTitle = styled.h2`

`

function Project({ id, order_id, title, img_url }) {
    return (
        <>
            <CardsContainer>
                <ProjectTitle>{title}</ProjectTitle>
            </CardsContainer>
        </>
    )
}

export default Project