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
            style={{ width: '100%', padding: '10px 10px 10px 40px', borderRadius: '20px', border: '1px solid var(--accent-color)', background: 'var(--card-bg)', color: 'var(--text-color)' }}
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
                display: 'flex',           /* NEW: Turns card into a flex container */
                flexDirection: 'column',   /* NEW: Stacks items vertically */
                height: '100%'             /* NEW: Forces full height in the grid */
                }}>
                    <img src={course.image} alt={course.title} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                    <div style={{ 
                        padding: '20px', 
                        display: 'flex',         /* NEW: Flex for the content area */
                        flexDirection: 'column', /* NEW: Stacks text */
                        flex: 1                  /* NEW: This makes this section fill all empty space */
                        }}>
                            <span style={{ fontSize: '0.8rem', color: 'var(--accent-color)', textTransform: 'uppercase', fontWeight: 'bold' }}>{course.category}</span>
                            <h3 style={{ margin: '10px 0' }}>{course.title}</h3>
                            <p style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '20px', flex: 1 }}>
                                {course.description}
                            </p>
                            <a href={course.link} target="_blank" rel="noreferrer" className="btn" style={{ width: '100%', textAlign: 'center', marginTop: 'auto' }}>Start Learning</a>
                    </div>
                </div>
        ))}
</div>
    </section>
  );
}