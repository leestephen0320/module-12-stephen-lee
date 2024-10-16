// Bringing in the required import from 'react-router-dom'
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/Resume"
          className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </Link>
      </li>
    </ul>
  );
}

export default Navigation;


// export default function Nav() {
//   // The Navbar UI component will render each of the Link elements in the links prop
//   return (
//     <Navbar
//       links={[
//         <Link key={1} className="nav-link text-light" to="/">
//           Home
//         </Link>,
//         <Link key={2} className="nav-link text-light" to="/about">
//           About Me
//         </Link>,
//         <Link key={3} className="nav-link text-light" to="/portfolio">
//           Portfolio
//         </Link>,
//         <Link key={4} className="nav-link text-light" to="/contact">
//           Contact
//         </Link>,
//         <Link key={5} className="nav-link text-light" to="/resume">
//           Resume
//         </Link>,
//       ]}
//     />
//   );
// }
