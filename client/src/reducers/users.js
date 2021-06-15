import { FETCH_USERS, CREATE_USER } from '../constants/actionTypes';

export default (users = [], action) => {
  switch (action.type) {
    case FETCH_USERS:
      return action.payload;
    case CREATE_USER:
      return [...users, action.payload];
    default:
      return users;
  }
};

