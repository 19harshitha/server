import React, { useState } from "react";
import "./SelectCategories.css";
import { useNavigate } from "react-router-dom";

const SelectCategories = ({
  categories,
  handleCategoryClick,
  selectedCategories,
}) => {
  const [selectErr, setSelectErr] = useState(false);
  const navigate = useNavigate();

  const handleNextPageClick = () => {
    if (selectedCategories.length >= 3) {
      localStorage.setItem(
        "selectedCategories",
        JSON.stringify(selectedCategories)
      );
      navigate("/home");
      setSelectErr(false);
    } else {
      setSelectErr(true);
    }

    // console.log(selectedCategories);
  };

  return (
    <div className="categories">
      <div className="category-boxes">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-box"
            style={{
              backgroundColor: category.color,
              border: category.selected === true ? "3px solid #11B800" : "none",
            }}
            onClick={() => handleCategoryClick(category.id)}
            //
          >
            <p className="category-name">{category.name}</p>
            <img src={category.image} alt={category.name} width="130px" />
          </div>
        ))}
      </div>
      <div className={`${selectErr ? "select-err" : ""}`}>
        {selectErr ? "Select at least 3 categories" : ""}
      </div>
      <button className={`next-btn`} onClick={() => handleNextPageClick()}>
        Next Page
      </button>
    </div>
  );
};

export default SelectCategories;
