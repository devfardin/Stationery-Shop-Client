import Categories from "./Categories"
import HeroSection from "./HeroSection"
import PopularProducts from "./PopularProducts"
import TopRatedProducts from "./TopRatedProducts"

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection/>
      <Categories/>
      <PopularProducts/>
      <TopRatedProducts/>
    </div>
  )
}

export default Home
