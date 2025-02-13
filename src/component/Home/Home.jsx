import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "../English/NewsItem";




const English = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get("https://headlinehub-be.onrender.com/api/news")
      .then((response) => {
        console.log("API Response:", response.data);
        setNews(response.data.data || []); // Corrected to match API response structure
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (

    
    <div>

      <div>

      <div style={{ overflow: "hidden", whiteSpace: "nowrap",  padding: "10px 0" }}>
  <marquee style={{ color: "black", fontWeight: "bold" }}>
    🚀 Welcome to News Hub – Your Daily Source for Latest Headlines! 🔥 | Stay Updated with Breaking News 🌍 | Technology, Sports, Politics, and More! 🎯 | Fast & Reliable News at Your Fingertips 📲 | Bringing You the Latest Stories 24/7 🕒
  </marquee>
</div>
      </div>
      <h1>Latest News</h1>
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
