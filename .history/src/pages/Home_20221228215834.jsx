import React from "react";
import Category from "../components/Category";
import Flashsale from "../components/Flashsale";
import Header from "../components/Header";
import Lembaga from "../components/Lembaga";
import Navbar from "../components/Navbar";
import Promo from "../components/Promo";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Trending />
      <Flashsale />
      <Category />
      <Promo />
      <Lembaga />
    </>
  );
};

export default Home;
