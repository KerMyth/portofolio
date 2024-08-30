import React from "react";
import "./App.css";

import About from "./components/about/about";
import Blog from "./components/blog/blog";
import Contact from "./components/contact/contact";
import Home from "./components/home/home";
import Portofolio from "./components/portofolio/portofolio";
import Pricing from "./components/pricing/pricing";
import Resume from "./components/resume/resume";
import Service from "./components/service/service";
import Sidebar from "./components/sidebar/sidebar";
import Testimonial from "./components/testimonial/testimonial";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Service />
        <Resume />
        {/* <Portofolio />
        <Pricing />
        <Testimonial />
        <Blog /> */}
        <Contact />
      </main>
    </>
  );
}

export default App;
