
import {
  FaLinkedinIn,
  FaFacebook,
  FaInstagramSquare,
  FaGithubSquare,
} from 'react-icons/fa';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar bg-transparent text-[#dde9fb]" id='navbar'>
      <div className="navbar-start">
        <div className="dropdown">
          <button
            className="btn btn-ghost lg:hidden"
            aria-label="Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            aria-labelledby="menu">
            <li>
            <a href='#navbar'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#image-show'>Images</a>
          </li>
          <li>
            <a href='#subscribe'>Contact</a>
          </li>
          </ul>
        </div>
        <a
          className="btn btn-ghost text-xl"
          href="#home">
          Mateen
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href='#navbar'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#image-show'>Images</a>
          </li>
          <li>
            <a href='#subscribe'>Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="flex ">
          <a
            className="btn btn-ghost"
            href="https://www.linkedin.com/in/mateen-a-4b2407236"
            aria-label="LinkedIn">
            <FaLinkedinIn />
          </a>
          <a
            className="btn btn-ghost"
            href="https://www.facebook.com/mateen.abdul.12532"
            aria-label="Facebook">
            <FaFacebook />
          </a>
          <a
            className="btn btn-ghost"
            href="https://www.instagram.com/bhack_nana?utm_source=qr"
            aria-label="Instagram">
            <FaInstagramSquare />
          </a>
          <a
            className="btn btn-ghost"
            href="https://github.com/Black-nana"
            target='_blank'
            aria-label="GitHub">
            
            <FaGithubSquare />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
