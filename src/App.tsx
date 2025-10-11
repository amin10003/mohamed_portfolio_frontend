import React from "react";
import { Route, Routes } from "react-router-dom";
import Hobbies from "./pages/Hobbies";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MenuIcon from "./components/MenuIcon";
import "./App.css";
import Profile from "./pages/Profile";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import CV from "./pages/CV";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 overflow-y-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/CV" element={<CV />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
