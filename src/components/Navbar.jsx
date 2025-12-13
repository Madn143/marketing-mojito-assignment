import { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ 
      padding: '0rem 2rem', 
      borderBottom: '1px solid var(--accent-color)', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      position: 'sticky', 
      top: 0, 
      zIndex: 100,
      background: 'rgba(5, 10, 40, 0.75)', /* Very dark blue with 75% opacity */
      backdropFilter: 'blur(12px)',        /* The blur effect */
      WebkitBackdropFilter: 'blur(12px)'   /* Safari support */
      }}>
      <h1 style={{ color: 'var(--accent-color)', textShadow: 'var(--neon-glow)' }}>TEST.DEV</h1>
      
      {/* Desktop Menu */}
      <div className="desktop-menu" style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <a href="#hero" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Home</a>
        <a href="#courses" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>Courses</a>
        <a href="#about" style={{ color: 'var(--text-color)', textDecoration: 'none' }}>About</a>
        <button onClick={toggleTheme} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-color)' }}>
          {theme === 'dark' ? <Sun /> : <Moon />}
        </button>
      </div>

      {/* Mobile Toggle Button (Visible only on small screens via CSS usually, but here handled by inline styles for simplicity) */}
      <div className="mobile-toggle" style={{ display: 'none' }}>
        <button onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X color="var(--text-color)"/> : <Menu color="var(--text-color)"/>}</button>
      </div>
      
      {/* Responsive Note: In a real app, use CSS media queries to hide/show .desktop-menu. 
          For this assignment, ensure you check the screen size or add a simple media query in index.css */}
    </nav>
  );
}