import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [result, setResult] = useState(0);
  const [history, setHistory] = useState('');
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operator, setOperator] = useState(null);

  console.log(num1, num2, operator);

  const setNumber = (e) => {
    let number = Number(e.target.innerText);
    if (!operator) {
      setNum1(num1 * 10 + number);
    } else {
      setNum2(num2 * 10 + number);
    }
    setResult(String(num1) + operator + String(num2));
  };

  const calculate = () => {
    switch (operator) {
      case '+':
        setResult(Number(num1) + Number(num2));
        break;
      case '-':
        setResult(Number(num1) - Number(num2));
        break;
      case '*':
        setResult(Number(num1) * Number(num2));
        break;
      case '/':
        setResult(Number(num1) / Number(num2));
        break;
      case '%':
        setResult(Number(num1) + Number(num2));
        break;
    }
  };

  return (
    <div className='calculator'>
      <div className='display'>
        <div className='history'>{history}</div>
        <div className='result'>{result}</div>
      </div>
      <div className='buttons'>
        <button className='operator'>AC</button>
        <button
          className='operator'
          onClick={(e) => setOperator(e.target.innerText)}
        >
          %
        </button>
        <button className='operator' onClick={setOperator}>
          /
        </button>
        <button className='operator'>&larr;</button>
        <button className='operator' onClick={setNumber}>
          7
        </button>
        <button className='operator' onClick={setNumber}>
          8
        </button>
        <button className='operator' onClick={setNumber}>
          9
        </button>
        <button className='operator' onClick={setOperator}>
          *
        </button>
        <button className='operator' onClick={setNumber}>
          4
        </button>
        <button className='operator' onClick={setNumber}>
          5
        </button>
        <button className='operator' onClick={setNumber}>
          6
        </button>
        <button className='operator' onClick={setOperator}>
          -
        </button>
        <button className='operator' onClick={setNumber}>
          1
        </button>
        <button className='operator' onClick={setNumber}>
          2
        </button>
        <button className='operator' onClick={setNumber}>
          3
        </button>
        <button className='operator' onClick={setOperator}>
          +
        </button>
        <button className='operator' onClick={setNumber}>
          .
        </button>
        <button className='operator' onClick={setNumber}>
          0
        </button>
        <button className='operator equal' onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
