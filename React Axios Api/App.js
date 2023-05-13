

import "./App.css";
import Axios from "axios";
import {useState,useEffect} from 'react';


function App(){
  const [catFact,setCatFact] = useState("");
  const fetchTheData =()=>{
    Axios.get('https://catfact.ninja/fact').then((res)=>{
      setCatFact(res.data.fact);
    });
    
  }
useEffect(()=>{
  fetchTheData();

},[]);
 
  



  
  
  
  



  return (
    <div className="App">
      <button onClick={fetchTheData}>Generate Cat fact</button>
      <p>{catFact}</p>


    </div>
  )
}
export default App;


