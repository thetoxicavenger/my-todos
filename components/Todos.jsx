import React from 'react'
import Todo from './Todo'

function Todos({ todos }) {
    const todosList = todos.map(todo => {
        return (
            <Todo key={todo.id} {...todo} />
        )
    })
    return (
        <>
            <h1>Project Name</h1>
            {todosList}
        </>
    )
}

export default Todos