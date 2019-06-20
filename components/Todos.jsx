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
            {todosList}
        </>
    )
}

export default Todos