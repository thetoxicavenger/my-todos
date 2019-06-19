import React from 'react'
import Projects from '../components/Projects'
import api from '../util/api'

function IndexPage({ projects, projectsFetchError }) {
  if (projectsFetchError) {
    return <div>Error loading projects!</div>
  }
  return (
    <>
      <h1>Projects</h1>
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
