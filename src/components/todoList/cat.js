import React from 'react'

// React random cat component
export default (props) => {
  return (
    <div>
      {/* Cat name */}
      <h1>Tiddles</h1>

      {/* Cat image */}
      <img src="https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg" height="25%" width="25%" />

      {/* Cat description */}
      <p>Tiddles by name, tiddles by nature</p>

      {/* Number of likes */}
      <p>Likes: 0</p>

      {/* Like Button */}
      <button onClick={() => props.onCatLike}>Like</button>

      {/* Random Cat Button */}
      <button>Random Cat</button>

    </div>

  )
}
