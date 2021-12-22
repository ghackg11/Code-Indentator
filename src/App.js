import About from "./about";
import Nav from "./navbar";
import TextForm from "./textForm";
import React from "react";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="flex-shrink-0">
        <Nav></Nav>
        <Routes>
          <Route  path="/" element={<TextForm />} />
          <Route  path="about" element={<About />} />
        </Routes>
      </div>

      <nav class="navbar fixed-bottom navbar-expand-lg navbar-dark default-color">
      <div className="container" style={{alignItems: 'center', justifyContent: 'center'}} align="center"><center><span class="love" align="center" style={{textAlign: "center"}}>Made with <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
</svg> by <a href="https://github.com/ghackg11">Gautam</a> in India</span></center></div>
      </nav>
    </div>
  );
}

export default App;
