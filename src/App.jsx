import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card.jsx'
import Student from './student.jsx'

function App() {
  const [count, setCount] = useState(0)

  return ( 
    <> 
        <div className='Card-container'>
          <Card>

          </Card>
          <Card>

          </Card>
          <Card>
            
          </Card>
          <Card>
            
          </Card>
         
          
      
        </div>
         <Student name='kailai' age='20' is='true'></Student>
         <Student name='gunal' age='20' is='true'></Student>
         <Student name='ajay' age='20' is={false}></Student>
         <Student></Student>
  </>
  )
}

export default App
