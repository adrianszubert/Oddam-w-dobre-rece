import HomeAboutUs from "./HomeAboutUs";
import HomeContactUs from "./HomeContactUs";
import HomeHeader from "./HomeHeader";
import HomeHelp from "./HomeHelp";
import HomeWhatIsItAbout from "./HomeWhatIsItAbout";

const Home = () => {
    return (
            <div className="container">
                <HomeHeader/>
                <HomeWhatIsItAbout/>
                <HomeAboutUs/>
                <HomeHelp/>
                <HomeContactUs/>
            </div>
        
    );
}
export default Home;