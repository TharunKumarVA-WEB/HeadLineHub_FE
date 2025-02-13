import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const NewsItem = ({ article }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "100%", height: "auto" }}>
      <div className="row g-0" style={{ height: "100%" }}>
        {/* Image on the left */}
        <div className="col-md-4 col-12">
          <img
            src={article.image_url}
            alt={article.title}
            className="img-fluid rounded-start"
            style={{
              width: "100%",
              height: "300px",
              objectFit: "cover",
            }}
          />
        </div>

        {/* Text content on the right */}
        <div className="col-md-8 col-12">
          <div className="card-body" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <h4 className="card-title">{article.title}</h4>
            <p className="card-text">{article.description}</p>
            <div className="d-flex justify-content-start">
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              மேலும் படிக்கவும்
              </a>
            </div>
            {article.source && (
              <p className="card-text mt-2">
                <small className="text-muted"><strong>ஆதாரம்:</strong> {article.source}</small>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
