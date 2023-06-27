import { Link } from 'react-router-dom';
import { deleteCookie } from './utils/cookieUtils';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    deleteCookie('token');
    navigate('/');
  };
  return (
    <div className="bg-gray-800 flex justify-around min-h-nav items-center shadow-md text-gray-200 text capitalize">
      <Link className="text-3xl font-bold" to="/generate">
        QG
      </Link>
      <ul className="flex text-xl w-96 justify-evenly">
        <li className="hover:opacity-70">
          <Link to="/favorite">favorite</Link>
        </li>
        <li className="hover:opacity-70">
          <Link to="/quote-generator">generate</Link>
        </li>
        <li className="hover:opacity-70 cursor-pointer" onClick={handleLogout}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
