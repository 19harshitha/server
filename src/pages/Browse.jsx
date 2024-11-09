import React from 'react';
import '../App.css'
import Nav from '../components/Browse/Nav';
import Movies from '../components/Browse/Movies';


const Browse = () => {
  const [categories, setCategories] = React.useState([])
  React.useEffect(() => {
  
    const categoriesFromStorage = localStorage.getItem('selectedCategories')
    const categories = JSON.parse(categoriesFromStorage)
    setCategories(categories)
  
    // console.log(categories)
}, [])


  return (
    <div className='container browse'>
<Nav/>
<h3 style={{ marginLeft:"7rem",lineHeight:"1rem"}}>Entertainment according to your choice</h3>
<div className="movies-container">
<Movies categories={categories} />
</div>
    </div>
  )
}

export default Browse