import './App.css';
import pickFood from './func/pickFood';
import {useState} from 'react';

function App() {
  const [res, setRes] = useState("음식")
  
  const handleSubmit = (event) => {
    var res = pickFood()
    setRes(res)
    event.preventDefault();
  }

  return (
    <div className="App">
      <h1 id="title">Food Picker</h1>
      <form onSubmit={handleSubmit}>
        <button class='button1' type='submit' >음식 뽑기</button>
      </form>
      <h1 id='result'>{res}</h1>
    </div>
  );
}

export default App;
