import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import CursesReducer from './reducer_curses';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  posts: PostsReducer,
  curses: CursesReducer,
  form: formReducer,
  sub: PostsReducer,
  // sortWord: CursesReducer,
});

export default rootReducer;
