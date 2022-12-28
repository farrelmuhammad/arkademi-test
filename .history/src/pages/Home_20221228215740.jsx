import React from "react";
import Category from "../components/Category";
import Flashsale from "../components/Flashsale";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Trending />
      <Flashsale />
      <Category />
    </>
  );
};

export default Home;
