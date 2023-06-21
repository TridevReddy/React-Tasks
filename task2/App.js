import React,{useState} from 'react'
import './App.css';
const App = () => {
  const [input,setInput] = useState('');
  const [result,setResult] = useState(0);
  const handler = e =>{
    setInput(e.target.value);
  }
  return (
    <div className='class1'>
      <center>
      <div className='class2' >
      <input type='text' value={input} name='input' onChange={handler} ></input>
      {/* <br></br> */}
      <h3>{result}</h3>
      </div>
      <div className='class3'>
      <tr>
        <td><p onClick={() => setInput(input+'7')}>7</p></td>
        <td><p onClick={() => setInput(input+'8')}>8</p></td>
        <td><p onClick={() => setInput(input+'9')}>9</p></td>
        <p className='sclass1' onClick={() => setInput(input - input)}>xx</p>
      </tr>
      <tr>
        <td><p onClick={() => setInput(input+'4')}>4</p></td>
        <td><p onClick={() => setInput(input+'5')}>5</p></td>
        <td><p onClick={() => setInput(input+'6')}>6</p></td>
      </tr>
      </div>
      </center>
    </div>
  )
}

export default App