import React from 'react'
import './App.css';
const App = () => {
  const  WordCount=()=>{
    var text = document.getElementById("text").value;
 var count = 0;
 var split = text.split(' ');
 for (var i = 0; i < split.length; i++) {
  if (split[i] !== "") {
   count ++;
  }
 }
 document.getElementById("Word").innerHTML = "WordCounter: "+count;
  }
  return (
    <div className="Container">
      <h1>Responsive Paragraph word Counter</h1>
      <textarea  rows="8" cols="45" id="text" onInput={WordCount}> </textarea>
      <p id="Word">WordCounter:{WordCount}</p>
    </div>
  )
}

export default App