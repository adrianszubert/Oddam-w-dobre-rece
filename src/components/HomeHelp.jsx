import Decoration from "./Decoration";

const HomeHelp = () => {
  return (
    <section id="who-we-help" className="help">
      <h2 className="help__heading">Komu pomagamy?</h2>

      <Decoration />

      <div className="help-buttons-wrapper">
        <button className="help-button help-button--1">
          Fundacjom</button>
        <button className="help-button help-button--2">
          Organizacjom<br/> pozarządowym
        </button>
        <button className="help-button help-button--3">
          Lokalnym<br/> zbiórkom
        </button>
      </div>

      <p className="help-text">
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z<br/> którymi
        współpracujemy. Możesz sprawdzić czym się zajmują,<br/> komu pomagają i czego
        potrzebują.
      </p>

      <div className="help-orgs__container">
        
        <div className="help-orgs__row help-orgs__row1">
          <div className="help-orgs__t-p-wrapper">
            <h3 className="help-orgs__title">Fundacja “Dbam o Zdrowie”</h3>
            <p className="help-orgs__purpose">
              Cel i misja: Pomoc osobom znajdującym się w trudnej sytuacji
              życiowej.
            </p>
          </div>
          <p className="help-orgs__items">
            ubrania, jedzenie, sprzęt AGD, meble, zabawki
          </p>
        </div>

        <div className="help-orgs__row help-orgs__row2">
          <div className="help-orgs__t-p-wrapper">
            <h3 className="help-orgs__title">Fundacja “Dla dzieci”</h3>
            <p className="help-orgs__purpose">
              Cel i misja: Pomoc dzieciom z ubogich rodzin.
            </p>
          </div>
          <p className="help-orgs__items">ubrania, meble, zabawki</p>
        </div>

        <div className="help-orgs__row help-orgs__row3">
          <div className="help-orgs__t-p-wrapper">
            <h3 className="help-orgs__title">Fundacja “Bez domu”</h3>
            <p className="help-orgs__purpose">
              Cel i misja: Pomoc dla osób nie posiadających miejsca
              zamieszkania.
            </p>
          </div>
          <p className="help-orgs__items">ubrania, jedzenie, ciepłe koce</p>
        </div>

      </div>
    </section>
  );
};

export default HomeHelp;
