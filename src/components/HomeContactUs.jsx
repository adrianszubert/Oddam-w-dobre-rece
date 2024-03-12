const HomeContactUs = () => {
  return (
    <section className="contact">
      <form>
        <input type="text" placeholder="Krzysztof" />
        <input type="email" placeholder="abc@xyz.pl" />
        <textarea
          name="message"
          id=""
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
