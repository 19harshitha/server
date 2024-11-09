import React from 'react';
import './CategoryHeading.css';

const CategoryHeading = ({ categories,handleDeselectCategory }) => {
  ;
  return (
    <div className='category-heading'>
      <h1 className='logo'>Super app</h1>
      <h2 className='category-heading-title'>Choose your entertainment category</h2>
      <div className='selected-categories'>
        {categories &&
          categories.map((category) => (
            <div className='selected-category' key={category.id}>
              <p className='selected-category-title'>{category.name}</p>
              <span
                className='selected-category-close-icon'
                onClick={() => handleDeselectCategory(category.id)}
              >
                x
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryHeading;
