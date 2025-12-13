import { useEffect, useState } from 'react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

export default function TechStats() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [topTech, setTopTech] = useState("Unknown");

  useEffect(() => {
    const endpoints = [
      { name: 'React', url: 'https://api.github.com/repos/facebook/react' },
      { name: 'Vue', url: 'https://api.github.com/repos/vuejs/vue' },
      { name: 'Angular', url: 'https://api.github.com/repos/angular/angular' },
      { name: 'Svelte', url: 'https://api.github.com/repos/sveltejs/svelte' },
      { name: 'NextJS', url: 'https://api.github.com/repos/vercel/next.js' },
    ];

    Promise.all(endpoints.map(endpoint => 
      fetch(endpoint.url).then(res => res.json())
    ))
    .then(results => {
      const chartData = results.map((repo, index) => ({
        name: endpoints[index].name,
        stars: repo.stargazers_count || 0,
      }));
      
      // Sort High to Low
      const sortedData = chartData.sort((a, b) => b.stars - a.stars);
      
      setData(sortedData);
      setTopTech(sortedData[0].name); // Find the winner
      setLoading(false);
    })
    .catch(err => {
      console.error("Error fetching stats:", err);
      setLoading(false);
    });
  }, []);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div style={{ 
          background: 'var(--card-bg)', 
          border: '1px solid var(--accent-color)', 
          padding: '10px', 
          borderRadius: '5px',
          backdropFilter: 'blur(5px)'
        }}>
          <p style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>{payload[0].payload.name}</p>
          <p style={{ color: 'var(--text-color)' }}>Stars: {payload[0].value.toLocaleString()}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <section className="container" style={{ padding: '4rem 20px' }}>
      <h2 style={{ textAlign: 'center', color: 'var(--accent-color)', marginBottom: '3rem', textShadow: 'var(--neon-glow)' }}>
        Market Demand Analysis
      </h2>

      {loading ? (
        <p style={{ textAlign: 'center' }}>Loading live data...</p>
      ) : (
        <div style={{ 
          display: 'flex', 
          flexWrap: 'wrap', /* Stacks vertically on mobile, side-by-side on desktop */
          gap: '4rem', 
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          
          {/* LEFT SIDE: The Chart */}
          <div style={{ flex: '1 1 400px', height: 400, minWidth: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis 
                  dataKey="name" 
                  stroke="var(--text-color)" 
                  tick={{ fill: 'var(--text-color)' }}
                  tickLine={{ stroke: 'var(--text-color)' }}
                />
                <YAxis 
                  stroke="var(--text-color)" 
                  tick={{ fill: 'var(--text-color)' }}
                  tickLine={{ stroke: 'var(--text-color)' }}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="stars" 
                  stroke="var(--accent-color)" 
                  strokeWidth={3}
                  dot={{ r: 6, fill: 'var(--accent-color)', strokeWidth: 0 }}
                  activeDot={{ r: 8, stroke: 'white', strokeWidth: 2 }}
                  filter="drop-shadow(0 0 8px var(--accent-color))" 
                />
              </LineChart>
            </ResponsiveContainer>
             <p style={{ textAlign: 'center', fontSize: '0.8rem', opacity: 0.6, marginTop: '10px' }}>
              *Live GitHub API Data
            </p>
          </div>

          {/* RIGHT SIDE: The Text */}
          <div style={{ flex: '1 1 300px', minWidth: '300px' }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
              <span style={{ color: 'var(--accent-color)', textShadow: 'var(--neon-glow)' }}>{topTech}</span> is Leading the Industry.
            </h3>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', opacity: 0.9 }}>
              Based on real-time open source data, <strong>{topTech}</strong> currently has the highest developer interest and community support.
            </p>
            <p style={{ lineHeight: '1.8', fontSize: '1.1rem', opacity: 0.9, marginTop: '1rem' }}>
              Companies are aggressively hiring for these skills. Our courses are designed to align with this market demand, ensuring you learn what matters most right now.
            </p>
            
            <div style={{ marginTop: '2rem' }}>
               <a href="#courses" className="btn">View {topTech} Courses</a>
            </div>
          </div>

        </div>
      )}
    </section>
  );
}