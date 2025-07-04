import { useState } from 'react';
import './App.css'

function App() {
  let randomSon=Math.floor(Math.random()*90+10);
  let [son,setSon]=useState(randomSon);
  let [korin,setKorin]=useState(true);
  let [yozuv,setYozuv]=useState("");
  function handle(e){
    setYozuv(e.target.value)
  }
  return (
    <div>
      <h2>Random son</h2>
      <div className="ota">
      <button className='btn' onClick={()=> setSon(son+1)}>+</button>
      <h1>{son}</h1>
      <button className='btn' onClick={()=> setSon(son-1)}>-</button>
      </div>
      <hr />
      <h2>Hidden Component</h2>
      <button onClick={()=>setKorin(false)}>Hidden</button>
      <button onClick={()=>setKorin(true)}>Show</button>
      <div className="box" style={{display:korin==true?"block":"none"}}>
        <p>Hello my name is marslikbola</p>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrTFrhr_-pYR74jUgOy7IerAoHAX3zPIZZcg&s" alt="df" width={400} />
      </div> 
      <hr />
      <h2>Input change</h2>
      <input type="text" placeholder='yozing..' onChange={handle} />
      <h1><b>Your text :</b> {yozuv} </h1>

      
    </div>
  )
}

export default App
