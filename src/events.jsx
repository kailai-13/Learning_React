import {React , useState} from 'react';

function Events() {

    const [name,setName]=useState('Guest');
    const [age, setAge] = useState(10);
    const [comment,setComment]=useState('');
    const [payment,setPay]=useState('');

    const [shipping,setShip]=useState('');
    const handleChange=(e)=>{
        setName(e.target.value);
    }
    const handleAgeChange=(e)=>{
        setAge(e.target.value);
    }
    const handleCommentChange=(e)=>{
        setComment(e.target.value)
    }
    const handlePayment=(e)=>{
        setPay(e.target.value)
    }
    const handleShip =(e)=>{
        setShip(e.target.value)
    }








    return(
        <div>
            <input onChange={handleChange} placeholder='Enter Name'/>
            <h1>Hello {name}</h1>
            <input type='number' onChange={handleAgeChange} placeholder='age'/>
            <h1>age= {age}</h1>
            <input type='textarea' onChange={handleCommentChange} placeholder='comments'/>
            <h1>comments: {comment}</h1>

            <select value={payment} onChange={handlePayment}>
                <option value='credit'>credit</option>
                <option value='debit'>debit</option>
                <option value='cash'>cash</option>
            </select>
            <h1>payment: {payment}</h1>


            <label>
                <input type='radio' value='pick' checked={shipping==='pick'} onChange={handleShip} />
                pick
            </label><br/>
            <label>
                <input type='radio'  value='cash' checked={shipping==='cash'} onChange={handleShip} />
                cash
            </label>

            <p>ship:{shipping}</p>


        </div>
    )
}

export default Events;