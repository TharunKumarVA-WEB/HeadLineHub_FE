import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const English = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://headlinehub-be.onrender.com/api/news/kannada")
      .then((response) => {
        console.log("API Response:", response.data);
        setNews(response.data.data || []); // Corrected to match API response structure
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div>
      <h1>ಇತ್ತೀಚಿನ ಸುದ್ದಿ</h1>
      {Array.isArray(news) && news.length > 0 ? (
        news.map((article) => (
          <NewsItem key={article.uuid} article={article} />
        ))
      ) : (
        <p>No news available.</p>
      )}
    </div>
  );
};

export default English;
