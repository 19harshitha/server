import React, { useState} from "react";
import "../App.css";
import CategoryHeading from "../components/CategroyLeft/CategoryHeading";
import SelectCategories from "../components/CategoryRight/SelectCategories";

import category1 from "../assets/category1.png";
import category2 from "../assets/category2.png";
import category3 from "../assets/category3.png";
import category4 from "../assets/category4.png";
import category5 from "../assets/category5.png";
import category6 from "../assets/category6.png";
import category7 from "../assets/category7.png";
import category8 from "../assets/category8.png";
import category9 from "../assets/category9.png";

const categoriesArray = [
  {
    id: 1,
    name: "Action",
    color: "#FF5209",
    image: category1,
    selected: false,
    genreId:28
  },
  {
    id: 2,
    name: "Drama",
    color: "#D7A4FF",
    image: category2,
    selected: false,
    genreId:18
  },
  {
    id: 3,
    name: "Romance",
    color: "#148A08",
    image: category3,
    selected: false,
    genreId: 10749
  },
  {
    id: 4,
    name: "Thriller",
    color: "#84C2FF",
    image: category4,
    selected: false,
    genreId:53
  },
  {
    id: 5,
    name: "Western",
    color: "#902500",
    image: category5,
    selected: false,
    genreId:37
  },
  {
    id: 6,
    name: "Horror",
    color: "#7358FF",
    image: category6,
    selected: false,
    genreId:27
  },
  {
    id: 7,
    name: "Fantasy",
    color: "#FF4ADE",
    image: category7,
    selected: false,
    genreId:14
  },
  {
    id: 8,
    name: "Music",
    color: "#E61E32",
    image: category8,
    selected: false,
    genreId:10402
  },
  {
    id: 9,
    name: "Fiction",
    color: "#6CD061",
    image: category9,
    selected: false,
    genreId:878
  },
];

const Category = () => {
  const [categories, setCategories] = useState(categoriesArray);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (categoryId) => {
    const categoryIndex = categories.findIndex(
      (category) => category.id === categoryId
    );
    if (categoryIndex >= 0) {
      const category = categories[categoryIndex];
      category.selected = !category.selected;
      setCategories([...categories]);

      setSelectedCategories((prevSelectedCategories) =>
        category.selected
          ? [...prevSelectedCategories, category]
          : prevSelectedCategories.filter((c) => c.id !== categoryId)
      );
    }
  };


  return (
    <div className="container">
      <CategoryHeading
        categories={selectedCategories}
        handleDeselectCategory={handleCategoryClick}
      />
      <SelectCategories
        categories={categories}
        selectedCategories={selectedCategories}
        handleCategoryClick={handleCategoryClick}
      />
    </div>
  );
};

export default Category;
