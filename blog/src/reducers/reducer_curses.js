import { FETCH_POSTS, FETCH_POST ,SEARCH_CURSES, SORT_CURSES  } from '../actions/index';

const INITIAL_STATE = { all: [], post: null, sortWord: null };

export default function(state = INITIAL_STATE, action) {
console.log("action",action);
  switch(action.type) {
  case FETCH_POST:
    return { ...state, post: action.payload.data };
  case FETCH_POSTS:
    return { ...state, all: action.payload.data };
  case SEARCH_CURSES:
    return { ...state, all: action.payload.data };
  case SORT_CURSES:
        console.log("sssoooorrrttt",action.payload);
        return { ...state, sortWord: action.payload.data };

  default:
    return state;
  }
}
