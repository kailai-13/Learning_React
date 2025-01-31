import propTypes from 'prop-types'

function List(props){
    const names=props.item
    const cat=props.category
    const listitems=names.sort((a,b)=> b.mark - a.mark) //marks sort
    const list1=listitems.map( name => <li key={name.id}>{name.name} : <b>{name.mark}</b></li>);

    return(
        <>
        <h1>{cat}</h1>
        <ol>{list1}</ol>
        </>

    )
}


List.propTypes = {
    item: propTypes.arrayOf(propTypes.shape({
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      marks: propTypes.number.isRequired
    })).isRequired,
    category: propTypes.string.isRequired,
  }
List.defaultProps={
    item:[],
    category:'List',
}
export default List