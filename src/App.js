import React from 'react';
import './app.scss';
import Header from "./components/Header";
import About from "./components/About";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <About />
      <Reviews />
      <Contact />
    </>
  );
}

export default App;
