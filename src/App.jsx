import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useResumeStore } from './store/resumeStore';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Landing from './pages/Landing';
import Builder from './pages/Builder';
import Templates from './pages/Templates';

export default function App() {
  const { theme } = useResumeStore();

  // Apply `dark` class to <html> for Tailwind dark-mode utilities
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/builder" element={<Builder />} />
            <Route path="/templates" element={<Templates />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
