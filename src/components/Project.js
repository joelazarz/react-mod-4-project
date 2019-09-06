import React from 'react'
import ReactDOM from 'react-dom'
import '@atlaskit/css-reset'
import { DragDropContext } from 'react-beautiful-dnd'
import styled from 'styled-components'
import initialData from './initial-data'
import Column from './column'

const Container = styled.div`
    display:flex;
`

class Project extends React.Component {
    state = {
        tasks: {},
        columns: {
            'column-1': {
                id: 'column-1',
                title: 'To-Do',
                taskIds: [],
            },
            'column-2': {
                id: 'column-2',
                title: 'In-Progress',
                taskIds: [],
            },
            'column-3': {
                id: 'column-2',
                title: 'Complete',
                taskIds: [],
            },
        },
        columnOrder: ['column-1', 'column-2']
    }

    componentDidMount(){
        let projectTasks = this.props.tasks.filter(task => task.project_id === this.props.project.id)
        let newTasksState = {}
        projectTasks.forEach((task,i) => {
            newTasksState[`task-${i}`] = {id: task.id, content: task.description}
        })
        this.setState({tasks: newTasksState})
        // this.setState({columns: {...this.state.columns, 'column-1': Object.keys(this.state.tasks) }})

    }

    onDragEnd = result => {
        const { destination, source, draggableId } = result

        if (!destination) {
            return
        }   
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return
        }

        const start = this.state.columns[source.droppableId]
        const finish = this.state.columns[destination.droppableId]

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds)
            newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, draggableId)

            const newColumn = {
                ...start,
                taskIds: newTaskIds
            }
            
            const newState = {
                ...this.state,
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn
                }
            }
            
            this.setState(newState)
            return
        }


    // moving tasks from one list to another
    const startTaskIds = Array.from(start.taskIds)
    startTaskIds.splice(source.index, 1)
    const newStart = {
        ...start,
        taskIds: startTaskIds
    }

    const finishTaskIds = Array.from(finish.taskIds)
    finishTaskIds.splice(destination.index, 0, draggableId)
    const newFinish = {
        ...finish,
        taskIds: finishTaskIds
    }

    const newState = {
        ...this.state,
        columns: {
            ...this.state.columns,
            [newStart.id]: newStart,
            [newFinish.id]: newFinish
        }
    }
    
    this.setState(newState)
}

render() {
    return (
    <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
            {this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId]
            const tasks = column.taskIds.map(
            taskId => this.state.tasks[taskId]
            )

            return (
            console.log(tasks),
            <Column key={column.id} column={column} tasks={tasks} />
            )
            })}
        </Container>
    </DragDropContext>
    )
    }
}

// const rootElement = document.getElementById('root')
// ReactDOM.render(<Project />, rootElement)

export default Project
