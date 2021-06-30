import { FETCH_SUBSCRIBERS, CREATE_SUBSCRIBER } from '../constants/actionTypes';

import * as api from '../api/index.js';

export const getSubscribers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchSubscribers();

    dispatch({ type: FETCH_SUBSCRIBERS, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createSubscriber = (subscriber) => async (dispatch) => {
  try {
    const { data } = await api.createSubscriber(subscriber);

    dispatch({ type: CREATE_SUBSCRIBER, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
