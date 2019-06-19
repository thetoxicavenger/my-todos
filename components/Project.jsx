import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const ProjectCard = styled.a`
    display: block;
    border-radius: 0.4em;
    padding: 0.5em 2em;
    background: #ffffff;
    height: 6em;
    width: 6em;
    color: black;
    text-decoration: none;
    &:hover {
        text-decoration: underline;
    }
`

const ProjectImg = styled.img`
    max-width: 50%;
    display: block;
`

const ProjectTitle = styled.h2`
    margin-top: 0.3em;
`

function Project({ id, order_id, title, img_url }) {
    const href = `/project?id=${id}`
    const alt = `${title} project icon`
    return (
        <>
            <Link prefetch href={href} passHref>
                <ProjectCard>
                    <ProjectImg src={img_url} alt={alt} />
                    <ProjectTitle>{title}</ProjectTitle>
                </ProjectCard>
            </Link>
        </>
    )
}

export default Project