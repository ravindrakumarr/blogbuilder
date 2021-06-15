import { combineReducers } from 'redux';

import posts from './posts';
import comments from './comments';
import users from './users';

export const reducers = combineReducers({ posts, comments, users });
