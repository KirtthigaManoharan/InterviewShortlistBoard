import React from "react";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import Column from "./column";

const Container = styled.div`
  display: flex;
`;

class InnerList extends React.PureComponent {
  render() {
    const { column, taskMap, index } = this.props;
    const tasks = column.taskIds.map((taskId) => taskMap[taskId]);
    return <Column column={column} tasks={tasks} index={index} />;
  }
}
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initialData: {},
    };
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.props.onDragEnd}>
        <Droppable
          droppableId="all-columns"
          direction="horizontal"
          type="column"
        >
          {(provided) => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {Object.keys(this.props.initialData).length > 0 &&
                this.props.initialData.columnOrder.map((columnId, index) => {
                  const column = this.props.initialData.columns[columnId];
                  return (
                    <InnerList
                      key={column.id}
                      column={column}
                      taskMap={this.props.initialData.tasks}
                      index={index}
                    />
                  );
                })}
            </Container>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default Board;
