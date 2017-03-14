import { FETCH_POSTS, FETCH_POST, FETCH_CURSES, SEARCH_CURSES_SUB, SORT_CURSES} from '../actions/index';

const INITIAL_STATE = { all: [], post: null, sub: null ,sort_word:null};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_POST:
    return { ...state, post: action.payload.data };
  case FETCH_POSTS:
    return { ...state, all: action.payload.data };
  case SEARCH_CURSES_SUB:
    console.log("55558888555");
    return { ...state, all: action.payload.data };
  // case SORT_CURSES:
  //     console.log("sssoooorrrttt",action.payload);
  //     return { ...state, all: action.payload.data };

  default:
    return state;
  }
}
