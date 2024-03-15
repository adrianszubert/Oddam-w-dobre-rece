import Auth from "./Auth";
import Navbar from "./Navbar";

const HomeMenu = () => {
  return (
      <section className="menu">
        <Auth/>
        <Navbar/>
      </section>
  )
}

export default HomeMenu;