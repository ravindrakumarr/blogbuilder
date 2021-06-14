import { FETCH_COMMENT, CREATE_COMMENT, UPDATE_COMMENT } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getComment = () => async (dispatch) => {
  try {
    const { data } = await api.fetchComment();

    dispatch({ type: FETCH_COMMENT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createComment = (comment) => async (dispatch) => {
  try {
    const { data } = await api.createComment(comment);

    dispatch({ type: CREATE_COMMENT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const updateComment = (comment) => async (dispatch) => {
  try {
    const { data } = await api.updateComment(comment);

    dispatch({ type: UPDATE_COMMENT, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};






