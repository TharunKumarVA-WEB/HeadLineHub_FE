import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";
import Loader from "../Loader/Loader";

const Kannada = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://headlinehub-be.onrender.com/api/news/kannada")
      .then((response) => {
        //console.log("API Response:", response.data);
        setNews(response.data.data || []); // Corrected to match API response structure
      })
      .catch((error) => console.error("Error fetching news:", error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <h1>ಇತ್ತೀಚಿನ ಸುದ್ದಿ</h1>
      {loading ?(

        <Loader />

      ):Array.isArray(news) && news.length > 0 ? (
        news.map((article) => <NewsItem key={article.uuid} article={article} /> )
        
     
      ) : (
        <p>No news available.</p>
      )}
     
      
    </div>
  );
};

export default Kannada;
