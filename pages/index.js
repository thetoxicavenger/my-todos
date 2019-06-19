import React from 'react'
import Projects from '../components/Projects'
import api from '../util/api'
import styled from 'styled-components'

const ProjectsTitle = styled.h1`
  padding-left: 0.82em;
`

function IndexPage({ projects, projectsFetchError }) {
  if (projectsFetchError) {
    return <div>Error loading projects!</div>
  }
  return (
    <>
      <ProjectsTitle>Projects</ProjectsTitle>
      <Projects projects={projects} />
    </>
  )
}

IndexPage.getInitialProps = async () => {
  try {
    const projects = await api.getAllProjects()
    return {
      projects,
      projectsFetchError: false
    }
  } catch (e) {
    return {
      projects: [],
      projectsFetchError: true
    }
  }
}

export default IndexPage
