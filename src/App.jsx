import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseList from './components/CourseList';
import About from './components/About';
import TechStats from './components/TechStats';

function App() {
  const [theme, setTheme] = useState('dark'); // Default to dark mode for the Neon vibe

  // Toggle Function
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Apply theme to Body
  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <CourseList />
      <TechStats />
      <About />
      <footer style={{ textAlign: 'center', padding: '20px', fontSize: '0.8rem', opacity: 0.5 }}>
        Built for Marketing Mojito Assignment.
      </footer>
    </div>
  );
}

export default App;