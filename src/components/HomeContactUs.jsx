import fb from "../assets/Facebook.svg";
import insta from "../assets/Instagram.svg";
import Decoration from "./Decoration";

const HomeContactUs = () => {
  return (
    <section id="contact-us" className="contact">
      <div className="contact-heading-form-wrapper">
        <div className="contact-heading-deco-wrapper">
          <h2 className="contact-heading">Skontaktuj się z nami</h2>
          <Decoration />
        </div>
        <form className="contact-form">
          <div className="inputs-top-wrapper">
          <div className="input-name-wrapper input-wrapper">
            <label className="form-label" for="name">
              Wpisz swoje imię
            </label>
            <input type="text" id="name" placeholder="Krzysztof" />
          </div>
          <div className="input-mail-wrapper input-wrapper">
            <label className="form-label" for="email">
              Wpisz swój email
            </label>
            <input type="email" id="email" placeholder="abc@xyz.pl" />
          </div>
          </div>
          <div className="input-message-wrapper">
            <label className="form-label" for="message">
              Wpisz swoją wiadomość
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="6"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ></textarea>
            <button className="form-button" type="submit">Wyślij</button>
          </div>
        </form>
      </div>
      <footer className="contact-footer">
        <p className="contact-footer__copyright">Copyright by Coders Lab</p>
        <div className="contact-footer__social-icons">
          <img src={fb} alt="a Facebook icon " />
          <img src={insta} alt="a Instagram icon" />
        </div>
      </footer>
    </section>
  );
};

export default HomeContactUs;
