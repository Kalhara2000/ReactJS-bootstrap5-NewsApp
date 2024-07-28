import React from "react";
import Card from "react-bootstrap/Card";
import newsImage from "../assets/News.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <Card
      className="bg-dark text-white md-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ width: "18rem" }}
    >
      <Card.Img
        variant="top"
        src={src ? src : newsImage}
        style={{ height: "200px", width: "270px" }}
      />
      <Card.Body>
        <Card.Title>{title.slice(0, 55)}</Card.Title>
        <Card.Text>
          {description
            ? description.slice(0, 90)
            : "Stay updated with top headlines worldwide. Get the most important news as it happens."}
        </Card.Text>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-light"
        >
          Read more
        </a>
      </Card.Body>
    </Card>
  );
};

export default NewsItem;
