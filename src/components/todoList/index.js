import React from 'react'
import Form from 'components/core/form'
import _ from 'lodash'
import Todo from './todo'

export default (props) =>
  <div>
    {_.map(props.todos, (todo) => <Todo todo={todo} key={todo.id} onTodoDeleted={props.onTodoDeleted} onTodoCompleted={props.onTodoCompleted} />)}
    <p>Add a Todo</p>
    <Form onSubmit={() => props.onTodoAdded()}>
      <input onChange={(e) => props.onUpdateTodoText(e.target.value)} value={props.currentlyEditingTodoText} />
      <button>Add</button>
    </Form>

	{/* Cat name */}
    <h1>{props.currentCat.name}</h1>

    {/* Cat image */}
    <img src={props.currentCat.img} width='25%' height='25%' ></img>
  
    {/* Cat description */}
    <p>{props.currentCat.description}</p>
  
    {/* Number of likes */}
    <p>Likes: {props.currentCat.likes}</p>
  
    {/* Like Button */}
    <button onClick={() => props.onCatLike()}>Like</button>
  
    {/* Random Cat Button */}
    <button onClick={() => props.onRandomCat()}>Random Cat</button>
  </div>
