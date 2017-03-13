import React, { Component } from 'react'
import { connect } from 'react-redux'
import { likeCat, onRandomCat } from 'redux/actions/todos'
import TodoList from 'components/todoList'

class TodolistContainer extends Component {

  render() {
    return (
      <TodoList
        catLikes={this.props.catLikes}
        onCatLike={() => this.props.dispatch(likeCat())}
        onRandomCat={() => this.props.dispatch(onRandomCat())}

        currentCat={this.props.cat}
      />
    )
  }
}


// makes this.props return state (state.todos)
export default connect((state) => state.todos)(TodolistContainer)
