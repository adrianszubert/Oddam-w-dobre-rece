import HomeAboutUs from "./HomeAboutUs";
import HomeContactUs from "./HomeContactUs";
import HomeHeader from "./HomeHeader";
import HomeHelp from "./HomeHelp";
import HomeWhatIsItAbout from "./HomeWhatIsItAbout";

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeWhatIsItAbout/>
            <HomeAboutUs/>
            <HomeHelp/>
            <HomeContactUs/>
        </>
    );
}
export default Home;