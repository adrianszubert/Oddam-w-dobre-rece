import { Link } from "react-router-dom";

const HomeWelcome = () => {
  return (
    <section className="welcome">
      <img className="welcome__image"
        src={require("../assets/Home-Hero-Image.jpg")}
        alt="different everyday items in a cardboard box"
      />
      <div className="welcome__heading-wrapper">
        <h2 className="welcome__heading">Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h2>
        <img src={require("../assets/Decoration.svg").default} alt="a decoration "/>
        <div className="welcome__links">
          <Link className="welcome__link" to="/logowanie">ODDAJ RZECZY</Link>
          <Link className="welcome__link" to="/logowanie">ZORGANIZUJ ZBIÓRKĘ</Link>
        </div>
      </div>
    </section>
  );
};

export default HomeWelcome;
