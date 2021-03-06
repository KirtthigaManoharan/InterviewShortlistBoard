import React,{Component} from "react";
import styled from "styled-components";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./task";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDraggingOver ? "lightgrey" : "inherit"};
  flex-grow: 1;
  min-height: 100px;
`;

class InnerList extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.tasks !== this.props.tasks;
  }
  render() {
    return (
      Object.keys(this.props.tasks).length > 0 &&
      this.props.tasks &&
      this.props.tasks.map((task, index) => (
        <Task key={task.id} task={task} index={index} />
      ))
    );
  }
}

export default class Column extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.column.id} index={this.props.index}>
        {(provided) => (
          <Container {...provided.draggableProps} ref={provided.innerRef}>
            <Title {...provided.dragHandleProps}>
              {this.props.column.title} - {this.props.tasks.length}
            </Title>
            <Droppable droppableId={this.props.column.id} type="task">
              {(providedDroppable, snapshot) => (
                <TaskList
                  ref={providedDroppable.innerRef}
                  {...providedDroppable.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  <InnerList tasks={this.props.tasks} />
                  {providedDroppable.placeholder}
                </TaskList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}
