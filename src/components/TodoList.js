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
      isDone: true
    })
    this.setState({
      todoList: temp
    })
  }

  renderTodoItem=(todo)=> {
    return <TodoItem todo={todo}></TodoItem>
  }

  render() {
    const list  = []
    for (const todo of this.state.todoList){
      list.push(this.renderTodoItem(todo))
    }
    return (
      <div>
        <div>
          <button onClick={this.addTodo} >Add todo</button>
        </div>
        {
          list
        }
      </div>
    )
  }
}

export default TodoList
