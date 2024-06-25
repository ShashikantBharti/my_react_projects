import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const valueUp = () => {
    setCount(count + 1);
  };

  const valueDown = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  const valueReset = () => {
    setCount(0);
  };

  return (
    <div className='counter'>
      <h1>{count}</h1>
      <div className='cta'>
        <button onClick={valueUp}>Increase &uarr;</button>
        <button onClick={valueReset}>Reset</button>
        <button onClick={valueDown}>Decrease &darr;</button>
      </div>
    </div>
  );
}

export default App;
