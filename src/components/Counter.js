import { useState } from 'react';
import { useDispatch } from '../hooks/useDispatch';
import { CounterContext } from '../contexts/CounterContext';

function Counter() {
  const { state, dispatch } = useDispatch(CounterContext);
  const { counter } = state;
  const [number, setNumber] = useState(5);

  return (
    <div className="counter">
      <span className="counter__value">Текущее значение: { counter }</span>
      <hr />
      <button
        className="couter__button"
        onClick={ () => dispatch('updateCounter', counter - 1) }
      >
        -1
      </button>
      <button
        className="couter__button"
        onClick={ () => dispatch('updateCounter', counter + 1) }
      >
        +1
      </button>
      <hr />
      <input
        className="couter__input"
        type="number"
        value={ number }
        onChange={ (e) => setNumber(+e.target.value)}
      />
      <button
        className="couter__button"
        onClick={ () => dispatch('updateCounter', counter + number) }
      >
        Добавить
      </button>
    </div>
  );
}

export default Counter;
