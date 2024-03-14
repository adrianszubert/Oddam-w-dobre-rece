import { Link } from "react-scroll";

const Navbar = () => {
  return (
          <>
            <nav>
              <ul className="nav__link-container">
                <li className="nav__list-item"><Link to="start" smooth duration={500} className="nav__link nav__link--start">Start</Link></li>
                <li className="nav__list-item"><Link to="what-is-it" smooth duration={500} className="nav__link">O co chodzi?</Link></li>
                <li className="nav__list-item"><Link to="about-us" smooth duration={500} className="nav__link">O nas</Link></li>
                <li className="nav__list-item"><Link to="who-we-help" smooth duration={500} className="nav__link">Fundacje i organizacje</Link></li>
                <li className="nav__list-item"><Link to="contact-us" smooth duration={500} className="nav__link">Kontakt</Link></li>
              </ul>
            </nav>
          </>
  )
}

export default Navbar;