import { useState } from "react";


function ColorPicker() {
    const [color, setColor]=useState('#ffff');
    const handleColor = (e)=>{
        setColor(e.target.value);
    }

    return(
        <>
       

        <h1 >Pick A Color</h1>
        <div className="container" style={{background:color}}>
        <p>you picked this color: {color}</p>
        </div><br/>

        <div className="color-container">
        <label htmlFor='color'>Color</label><br/>
        <input type='color' value={color} onChange={handleColor}/>
        
        
        </div>




        </>
    )}

    export default ColorPicker;