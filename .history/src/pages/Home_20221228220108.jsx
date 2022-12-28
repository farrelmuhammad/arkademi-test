import React from "react";
import About from "../components/About";
import Bisnis from "../components/Bisnis";
import Career from "../components/Career";
import Category from "../components/Category";
import Flashsale from "../components/Flashsale";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Lembaga from "../components/Lembaga";
import Navbar from "../components/Navbar";
import Promo from "../components/Promo";
import Terbaru from "../components/Terbaru";
import Testimoni from "../components/Testimoni";
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
      <Career />
      <Testimoni />
      <About />
      <Footer />
    </>
  );
};

export default Home;
