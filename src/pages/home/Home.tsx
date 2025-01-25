import Categories from "./Categories"
import HeroSection from "./HeroSection"
import PopularProducts from "./PopularProducts"
import Testimonials from "./Testimonials"
import TopRatedProducts from "./TopRatedProducts"

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection/>
      <Categories/>
      <PopularProducts/>
      <TopRatedProducts/>
      <Testimonials/>
    </div>
  )
}

export default Home
