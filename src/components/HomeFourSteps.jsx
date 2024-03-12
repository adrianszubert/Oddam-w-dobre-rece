const HomeFourSteps = () => {
  return (
    <section className="four-columns">
      <h2>Wystarczą 4 proste kroki</h2>
      <img
        src={require("../assets/Decoration.svg").default}
        alt="a decoration "
      />
      <div className="four-columns__container">
        <div className="four-columns col1">
          <img src={require("../assets/Icon-1.svg").default} alt="a shirt" />
          <p>Wybierz rzeczy</p>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="four-columns col2">
          <img src={require("../assets/Icon-2.svg").default} alt="a bag" />
          <p>Spakuj je</p>
          <p>skorzystaj z worków na śmieci</p>
        </div>
        <div className="four-columns col3">
          <img src={require("../assets/Icon-3.svg").default} alt="a bag" />
          <p>Zdecyduj komu chcesz pomóc</p>
          <p>wybierz zaufane miejsce</p>
        </div>
        <div className="four-columns col4">
          <img src={require("../assets/Icon-4.svg").default} alt="a bag" />
          <p>Zamów kuriera</p>
          <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>
      <a href="/">oddaj rzeczy</a>
    </section>
  );
};

export default HomeFourSteps;
