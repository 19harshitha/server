import React, { useState } from "react";
import "./Notes.css";

const Notes = () => {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")));


  const handleNoteChange = (newNotes) => {
    console.log(newNotes);
    setNotes(newNotes);
    localStorage.setItem("notes", JSON.stringify(newNotes));
  };

  return (
    <div className="notes-container">
      <p className="all-notes"> All Notes</p>
      <div className="notes">
        <textarea
          className="note"
          onChange={(e) => handleNoteChange(e.target.value)}
          value={notes}
        />
      </div>

      <div className="write-notes-btn">
        <svg
          width="25"
          height="36"
          viewBox="0 0 35 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35 9.17001C35.0013 8.9397 34.9572 8.71139 34.8701 8.49818C34.783 8.28496 34.6547 8.09104 34.4925 7.92752L27.0725 0.507528C26.909 0.345336 26.715 0.217017 26.5018 0.129929C26.2886 0.0428415 26.0603 -0.00130231 25.83 2.925e-05C25.5997 -0.00130231 25.3714 0.0428415 25.1581 0.129929C24.9449 0.217017 24.751 0.345336 24.5875 0.507528L19.635 5.46002L0.507528 24.5875C0.345336 24.751 0.217017 24.9449 0.129929 25.1581C0.0428415 25.3714 -0.00130231 25.5997 2.925e-05 25.83V33.25C2.925e-05 33.7141 0.184403 34.1592 0.512591 34.4874C0.84078 34.8156 1.2859 35 1.75003 35H9.17001C9.41489 35.0133 9.65983 34.975 9.88895 34.8876C10.1181 34.8001 10.3263 34.6655 10.5 34.4925L29.5225 15.365L34.4925 10.5C34.6522 10.3304 34.7823 10.1352 34.8775 9.92251C34.8943 9.78302 34.8943 9.642 34.8775 9.50251C34.8857 9.42105 34.8857 9.33897 34.8775 9.25751L35 9.17001ZM8.45251 31.5H3.50002V26.5475L20.8775 9.17001L25.83 14.1225L8.45251 31.5ZM28.2975 11.655L23.345 6.70252L25.83 4.23502L30.765 9.17001L28.2975 11.655Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Notes;
