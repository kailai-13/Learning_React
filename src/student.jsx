import PropTypes from 'prop-types';
import defaultProps from 'prop-types';



function Student(prop){
    return(
        <div className='Student'>
            <h1>{prop.name}</h1>
            <h1>{prop.age}</h1>
            <h1>{prop.is ? 'Yes' : 'No'}</h1>
        </div>
    )
}
Student.propTypes = {
    name:PropTypes.string,
    age:PropTypes.number,
    is:PropTypes.bool,
}

Student.defaultProps={
    name:'hi',
    age:'20',
    is:false,
}

export default Student