import { FETCH_SUBSCRIBERS, CREATE_SUBSCRIBER } from '../constants/actionTypes';

export default (subscribers = [], action) => {
  switch (action.type) {
    case FETCH_SUBSCRIBERS:
      return action.payload;
    case CREATE_SUBSCRIBER:
      return [...subscribers, action.payload]; 
    default:
      return subscribers;
  }
};

