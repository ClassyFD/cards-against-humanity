const UPDATE_PLAYERS = 'UPDATE_PLAYERS',
      SET_USER = 'SET_USER';

let initialState = {
  players:0,
  user: null,
}
export default function reducer(state = initialState, action){
  console.log(action.type)
  switch(action.type) {
    case UPDATE_PLAYERS:
    console.log(action.val)
      return Object.assign({}, state, {players: action.val});
    case SET_USER:
      return Object.assign({}, state, {user: action.val})
    default:
      return Object.assign({}, state)
  }
}
