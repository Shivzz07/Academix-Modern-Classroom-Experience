import React from "react";

import ShowPage from "./ShowPage.jsx";
import Features from "./Features.jsx";
import Typewriter from "./Typewriter.jsx";
import Pricing from "./Pricing.jsx";
import TopPush from "./TopPush.jsx";
import Book from "../Blog/Book.jsx";
import Loader from "./loader.jsx";

const Home = () => {
  return (
    <>
      <Loader />
      <div className="flex flex-col gap-10">
        <ShowPage />
        <Typewriter />
        <Features />
        <Pricing />
        <TopPush />
      </div>
    </>
  );
};

export default Home;
