import { useState } from 'react';
import { Search } from 'lucide-react';
import coursesData from '../data/courses.json';

export default function CourseList() {
  const [searchTerm, setSearchTerm] = useState('');

  // Search Logic
  const filteredCourses = coursesData.filter(course =>
    course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="courses" className="container">
      <h2 style={{ color: 'var(--accent-color)', textAlign: 'center' }}>Available Courses</h2>
      
      {/* Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
          <Search style={{ position: 'absolute', left: '10px', top: '10px', color: '#888' }} />
          <input 
            type="text" 
            placeholder="Search python, react..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: '20px', border: '1px solid var(--accent-color)', background: 'var(--card-bg)', color: 'var(--text-color)', boxSizing: 'border-box' }}
          />
        </div>
      </div>

 {/* Grid */}
<div className="course-grid">
  {filteredCourses.map(course => (
    <div key={course.id} style={{ 
      background: 'var(--card-bg)', 
      borderRadius: '10px', 
      overflow: 'hidden', 
      border: '1px solid rgba(255,255,255,0.1)',
      display: 'flex',
      flexDirection: 'column',
      height: '100%', /* Forces the card to stretch to the max height of the row */
      position: 'relative' 
    }}>
      
      {/* Image */}
      <img src={course.image} alt={course.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
      
      {/* Content Body */}
      <div style={{ 
        padding: '20px', 
        display: 'flex', 
        flexDirection: 'column', 
        flexGrow: 1 /* Crucial: This makes the text area expand to fill space */
      }}>
        <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', textTransform: 'uppercase', fontWeight: 'bold' }}>
          {course.category}
        </span>
        
        <h3 style={{ margin: '10px 0' }}>{course.title}</h3>
        
        <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '20px' }}>
          {course.description}
        </p>

        {/* Spacer to push button down */}
        <div style={{ flexGrow: 1 }}></div>

        {/* Button - Always at the bottom */}
        <a href={course.link} target="_blank" rel="noreferrer" className="btn" style={{ 
          width: '100%', 
          textAlign: 'center', 
          display: 'block',
          marginTop: 'auto' /* This is the magic line that forces it to the bottom */
        }}>
          Start Learning
        </a>
      </div>
    </div>
  ))}
</div>
    </section>
  );
}