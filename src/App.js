import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState('');

  const reset = () => {
    setValue("")
  }

  const back = () => {
    setValue(value.slice(0, -1))
  }

  const evalueExpresion = () => {
    try {
      // eslint-disable-next-line
      const evaluar = eval(value)
      setValue(evaluar.toString())
    } catch (error) {
      setValue('error')
    }
  }
  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className='display'>
            <input type="text" value={value} />
          </div>
          <div>
            <input style={{color:'red'}} type="button" value="AC" onClick={reset} />
            <input style={{color:'orange'}} type="button" value="DE" onClick={back} />
            <input type="button" value="." onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="÷" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="7" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="8" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="9" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="x" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="4" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="5" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="6" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="+" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="1" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="2" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="3" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="-" onClick={e => setValue(value + e.target.value)} />
          </div>
          <div>
            <input type="button" value="00" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="0" onClick={e => setValue(value + e.target.value)} />
            <input type="button" value="=" className='equal' onClick={evalueExpresion} />
          </div>
        </form>
      </div>

    </div>
  );
}

export default App;
