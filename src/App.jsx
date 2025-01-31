import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card.jsx'
import Student from './student.jsx'
import List from './list.jsx'
function App() {
  const [count, setCount] = useState(0)
  const marks=[{id:1,name:'ajay',mark:98},
                {id:2,name:'KAILAI',mark:78},
                {id:3,name:'gunal',mark:28},
                {id:4,name:'anu',mark:'90'}];
  const hello=[{id:1,name:'ajay',mark:98},
                {id:2,name:'KAILAI',mark:78},
                {id:3,name:'gunal',mark:28},
                {id:4,name:'anu',mark:92}];

  return ( 
    <> 
      <List item={marks} category='Class'></List>
      <List item={hello} category='Class B'></List>

  </>
  )
}

export default App
