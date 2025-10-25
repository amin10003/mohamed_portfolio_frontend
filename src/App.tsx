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
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-gray-900">
        {/* ✅ Always visible Navbar */}
        <Navbar />

        {/* ✅ Main content area */}
        <main className="flex-grow">
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
        </main>

        {/* ✅ Footer now touches content */}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
