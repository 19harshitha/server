import React from 'react'
import { useState, useEffect } from 'react';
import profileImg from '../../assets/profile.png'
import './Profile.css'


const Profile = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([])


  
    useEffect(() => {
        // get data from local storage
        const userFromStorage = localStorage.getItem('userData')
        const user = JSON.parse(userFromStorage)
        const categoriesFromStorage = localStorage.getItem('selectedCategories')
        const categories = JSON.parse(categoriesFromStorage)
        setCategories(categories)
        setUser(user);
        setLoading(false)
        // console.log(categories)
    }, [])


            
const handleDeselectCategory = (id) => {
  const newCategories = categories.filter((category) => category.id !== id)
  setCategories(newCategories)
  localStorage.setItem('selectedCategories', JSON.stringify(newCategories))
}

  return (
    <>

    {
!loading && (
 
      <div className='profile-container'>
        <div className="profile">
          <div className="profile__img">
            <img src={profileImg} alt="profile"  height={200}/>
          </div>
          <div className="profile__info">
            <p className='user'>{user.name}</p>
            <p className='user'>{user.email}</p>
            <p className='username'>{user.userName}</p>

            <div className="show-categories">
            {categories &&
          categories.map((category) => (
            <div className='show-category' key={category.id}>
              <p className='show-category-title'>{category.name}</p>
              <span
                className='show-category-close-icon'
                onClick={() => handleDeselectCategory(category.id)}
              >
                x
              </span>
            </div>
          ))}
            </div>

          </div>

        </div>
      </div>
 
)
    }
    </>
  )
}

export default Profile