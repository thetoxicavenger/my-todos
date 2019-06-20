import React from 'react'
import Todos from '../components/todos'
import api from '../util/api'

function ProjectPage({ todos, todosFetchError, project_name }) {
    if (todosFetchError) {
        return <div>Error loading todos!</div>
    }
    return (
        <>
            <h1>{project_name}</h1>
            <Todos todos={todos} />
        </>
    )
}

ProjectPage.getInitialProps = async ({ query }) => {
    try {
        const { project_name, todos } = await api.getProjectAndTodos(query.id)
        return {
            todos,
            project_name,
            todosFetchError: false
        }
    } catch (e) {
        return {
            todos: [],
            project_name: '',
            todosFetchError: true
        }
    }
}

export default ProjectPage
