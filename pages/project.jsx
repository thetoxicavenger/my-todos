import React, { useState } from 'react'
import Todos from '../components/todos'
import api from '../util/api'
import TopNav from '../components/TopNav'
import styled from 'styled-components'

const PageContainer = styled.main`
    background: #386dd9;
    height: 100vh;
`

const PageHeadline = styled.h1`
    margin: 0;
    color: white;
    font-size: 32px;
`

const NavContainer = styled.div`
    padding-top: 2em;
    padding-bottom: 1em;
    padding-left: 1em;
`

const ProjectInfoContainer = styled.section`
    padding: 1.5em 3em;
`

const ProjectImg = styled.img`
    width: 3em;
    height: 3em;
    background: white;
    border-radius: 0.75em;
`

const ProjectImgContainer = styled.div`
    margin-bottom: 0.75em;
`

const TodosContainer = styled.main`
    background: white;
    height: 100vh;
    border-radius: 1.8em;
    padding: 1.5em 3em;
`


function ProjectPage({ todos, todosFetchError, project_name, project_icon }) {
    if (todosFetchError) {
        return <div>Error loading todos!</div>
    }
    const [completedIds, setCompletedIds] = useState([])
    return (
        <>
            <PageContainer>
                <NavContainer>
                    <TopNav />
                </NavContainer>
                <ProjectInfoContainer>
                    <ProjectImgContainer onClick={async () => {
                        if (completedIds.length) {
                            try {
                                await api.deleteCompleted(completedIds)
                                setCompletedIds([])
                            } catch (e) {
                                console.error('Something went wrong trying to sync completed todos.')
                                alert('Could not sync todos! Please refresh the page and try again.')
                            }
                        }

                    }}>
                        <ProjectImg src={project_icon} />
                    </ProjectImgContainer>
                    <PageHeadline>{project_name}</PageHeadline>
                </ProjectInfoContainer>
                <TodosContainer>
                    <Todos
                        todos={todos}
                        completedIds={completedIds}
                        setCompletedIds={setCompletedIds}
                    />
                </TodosContainer>
            </PageContainer>
        </>
    )
}

ProjectPage.getInitialProps = async ({ query }) => {
    try {
        const { project_name, project_icon, todos } = await api.getProjectAndTodos(query.id)
        return {
            todos,
            project_name,
            project_icon,
            todosFetchError: false
        }
    } catch (e) {
        return {
            todos: [],
            project_name: '',
            project_icon: '',
            todosFetchError: true
        }
    }
}

export default ProjectPage
