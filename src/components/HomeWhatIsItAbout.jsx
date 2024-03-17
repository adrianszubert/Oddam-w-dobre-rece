import HomeFourSteps from "./HomeFourSteps"
import HomeThreeColumns from "./HomeThreeColumns"

const HomeWhatIsItAbout = () => {
  return (
    <>
      <section id="three-columns">
        <HomeThreeColumns/>
      </section>
      <section id="four-steps">
        <HomeFourSteps/>
      </section>
    </>
  )
}

export default HomeWhatIsItAbout