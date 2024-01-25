import { useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Layout>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Layout>
    </>
  );
}

export default App;
