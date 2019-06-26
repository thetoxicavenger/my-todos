import React, { useState } from 'react'
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
    const [newTodo, setNewTodo] = useState("")
    return (
        <PageContainer>
            <NavContainer>
                <NewTaskHeadline>New Task</NewTaskHeadline>
                <CancelNewTaskBtn href={`/project?id=${project_id}`}>x</CancelNewTaskBtn>
            </NavContainer>
            <form method="POST" action="/api/todos">
                <div>
                    <label>What are you planning?</label>
                </div>
                <div>
                    <input name="text" type="text" value={newTodo} onChange={e => setNewTodo(e.target.value)} />
                </div>
                <input name="project_id" type="text" hidden readOnly value={project_id} />
                <div>
                    <input type="Submit" value="Create" readOnly/>
                </div>
            </form>
        </PageContainer>
    )
}

NewTodoPage.getInitialProps = ({ query }) => {
    return {
        project_id: query.project_id
    }
}

export default NewTodoPage