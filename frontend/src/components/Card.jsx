import React from "react";

import "./Card.css";

function Card({ vinyles }) {
  return (
    <div>
      <div className="card card-size mb-2">
        <img className="card-img-top" src={vinyles.pictures} alt="vinyles" />
        <div className="card-body">
          <h5 className="card-title">{vinyles.titre}</h5>
          <p className="card-text">{vinyles.genre}</p>
          <a
            href={vinyles.youtube_url}
            target="_blank"
            className="btn btn-danger"
            rel="noreferrer"
          >
            Listen to youtube
          </a>
        </div>
      </div>
    </div>
  );
}
export default Card;
