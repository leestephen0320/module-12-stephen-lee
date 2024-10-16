import { Link } from 'react-router-dom';
import Navigation from './Navigation';

export default function Header() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px',
    }}>
      <div>
        <h2>Stephen Lee</h2>
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  );
}