import React from "react";
import Slider from "../components/Slider";
import CoursesSlider from "../components/CoursesSlider";
import AccordionMP from "../components/AccordionMP";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const MainPage = () => {
  return (
    <>
      <Header />
      <Slider />;
      <AccordionMP />
      <CoursesSlider />
      <Footer />
    </>
  );
};
