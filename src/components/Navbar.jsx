import { Link } from "react-scroll";

const Navbar = () => {
  return (
          <>
            <nav className="nav">
              <ul className="nav__link-container">
                <li className="nav__list-item"><Link to="start" smooth duration={500} className="nav__link nav__link--start">Start</Link></li>
                <li className="nav__list-item"><Link to="four-steps" smooth duration={500} className="nav__link">O co chodzi?</Link></li>
                <li className="nav__list-item"><Link to="about-us" smooth duration={500} className="nav__link">O nas</Link></li>
                <li className="nav__list-item"><Link to="who-we-help" smooth duration={500} className="nav__link">Fundacja i organizacje</Link></li>
                <li className="nav__list-item"><Link to="contact-us" smooth duration={500} className="nav__link">Kontakt</Link></li>
              </ul>
            </nav>
          </>
  )
}

export default Navbar;