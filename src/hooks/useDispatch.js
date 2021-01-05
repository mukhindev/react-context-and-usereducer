import { useContext } from 'react';

export const useDispatch = (context) => {
  const { dispatch: nativeDispatch } = useContext(context);
  return {
    dispatch(type, payload) {
      nativeDispatch({
        type,
        payload,
      });
    },
  };
};
