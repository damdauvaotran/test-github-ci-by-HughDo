import React from 'react';
import TodoItem from './TodoItem'

class TodoList extends React.Component {
  state = {
    todoList: [
      {
        content: 'a',
        isDone: false
      }
    ]
  }


  addTodo = () => {
    const temp = this.state.todoList;
    temp.push({
      content: 'Something',
      isDone: false
    })
    this.setState({
      todoList: temp
    })
  }

  renderTodoItem=(todo)=> {
    return <TodoItem todo={todo}></TodoItem>
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={this.addTodo} >Add todo</button>
        </div>
        {
          this.state.todoList.map(this.renderTodoItem)
        }
      </div>
    )
  }
}

export default TodoList
