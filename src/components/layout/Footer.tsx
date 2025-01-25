import logo from "../../assets/images/logo.png";
import { LuPhone } from "react-icons/lu";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import Container from "../share/Container";
import { Link } from "react-router";
const imporLink=[
  {
    name:'Home',
    link: '/'
  },
  {
    name:'About Us',
    link: '/about-us'
  },
  {
    name:'Shop',
    link: '/shop'
  },
  {
    name:'Blogs',
    link: '/blogs'
  },
  {
    name:'Contact Us',
    link: '/contact-us'
  },
  {
    name:'Order track',
    link: '/order-track'
  },
]
const Footer = () => (
  <div className='bg-bg py-10 border-t border-neutral-200  mt-16'>
    <Container>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-top justify-between gap-10'>
        {/* Footer Infor and Logo */}
        <div className=''>
        <img className='w-[50%] md:w-[60%] lg:w-[80%]' src={logo} alt="" />
        <a href='tel:+8801316049157' className='text-lg font-normal flex items-center gap-2 text-[#888888] hover:text-primary transition-all duration-300 cursor-pointer mt-8'>
          <LuPhone/>
          <span> +8801316049157</span>
        </a>
        <a href='mailto:contactfardin22@gmail.com' className='text-lg font-normal flex items-center gap-2 text-[#888888] hover:text-primary transition-all duration-300 cursor-pointer mt-4'>
          <HiOutlineEnvelope/>
          <span>contactfardin22@gmail.com</span>
        </a>
        <a href='#' className='text-lg font-normal flex items-center gap-2 text-[#888888] hover:text-primary transition-all duration-300 cursor-pointer mt-4'>
          <IoHomeOutline className='text-2xl'/>
          <span>123 Main Street Anytown, USA 12345</span>
        </a>
        </div>

        {/* Important Link */}
        <div>
          <h1 className='text-2xl font-normal text-heading mb-5'>Important Link</h1>
          {
            imporLink.map((link, index)=> <div key={index}>
              <Link className='text-base font-normal text-[#666666] hover:text-primary duration-200 transition-all flex gap-2 items-center mb-3'
              to={link.link}>
              <IoIosArrowForward/>  {link.name}
                </Link>
            </div>)            
          }
        </div>

        {/* Services Link */}
        <div>
          <h1 className='text-2xl font-normal text-heading mb-5'>Services Link</h1>
          {
            imporLink.map((link, index)=> <div key={index}>
              <Link className='text-base font-normal text-[#666666] hover:text-primary duration-200 transition-all flex gap-2 items-center mb-3'
              to={link.link}>
              <IoIosArrowForward/>  {link.name}
                </Link>
            </div>)            
          }
        </div>

        <div className='flex flex-col'>
        <h1 className='text-2xl font-normal text-heading mb-5 text-left'>Subscribe Updates</h1>
          <p className='text-base font-normal text-pera text-left'>Sign up to our mailing list now!</p>

          <form className='flex flex-col gap-4 mt-6 w-full'>

            <input className='text-base font-normal text-primary p-4 rounded border border-neutral-100 bg-white outline-none w-full'
            type="email" placeholder='Enter Your Email' />

           <button className={`text-lg font-normal text-center text-white hover:text-primary bg-primary hover:bg-transparent border-2 border-transparent hover:border-2 hover:border-primary duration-300 transition-all py-3 w-full mt-2 px-16`}
          type='submit'>Subscribe</button> 
          </form>
        </div>
      </div>
    </Container>
  </div>
)

export default Footer