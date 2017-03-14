
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { likeCat, onRandomCat } from 'redux/actions/cats'
import RandomCat from 'components/cats'

class RandomCatContainer extends Component {

  render() {
    return (
      <RandomCat
        onCatLike={() => this.props.dispatch(likeCat())}
        onRandomCat={() => this.props.dispatch(onRandomCat())}
        currentCat={this.props.cat}
      />
    )
  }
}

// makes this.props return state (state.todos)
export default connect((state) => state.cats)(RandomCatContainer)
