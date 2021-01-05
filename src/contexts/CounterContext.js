import { createContext } from 'react';

export const CounterContext = createContext();

export const initialState = {
  counter: 42,
};

const reducers = {
  updateCounter(state, action) {
    return {
      ...state,
      counter: action.payload,
    };
  },
};

export const counterReducer = (state, action) => reducers[action.type](state, action);
