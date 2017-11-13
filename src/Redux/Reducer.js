const UPDATE_PLAYERS = 'UPDATE_PLAYERS';

let initialState = {
  players:0
}
export default function reducer(state = initialState, action){
  switch(action.type) {
    case UPDATE_PLAYERS:
      return Object.assign({}, state, {players: action.val})
    default:
      return Object.assign({}, state)
  }
}
