import { createContext } from 'react';

export const CounterContext = createContext();

export const initialState = {
  counter: 42,
};

export const counterReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_COUNTER':
      return {
        ...state,
        counter: payload,
      };
    default:
      return state;
  }
};
