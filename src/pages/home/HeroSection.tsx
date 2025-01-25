import { Link } from 'react-router'
import Container from '../../components/share/Container'
import { GoArrowRight } from 'react-icons/go'
const HeroSection = () => {
  return (
    <div className='bg-[url(./assets/images/hero-section.png)] bg-no-repeat bg-[40%] lg:bg-center py-64 overflow-hidden'>
      <Container>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
            {/* Blank space */}
            <div className='hidden lg:block'></div>
            <div className='-mr-40'>
                <h2 className='bg-secondary p-4 lg:p-5 font-bold text-white text-2xl lg:text-3xl italic inline-block'>Big discount</h2>
                <h1 className='text-primary font-extrabold text-5xl md:text-6xl my-5 lg:text-[80px] uppercase'>kids offer</h1>
                <Link to='shop' className='text-lg md:text-xl font-semibold text-white py-4 px-10 rounded-full uppercase bg-primary hover:bg-secondary transition-all duration-300 inline-flex gap-2 items-center'>Shop Now <GoArrowRight size={25}/></Link>
            </div>
        </div>
      </Container>
    </div>
  )
}

export default HeroSection
