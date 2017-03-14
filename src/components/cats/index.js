import React from 'react'
import Cat from './cat'

export default (props) =>
  <div>
    <Cat
      onCatLike={props.onCatLike}
      onRandomCat={() => props.onRandomCat()}
      currentCat={props.currentCat}
    />
  </div>
