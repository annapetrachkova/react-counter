import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "./toolkitRedux/toolkitReducer";

function App() {
  const count = useSelector(state => state.toolkit.count);
  const dispatch = useDispatch()

  return (
    <div className="App">
          <h1>Счетчик {count}</h1>
          <button onClick={() => dispatch(decrement())}>-</button>
          <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
}

export default App;
