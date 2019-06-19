import React from 'react'

function Todo({ id, project_id, order_id, text, notes, is_completed, is_flagged }) {
    return (
        <>
            <div>
                {text}
            </div>
        </>
    )
}

export default Todo