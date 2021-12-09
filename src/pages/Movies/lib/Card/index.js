
const Card = (props) => {
  const { Title: title, Poster: poster, Type: type, Year: year } = props; 
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img className="activator" src={poster === 'N/A' ? `https://via.placeholder.com/310x440?text=${title}` : poster} alt={title} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{title}</span>
        <p>{year} <span className="right">{type}</span></p>
      </div>
    </div>
    
  )
}

export default Card;