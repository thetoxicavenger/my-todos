import React from 'react'
import Todo from './Todo'

function Todos({ todos, completedIds, setCompletedIds }) {
    if (!todos.length) {
        return <h1>You're all done! Naht.</h1>
    }
    const todosList = todos.map(todo => {
        return (
            <Todo
                key={todo.id}
                {...todo}
                addToCompletedArr={id => setCompletedIds([...completedIds, id])}
                removeFromCompletedArr={id => setCompletedIds(completedIds.filter(completedId => completedId !== id))}
            />
        )
    })
    return (
        <>
            {todosList}
        </>
    )
}

export default Todos