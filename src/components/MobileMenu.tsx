import { Link } from 'react-router'

type TMenuItems = {
    title: string,
    link: string,
};
type TMobileMenuItems = {
    isOpenMenu: boolean;
    menuItems: TMenuItems[]
}
const MobileMenu = ({ isOpenMenu, menuItems }: TMobileMenuItems) => {
  return (
    <div>
      {
        <div
          className={` w-full ${isOpenMenu ? 'top-20' : '-top-[410px]'} z-10 bg-[#F4F8FB]
             transition-all left-0 duration-500 ease-in py-7 px-5  absolute lg:hidden`}>
          <ul className='flex flex-col gap-4 justify-center'>
            {
              menuItems.map((items, index) => <Link to={items.link} key={index}
                className='text-lg font-normal text-title hover:text-primary'>
                {items.title}
              </Link>)
            }
          </ul>

          <button className='py-2.5 mt-3 w-full md:w-auto  md:px-10 lg:py-3 lg:px-12 outline-none border-primary border-2 text-base font-medium text-heading hover:text-white bg-no hover:bg-primary hover:border-primary  duration-300 transition-all text-center'
          // onClick={onclick} 
          >Account</button>
        </div>
      }

    </div>
  )
}

export default MobileMenu
