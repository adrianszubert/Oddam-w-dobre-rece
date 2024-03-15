import decoration from '../assets/Decoration.svg';
import icon1 from '../assets/Icon-1.svg';
import icon2 from '../assets/Icon-2.svg';
import icon3 from '../assets/Icon-3.svg';
import icon4 from '../assets/Icon-4.svg';

const HomeFourSteps = () => {
  return (
    <section className="four-steps__container">
      <div className='four-steps__heading-wrapper'>
        <h2 className='four-steps__heading'>Wystarczą 4 proste kroki</h2>
        <img className='four-steps__decoration'
          src={decoration}
          alt="a decoration "
      />
      </div>
      <div className="four-steps__wrapper">
        <div className="four-steps col1">
          <img className='four-steps__icon' src={icon1} alt="a shirt" />
          <p className='four-steps__title'>Wybierz rzeczy</p>
          <p className='four-steps__text'>ubrania, zabawki, sprzęt i inne</p>
        </div>
        <div className="four-steps col2">
          <img className='four-steps__icon' src={icon2} alt="a bag" />
          <p className='four-steps__title'>Spakuj je</p>
          <p className='four-steps__text'>skorzystaj z worków na śmieci</p>
        </div>
        <div className="four-steps col3">
          <img className='four-steps__icon four-steps__icon--3' src={icon3} alt="a magnifier" />
          <p className='four-steps__title'>Zdecyduj komu<br/> chcesz pomóc</p>
          <p className='four-steps__text'>wybierz zaufane miejsce</p>
        </div>
        <div className="four-steps col4">
          <img className='four-steps__icon four-steps__icon--4' src={icon4} alt="a loop" />
          <p className='four-steps__title'>Zamów kuriera</p>
          <p className='four-steps__text'>kurier przyjedzie w dogodnym terminie</p>
        </div>
      </div>
      <a href="/">oddaj rzeczy</a>
    </section>
  );
};

export default HomeFourSteps;
