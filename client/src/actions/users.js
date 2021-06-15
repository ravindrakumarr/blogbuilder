import { FETCH_USERS, CREATE_USER} from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.getUsers();

    dispatch({ type: FETCH_USERS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = (user) => async (dispatch) => {
  try {
    const { data } = await api.createUser(user);

    dispatch({ type: CREATE_USER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

