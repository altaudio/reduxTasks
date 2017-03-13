import _ from 'lodash'

/* eslint-disable no-shadow */
const initialState = {
  cats: [
    { name: 'Tiddles', description: 'Tiddles by name, tiddles by nature', likes: 0, img: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg' },
    { name: 'Ceci', description: 'Scratch and sniff', likes: 0, img: 'https://s-media-cache-ak0.pinimg.com/236x/82/e1/e0/82e1e0939f9c031d7fd9c0683e8725ca.jpg' },
    { name: 'Didi', description: 'Little kitty', likes: 0, img: 'http://www.rd.com/wp-content/uploads/sites/2/2016/04/01-cat-wants-to-tell-you-laptop.jpg' },
    { name: 'Squishy', description: 'Big and fat', likes: 0, img: 'https://www.moillusions.com/wp-content/uploads/2016/06/fat-cat-running-580x405.jpg' }

  ],
  cat: { name: 'Tiddles', description: 'Tiddles by name, tiddles by nature.', likes: 0, img: 'https://i.ytimg.com/vi/tntOCGkgt98/maxresdefault.jpg' }
}

export default function todos(state = initialState, action) {
  switch (action.type) {

    case 'todos/LIKE_CAT':
      return { ...state, catLikes: state.catLikes + 1 }

    case 'todos/RANDOM_CAT':
      return { ...state, cat: state.cats[_.random(0, state.cats.length - 1)] }
    default:
      return state
  }
}
