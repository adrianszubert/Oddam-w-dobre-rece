const HomeAboutUs = () => {
  return (
    <section id="about-us" className="about-us">
      <div className="about-us-text">
        <h2>O nas</h2>
        <img src={require("../assets/Decoration.svg").default}
        alt="a decoration "/>
        <p>Nori grape silver beet broccoli kombu beet greens fava bean potato quandong celery. Bunya nuts black-eyed pea prairie turnip leek lentil turnip greens parsnip.</p>
        <img src={require("../assets/Signature.svg").default}
        alt="a decoration "/>
      </div>
      <img className="about-us-img" src={require("../assets/People.jpg")} alt="a group of people smiling" />
    </section>
  )
}

export default HomeAboutUs;