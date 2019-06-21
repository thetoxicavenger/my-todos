import React from 'react'
import styled from 'styled-components'

const PageContainer = styled.div`
    padding-left: 1.5em;
    padding-right: 0.1em;
    background: #ffffff;
    height: 100vh;
    padding-top: 1em;
`

const NavContainer = styled.nav`
    display: flex;
    justify-content: space-around;
`

const NewTaskHeadline = styled.h1`
    margin: 0;
`

const CancelNewTaskBtn = styled.a`
    display: block;
    text-decoration: none;
    color: black;
    font-size: 1.5em;
`

function NewTodoPage({ project_id }) {
    return (
        <PageContainer>
            <NavContainer>
                <NewTaskHeadline>New Task</NewTaskHeadline>
                <CancelNewTaskBtn href={`/project?id=${project_id}`}>x</CancelNewTaskBtn>
            </NavContainer>
        </PageContainer>
    )
}

NewTodoPage.getInitialProps = ({ query }) => {
    console.log(query)
    return {
        project_id: query.project_id
    }
}

export default NewTodoPage