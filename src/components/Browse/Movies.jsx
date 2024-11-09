
import './Movies.css'
import Card from './Card';

const Movies = ({categories}) => {

  return (
    <>
    
      {categories.map((category) => (
        <div key={category.id}>
          <h4 className="movies-genre">{category.name}</h4>
          <div className="movies">
  
      <Card selectedGenre={category.name} genreId={category.genreId} />

          </div>
        </div>
      ))}
    </>
  )
}

export default Movies
