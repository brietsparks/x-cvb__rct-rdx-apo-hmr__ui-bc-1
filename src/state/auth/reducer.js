import { cloneDeep } from 'lodash';

import { actionTypes } from './constants';

const defaultState = {
};

const authReducer = (initialState = defaultState, action) => {
  const state = cloneDeep(initialState);
  const payload = action.payload;

  switch (action.type) {
  }

  return state;
};

export default authReducer;