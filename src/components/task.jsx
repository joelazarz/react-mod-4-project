import React, { Component } from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd'

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 2px;
    padding: 8px;
    margin-bottom: 8px;
    transition: background-color 0.2s ease;
    background-color: ${props =>
        props.isDragDisabled
            ? 'lightgrey'
            : props.isDragging
                ? 'lightgreen'
                : 'white'};
`

class Task extends Component {
    render() {

        const { content } = this.props.task
        const { task, index } = this.props

        const isDragDisabled = this.props.task.id === 'task-0';
        
        return (<div>
        <Draggable
            draggableId={task.id}
            index={index}
            isDragDisabled={isDragDisabled}
        >
            {(provided, snapshot) => (
            <Container
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                innerRef={provided.innerRef}
                isDragging={snapshot.isDragging}
                isDragDisabled={isDragDisabled}
            >
                {content}
            </Container>
            )}
        </Draggable></div>
        )
    }
}

export default Task;
