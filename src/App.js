import { useState } from 'react';
import './App.css';
import Flower from "./Flower";
import Surprise from './Surprise';

function App() {
  const [ show, setShow ] = useState(false);
  const updateFlower = () => {
   setShow(!show);
  }
  return (
    <div className="App">
        <h1>Hi, Marinka!</h1>
        <button className='btn' onClick={() => updateFlower()}>{ show ? "For you" : "Click to get" }</button>  
        <p>{ show ? <Flower/> : <Surprise/> }</p>
    </div>
    
  );
}

export default App;
