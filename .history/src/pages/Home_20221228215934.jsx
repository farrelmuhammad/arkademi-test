import React from "react";
import Bisnis from "../components/Bisnis";
import Category from "../components/Category";
import Flashsale from "../components/Flashsale";
import Header from "../components/Header";
import Lembaga from "../components/Lembaga";
import Navbar from "../components/Navbar";
import Promo from "../components/Promo";
import Terbaru from "../components/Terbaru";
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
      <Terbaru />
      <Bisnis />
    </>
  );
};

export default Home;
