import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Projects from "./pages/Projects";
import Achievements from "./pages/Achievements";
import CV from "./pages/CV";
import Blog from "./pages/Blog";
import Hobbies from "./pages/Hobbies";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Navbar />

      {/* ✅ Show Header only on Home page */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Home />
            </>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
