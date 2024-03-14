const HomeHelp = () => {
  return (
    <section id="who-we-help" className="help">
      <h2>Komu pomagamy?</h2>
      <img
        src={require("../assets/Decoration.svg").default}
        alt="a decoration "
      />
      <button>Fundacjom</button>
      <button>Organizacjom pozarządowym</button>
      <button>Lokalnym zbiórkom</button>
      <p>
        W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi
        współpracujemy. Możesz sprawdzić czym się zajmują, komu pomagają i czego
        potrzebują.
      </p>
      <table></table>
      <div class="pagination">
        <a className="pagination-link" href="/">
          1
        </a>
        <a className="pagination-link" href="/">
          2
        </a>
        <a className="pagination-link" href="/">
          3
        </a>
      </div>
    </section>
  );
};

export default HomeHelp;
