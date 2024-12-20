import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', padding: '1.5rem', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem', color: '#333' }}>Dashboard</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li style={{ marginBottom: '1rem' }}>
          <Link
            to="/journal"
            style={{
              textDecoration: 'none',
              color: '#007bff',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            Write a Mood Journal
          </Link>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Link
            to="/profile"
            style={{
              textDecoration: 'none',
              color: '#007bff',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            My Profile
          </Link>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Link
            to="/raise-vibration"
            style={{
              textDecoration: 'none',
              color: '#007bff',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            Raise Your Vibration
          </Link>
        </li>
        <li style={{ marginBottom: '1rem' }}>
          <Link
            to="/mood-piggy-bank"
            style={{
              textDecoration: 'none',
              color: '#007bff',
              fontSize: '1.2rem',
              fontWeight: 'bold',
            }}
          >
            Mood Piggy Bank / Rainy Day
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Dashboard;
