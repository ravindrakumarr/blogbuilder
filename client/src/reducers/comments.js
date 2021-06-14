import { FETCH_COMMENT, CREATE_COMMENT, UPDATE_COMMENT } from '../constants/actionTypes';

export default (comments = [], action) => {
  switch (action.type) {
    case FETCH_COMMENT:
      return action.payload;
    case CREATE_COMMENT:
      return [...comments, action.payload];
    case UPDATE_COMMENT:
        return comments.map((comment) => (comment._id === action.payload._id ? action.payload : comment));  
    default:
      return comments;
  }
};

