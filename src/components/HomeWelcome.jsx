import { Link } from "react-router-dom";
import decoration from "../assets/Decoration.svg";
import Decoration from "./Decoration";

const HomeWelcome = () => {
  return (
    <section className="welcome">
      <div className="welcome__heading-wrapper">
        <h2 className="welcome__heading">
          Zacznij pomagać!
          <br /> Oddaj niechciane rzeczy w zaufane ręce
        </h2>
        <Decoration/>
        <div className="welcome__links">
          <Link className="welcome__link" to="/logowanie">
            ODDAJ <br /> RZECZY
          </Link>
          <Link className="welcome__link" to="/logowanie">
            ZORGANIZUJ <br /> ZBIÓRKĘ
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeWelcome;
