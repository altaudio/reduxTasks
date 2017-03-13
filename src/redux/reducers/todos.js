import _ from 'lodash'

/* eslint-disable no-shadow */
const initialState = { 
  todos: [], 
  currentlyEditingTodo: { text: '', completed: false }, 
  catLikes : 12, 
  cats : [
    {name : 'Tiddles', description : 'Tiddles by name, tiddles by nature', likes : 0, img : 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg'},
    {name : 'Ceci', description : 'Scratch and sniff', likes : 0, img : 'https://s-media-cache-ak0.pinimg.com/236x/82/e1/e0/82e1e0939f9c031d7fd9c0683e8725ca.jpg'},
    {name : 'Didi', description : 'Little kitty', likes : 0, img : 'http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg'},
    {name : 'Squishy', description : 'Big and fat', likes : 0, img : 'https://www.moillusions.com/wp-content/uploads/2016/06/fat-cat-running-580x405.jpg'}

  ],
  cat : {name : 'Tiddles', description : 'Tiddles by name, tiddles by nature.', likes : 0, img : 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg'}
}

const idForNewTodo = (todos) => _.get(_.maxBy(todos, 'id'), 'id', 0) + 1

const completeTodo = (todos, todoId) => {
  const todoIndex = _.findIndex(todos, (todo) => todo.id === todoId)

  return [
    ...todos.slice(0, todoIndex),
    { ...todos[todoIndex], completed: true },
    ...todos.slice(todoIndex + 1),
  ]
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case 'todos/UPDATE_TODO_TEXT':
      return { ...state, currentlyEditingTodo: { ...state.currentlyEditingTodo, text: action.payload } }
    case 'todos/ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { ...state.currentlyEditingTodo, id: idForNewTodo(state.todos) }],
        currentlyEditingTodo: initialState.currentlyEditingTodo,
      }
    case 'todos/DELETE_TODO':
      return { ...state, todos: _.reject(state.todos, (todo) => todo.id === action.payload) }
    case 'todos/COMPLETE_TODO':
      return { ...state, todos: completeTodo(state.todos, action.payload) }

    {/* Random Cat */}
    case 'todos/LIKE_CAT':
      return {...state, catLikes : state.catLikes + 1} 

    case 'todos/RANDOM_CAT':
      return {...state, cat : state.cats[_.random(0, state.cats.length - 1)]} 
    default:
      return state
  }
}
