import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faStar } from '@fortawesome/free-solid-svg-icons';
import './NavBar.css';

export function NavBar() {
  return (
    <div className='NavBar'>
      <h1>A GIF FOR YOU</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} className="icon" />
              Home
            </Link>
          </li>
          <li>
            <Link to="/favorites">
              <FontAwesomeIcon icon={faStar} className="icon" />
              Favorites
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
