import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import "./App.css";
import NavBar from "./Components/NavBar";
import NewsBoard from "./Components/NewsBoard";
import Footer from "./Components/Footer";

const App = () => {
  const [category, setCategory] = useState("top");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <div>
      <NavBar setCategory={setCategory} />
      <div
        className="p-5 bg-secondary text-white"
        style={{ paddingTop: "100px" }}
      >
        <Container>
          <NewsBoard category={category} />
        </Container>
      </div>
      <Footer setCategory={setCategory} />
    </div>
  );
};

export default App;
