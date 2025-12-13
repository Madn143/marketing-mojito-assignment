import { useEffect, useState } from 'react';

export default function Hero() {
  const [quote, setQuote] = useState("Loading inspiration...");

  // SAFE MODE: Use a local list instead of a risky API
  const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "Simplicity is the soul of efficiency.",
    "Make it work, make it right, make it fast."
  ];

  useEffect(() => {
    // Simulate an API call with a 0.5s delay (so it looks real)
    setTimeout(() => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      setQuote(`"${randomQuote}"`);
    }, 500);
  }, []);

  return (
    <section id="hero" style={{ 
      height: '100vh', 
      width: '100%',
      position: 'relative', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      overflow: 'hidden',
      marginTop: '-80px' 
    }}>
      
      {/* 1. THE VIDEO BACKGROUND */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: '#000', zIndex: -2 }}>
        <video autoPlay loop muted style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.6 }}>
              <source src="/bg-hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. THE BLEND OVERLAY (NEW) */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '200px', /* Controls how high the fade goes */
        background: 'linear-gradient(to top, var(--bg-color), transparent)', /* Fades into your theme color */
        backdropFilter: 'blur(5px)', /* Adds a subtle blur at the bottom */
        zIndex: -1
      }} />

      {/* 3. THE CONTENT */}
      <div style={{ textAlign: 'center', zIndex: 1, padding: '20px', paddingTop: '80px' }}>
        <h2 style={{ fontSize: '3.5rem', color: 'var(--accent-color)', textShadow: 'var(--neon-glow)', marginBottom: '1rem' }}>
          LEVEL UP YOUR SKILLS
        </h2>
        <p style={{ fontStyle: 'italic', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 30px auto', lineHeight: '1.6' }}>
          {quote}
        </p>
        <a href="#courses" className="btn" style={{ padding: '12px 30px', fontSize: '1.1rem' }}>
          Start Learning
        </a>
      </div>
    </section>
  );
}