import { useContext } from 'react';

export const useDispatch = (context) => {
  const { state, dispatch: nativeDispatch } = useContext(context);
  return {
    state,
    dispatch(type, payload) {
      nativeDispatch({
        type,
        payload,
      });
    },
  };
};
