import HomeAboutUs from "./HomeAboutUs";
import HomeContactUs from "./HomeContactUs";
import HomeFourSteps from "./HomeFourSteps";
import HomeHeader from "./HomeHeader";
import HomeHelp from "./HomeHelp";
import HomeThreeColumns from "./HomeThreeColumns";

const Home = () => {
    return (
        <>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAboutUs/>
            <HomeHelp/>
            <HomeContactUs/>
        </>
    );
}
export default Home;