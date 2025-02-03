import { MenuItem, MenuItems } from '@headlessui/react';
import { Link } from 'react-router'
import { selectCurrentUser } from '../redux/features/auth/authSlice';
import { useAppSelector } from '../redux/hooks';
type MenuItemType = {
  menuItems: {
    title: string;
    link: string;
  }[];
};

const MobileMenu = ({ menuItems }: MenuItemType) => {
  const user = useAppSelector(selectCurrentUser);
  return (
    <MenuItems anchor="bottom" className="w-full bg-[#F4F8FB] p-1  text-white mt-5 py-7 px-5 lg:hidden 
     origin-top-right transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
      {
        menuItems.map((item) => <MenuItem key={item.link}>
          <Link to={item.link} key={item.link}
            className='text-lg font-normal block mt-4 text-title hover:text-primary text-black'>
            {item.title}
          </Link>
        </MenuItem>
        )
      }
      <MenuItem>
        <Link to={`${user?.role}/dashboard`} className='py-2.5 block mt-3 w-full md:w-auto  md:px-10 lg:py-3 lg:px-12 outline-none border-primary border-2 text-base font-medium text-heading hover:text-white bg-no hover:bg-primary hover:border-primary  duration-300 transition-all text-center text-primary'>
          Account
        </Link>
      </MenuItem>
    </MenuItems>
  )
}

export default MobileMenu
