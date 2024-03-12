const HomeWelcome = () => {
  return (
    <>
      <img
        src={require("../assets/Home-Hero-Image.jpg")}
        alt="different everyday items in a cardboard box"
      />
      <h2>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h2>
      <img src={require("../assets/Decoration.svg").default} alt="a decoration "/>
      <a href="/">ODDAJ RZECZY</a>
      <a href="/">ZORGANIZUJ ZBIÓRKĘ</a>
    </>
  );
};

export default HomeWelcome;
