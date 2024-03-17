import people from '../assets/People.jpg';
import signature from '../assets/Signature.svg';
import Decoration from './Decoration';

const HomeAboutUs = () => {
  return (
    <section id="about-us" className="about-us">
      <div className="about-us__content">
        <h2 className='about-us__heading'>O nas</h2>
        <Decoration/>
        <p className='about-us__text'>Nori grape silver beet broccoli kombu beet<br/> greens fava bean potato quandong celery. Bunya<br/> nuts black-eyed pea prairie turnip leek lentil<br/> turnip greens parsnip.</p>
        <div className='sign-wrapper'>
          <img className='about-us__signature' src={signature}
          alt="a signature "/>
        </div>
      </div>
      <img className="about-us__img" src={people} alt="a group of people smiling" />
    </section>
  )
}

export default HomeAboutUs;