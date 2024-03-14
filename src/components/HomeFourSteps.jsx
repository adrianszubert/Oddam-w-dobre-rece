import decoration from '../assets/Decoration.svg';
import icon1 from '../assets/Icon-1.svg';
import icon2 from '../assets/Icon-2.svg';
import icon3 from '../assets/Icon-3.svg';
import icon4 from '../assets/Icon-4.svg';

const HomeFourSteps = () => {
  return (
    <section className="four-columns">
      <h2>Wystarczą 4 proste kroki</h2>
      <img
        src={decoration}
        alt="a decoration "
      />
      <div className="four-columns__container">
        <div className="four-columns col1">
          <img src={icon1} alt="a shirt" />
          <p>Wybierz rzeczy</p>
          <p>ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="four-columns col2">
          <img src={icon2} alt="a bag" />
          <p>Spakuj je</p>
          <p>skorzystaj z worków na śmieci</p>
        </div>
        <div className="four-columns col3">
          <img src={icon3} alt="a bag" />
          <p>Zdecyduj komu chcesz pomóc</p>
          <p>wybierz zaufane miejsce</p>
        </div>
        <div className="four-columns col4">
          <img src={icon4} alt="a bag" />
          <p>Zamów kuriera</p>
          <p>kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>
      <a href="/">oddaj rzeczy</a>
    </section>
  );
};

export default HomeFourSteps;
