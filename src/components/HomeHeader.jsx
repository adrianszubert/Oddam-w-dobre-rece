import HomeMenu from "./HomeMenu";
import HomeWelcome from "./HomeWelcome";

const HomeHeader = () => {
  return (
          <section id="start">
            <HomeMenu/>
            <HomeWelcome/>
          </section>
  )
}

export default HomeHeader;