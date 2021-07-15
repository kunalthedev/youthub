import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  getPopularVideos,
  getVideosByCategory,
} from "../../redux/actions/videos.action";
import "./_categoriesbar.scss";

const keywords = [
  "All",
  "React js",
  "Angular js",
  "React Native",
  "use of API",
  "Redux",
  "Punjabi Songs",
  "S8UL ",
  "K18",
  "LifeStyle Vlogs",
  "Travel Vlogs",
  "BGMI",
  "Valorant",
  "Mortal",
  "Scout",
  "Regaltos",
  "GTA V",
];

const CategoriesBar = () => {
  const [activeElement, setActiveElement] = useState("All");
  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value);
    if (value === "All") {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };

  return (
    <div className="categoriesBar">
      {keywords.map((value, i) => (
        <span
          className={activeElement === value ? "active" : ""}
          onClick={() => handleClick(value)}
          key={i}
        >
          {" "}
          {value}{" "}
        </span>
      ))}
    </div>
  );
};

export default CategoriesBar;
