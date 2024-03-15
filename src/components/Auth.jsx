import { Link } from "react-router-dom";

const Auth = () => {
  return (
            <div className="auth__container">
              <Link to="/logowanie" className="auth auth__log-in">Zaloguj</Link>
              <Link to="/rejestracja" className="auth auth__signup">Załóż konto</Link>
            </div>
  )
}

export default Auth;