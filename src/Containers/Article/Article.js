import React from "react";
import { useLocation } from "react-router-dom";
import "./Article.css";

export default function Article() {
  const location = useLocation();

  return (
    <div className="article-section">
      <h1>{location.state.title}</h1>

      <div className="article-container">
        <div className="article-content">
          <p className="article-date">{location.state.date}</p>
          <h2 className="article-Title">{location.state.bodyTitle1}</h2>
          <p className="article-Content">{location.state.bodyContent1}</p>
          <h2 className="article-Title">{location.state.bodyTitle2}</h2>
          <p>{location.state.bodyContent2}</p>
          <h2 className="article-Title">{location.state.bodyTitle3}</h2>
          <p className="article-Content">{location.state.bodyContent3}</p>
        </div>
        <div className="image">
          <img src={location.state.image} alt="" />
        </div>
      </div>
    </div>
  );
}
