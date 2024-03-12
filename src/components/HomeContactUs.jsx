const HomeContactUs = () => {
  return (
    <section className="contact">
      <form>
        <label for="name">Wpisz swoje imię</label>
        <input type="text" id="name" placeholder="Krzysztof"/>
        <label for="email">Wpisz swój email</label>
        <input type="email" id="email" placeholder="abc@xyz.pl"/>
        <label for="message">Wpisz swoją wiadomość</label>
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="6"
          placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        ></textarea>
      </form>
      <footer>
        <p>Copyright by Coders Lab</p>
        <div className="social-icons">
          <img
            src={require("../assets/Facebook.svg").default}
            alt="a Facebook icon "
          />
          <img
            src={require("../assets/Instagram.svg").default}
            alt="a Instagram icon "
          />
        </div>
      </footer>
    </section>
  );
};

export default HomeContactUs;
