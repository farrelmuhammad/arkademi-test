import React from "react";
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
    </>
  );
};

export default Home;
