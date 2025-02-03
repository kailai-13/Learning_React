import React from 'react';
import { useState } from 'react';

function Use() {
  const [name, setName] = useState('Guest');
  let count = 0;
  const update = () => {
    if (count<3) {
        count++;
        setName('Kailai');
        }
    else{
            setName('nii than da kailai vidu da');
           
        }
    
  }
  const [age, setage]=useState(0);
  const addage=()=>{
    setage(age+1);
  }
  const subage=()=>{
    setage(age-1);
  }

  const [empstatus,setemp]=useState(false);
  const toggle=()=>{
    setemp(!empstatus);
  }

  const [count1, setCount1] = useState(0);
  const add=()=>{
    setCount1(c=>c+5);

  }
  const sub=()=>{
    setCount1(c=>c-1);
  }
  const reset=()=>{
    setCount1(count=0);
  }

  return (
    <div>
      <h1>Hello {name}</h1>
      <button onClick={update}>Click me if you are kailai</button>
      <h1>Your Age: {age}</h1>
      <button onClick={addage}>add age</button>
      <button onClick={subage}>minus age</button>
      <h1>Emp Status {empstatus?'yes':'no'}</h1>
      <button onClick={toggle}>Toggle Emp Status</button>


      <h1>{count1}</h1>
      <button onClick={add}>+</button>
      <button onClick={sub}>-</button>
      <button onClick={reset}>restart</button>

    </div>
  )
}

export default Use;