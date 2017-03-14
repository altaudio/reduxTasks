import React from 'react'

export default (props) =>
  <div>
    {/* Cat name */}
    <h1>{props.currentCat.name}</h1>

    {/* Cat image */}
    <img src={props.currentCat.img} width="25%" height="25%" />

    {/* Cat description */}
    <p>{props.currentCat.description}</p>

    {/* Number of likes */}
    <p>Likes: {props.currentCat.likes}</p>

    {/* Like Button */}
    <button onClick={() => props.onCatLike()}>Like</button>

    {/* Random Cat Button */}
    <button onClick={() => props.onRandomCat()}>Random Cat</button>
  </div>
