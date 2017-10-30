import { combineReducers } from 'redux'
import { REQUEST, RECEIVE } from '../actions'

function items(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.items
      });
    default:
      return state
  }
}

function fetchItems(state = {}, action) {

}

const rootReducer = combineReducers({
  todos,
  visibilityFilter
})

export default rootReducer
