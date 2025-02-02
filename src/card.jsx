import Spider from './Screenshot (389).png'

function Card(){
    return(
        <div className='card'><a href='list.jsx'>
            
            <img className='img' src ={Spider} alt="Spider" />
            <h1 className='title'>Spider-Man</h1>
            <p className='read'>Just A Friendly Neighbourhood Spider-Man</p>
            <hr></hr>


            </a>

        </div>
    )
}

export default Card