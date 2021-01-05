import { useReducer } from 'react';
import { CounterContext, initialState, counterReducer } from '../contexts/CounterContext';
import Counter from './Counter';

function App() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      <div className="app">
        <h1 className="app__title">Счётчик</h1>
        <p className="app__subtitle">React: Context + useReducer</p>
        <Counter />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
