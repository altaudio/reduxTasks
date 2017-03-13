import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo, completeTodo, deleteTodo, updateTodoText, likeCat, onRandomCat } from 'redux/actions/todos'
import TodoList from 'components/todoList'

class TodolistContainer extends Component {

  render() {
    return (
      <TodoList
        //this.props is state.todos
        todos={this.props.todos}
        currentlyEditingTodoText={this.props.currentlyEditingTodo.text}
        onTodoAdded={(todo) => this.props.dispatch(addTodo(todo))}
        onTodoDeleted={(id) => this.props.dispatch(deleteTodo(id))}
        onTodoCompleted={(id) => this.props.dispatch(completeTodo(id))}
        onUpdateTodoText={(todo) => this.props.dispatch(updateTodoText(todo))}

        catLikes={this.props.catLikes}
        onCatLike={() => this.props.dispatch(likeCat())}
        onRandomCat={() => this.props.dispatch(onRandomCat())}

        currentCat={this.props.cat}
      />
    )
  }
}


//makes this.props return state (state.todos)
export default connect((state) => state.todos)(TodolistContainer)
