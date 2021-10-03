import React from "react";
import {
  Announcement,
  Nav,
  Slider,
  Categories,
  Product,
  NewsLetter,
  Footer,
} from "../components";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Slider />
      <Categories />
      <Product />
      <NewsLetter />
    </div>
  );
};

export default Home;
