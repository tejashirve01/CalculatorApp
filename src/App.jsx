import { useState } from 'react'
import Display from './components/Display';
import ButtonPanel from './components/ButtonPanel'
import './App.css'


function App(){
  const[input, setInput] = useState('');

  const handleClick = (value) => {
    if(value === '='){
      setInput(eval(input).toString());
    }
    else if(value === 'C'){
      setInput('');
    }
    else{
      setInput(input + value);
    }
  }

  return (
    <div className='calculator'>
      <Display value={input} />
      <ButtonPanel onButtonClick={handleClick}/>
    </div>
  )
};

export default App;