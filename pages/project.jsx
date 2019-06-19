import React from 'react'
import Todos from '../components/todos'
import api from '../util/api'
// import styled from 'styled-components'


function ProjectPage({ todos, todosFetchError }) {
    if (todosFetchError) {
        return <div>Error loading todos!</div>
    }
    return (
        <>
            <Todos todos={todos} />
        </>
    )
}

ProjectPage.getInitialProps = async ({ req, query }) => {
    const isServer = !!req
    try {
        const todos = await api.getProjectTodos(isServer ? req.query.id : query.id)
        return {
            todos,
            todosFetchError: false
        }
    } catch (e) {
        return {
            todos: [],
            todosFetchError: true
        }
    }
}

export default ProjectPage
