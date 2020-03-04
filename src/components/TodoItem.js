import React from 'react';

class TodoItem extends React.Component {
  render() {
    const todo = this.props.todo;
    return (
      <div>
        {todo.content}
        <span>
          {
            todo.isDone ? 'x' : null
          }
        </span>
      </div>
    )
  }
}

export default TodoItem
