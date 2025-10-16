import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CV from "./pages/CV";
import Projects from "./pages/Projects";
import Hobbies from "./pages/Hobbies";
import Achievements from "./pages/Achievements";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <div className="min-h-screen bg-white dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/cv" element={<CV />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/hobbies" element={<Hobbies />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;