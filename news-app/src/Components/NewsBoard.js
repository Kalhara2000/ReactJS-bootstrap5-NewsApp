import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const apiKey = process.env.REACT_APP_NEWS_API_KEY;
      const url = `https://newsdata.io/api/1/latest?country=lk&category=${category}&country=[sri lanka]&apikey=${apiKey}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data.results)) {
          setArticles(data.results);
        } else {
          console.error("Expected results to be an array", data.results);
          setArticles([]);
        }
      } catch (error) {
        console.error("Error fetching the news:", error);
        setArticles([]);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div>
      <h2 className="text-center" style={{ paddingTop: "55px" }}>
        Latest <span className="badge bg-danger">News</span>
      </h2>
      {articles.length > 0 ? (
        articles.map((news, index) => (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.image_url}
            url={news.link}
          />
        ))
      ) : (
        <p className="text-center" style={{ padding: "200px" }}>
          No news articles available.
        </p>
      )}
    </div>
  );
};

export default NewsBoard;
