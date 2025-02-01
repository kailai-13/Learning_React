function Button(){
    let count = 0;
    const handleClick =(e)=>e.target.style.display= 'none';
      


    return (
        <>
       
        <button onClick={(e)=>handleClick(e)}>Click me</button>

        <p>You Hit Me {count} times</p>
        </>
    )

}

export default Button;