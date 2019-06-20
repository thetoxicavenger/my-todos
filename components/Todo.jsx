import React from 'react'
import styled from 'styled-components'

const TodoContainer = styled.div`
    display: flex;
    justify-content: space-between;
`

const TodoText = styled.label`
    display: block;
    font-size: 1.4em;
    text-decoration: ${props => props.is_completed ? 'line-through' : 'none'}
`

const TodoCheckbox = styled.div`
    border: 0.2em solid #d9d9d9;
    border-radius: 0.5em;
    width: 1.75em;
    height: 1.75em;
    position: relative;
    cursor: pointer;
`

const CheckMark = styled.img`
    position: absolute;
    width: 1.75em;
`


function Todo({ id, project_id, order_id, text, notes, is_completed, is_flagged }) {
    const checkMark = is_completed && <CheckMark src="/static/round-check-black.png" alt="rounded black check mark" />
    return (
        <>
            <TodoContainer>
                <TodoText>{text}</TodoText>
                <TodoCheckbox>
                    {checkMark}
                </TodoCheckbox>
            </TodoContainer>
        </>
    )
}

export default Todo