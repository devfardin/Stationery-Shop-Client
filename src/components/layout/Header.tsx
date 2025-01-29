import logo from '../../assets/images/logo.png'
import { TfiUser } from 'react-icons/tfi';
import { BsCart2 } from 'react-icons/bs';
import { Link, NavLink } from "react-router"
import Container from '../share/Container';
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx';
import { useState } from 'react';
import MobileMenu from '../MobileMenu';
import LinkButton from '../share/LinkButton';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { logOut, selectCurrentUser } from '../../redux/features/auth/authSlice';
import { toast } from 'sonner';
import { Menu, MenuButton } from '@headlessui/react';
import { TMenuItemType } from '../../types/global';
import { useGetItemsBaseUserQuery } from '../../redux/features/cart/cartApi';

const Header = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector(selectCurrentUser);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const {data: getCartItems} = useGetItemsBaseUserQuery(user?.userEmail);
  const menuItems: TMenuItemType[] = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Us",
      link: "/about",
    },
    {
      title: "Shop",
      link: "/shop",
    },
    {
      title: "Blogs",
      link: "/blog",
    },
    {
      title: "Contact",
      link: "/contact",
    },
  ];
  const handleLogout = () => {
    dispatch(logOut());
    toast.success('Logout success')
  }
  return (
    <div className='border-b border-neutral-200'>
      <Container>
        <div>
          <div className="flex relative bg-white  top-0 left-0 justify-between  items-center py-5">
            {/* Logo  */}
            <div className="w-[120px] md:w-[150px] lg:w-[150px] xl:w-[200px]">
              <img className="w-full" src={logo} alt="Website Logo" />
            </div>

            {/* Website Menu and logos*/}
            <div className="flex justify-between  bg-white ">
              <div className="lg:flex justify-between items-center gap-10 hidden relative ">
                {/* Menu Items */}
                <div>
                  <ul className="flex  gap-7 justify-center">
                    {menuItems.map((items, index) => (
                      <NavLink
                        to={items.link}
                        key={index}
                        className={({ isActive, isPending }) =>
                          isPending
                            ? "text-secondary"
                            : isActive
                              ? "text-xl  font-normal text-secondary transition-all duration-300"
                              : "text-xl  font-normal text-black hover:text-primary transition-all duration-300"
                        }
                      >
                        {items.title}
                      </NavLink>
                    ))}
                  </ul>
                </div>

                {/* User quick Icon */}
                <div className="flex gap-3 justify-between items-center">

                  {/* Cart Icons */}
                  <div className="relative group">
                    <div className="p-3.5 hover:bg-primary hover:text-white group-hover:bg-primary  duration-300 transition-all bg-neutral-200">
                      <div>
                        <BsCart2 className="text-2xl group-hover:text-white" />
                        <span className="absolute duration-300 right-0 top-0.5 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#FF699B] text-center text-[11px] text-white font-medium">
                          {getCartItems?.data?.length}
                        </span>
                      </div>
                    </div>
                    {/* hover Card */}
                    <div className="absolute group-hover:scale-100 scale-0 delay-150 group-hover:block duration-150 ease-in-out p-5 right-0 z-10 w-[400px] shadow-md bg-white">
                      <h1 className="text-lg font-normal text-neutral-600">
                        No Items In Cart
                      </h1>
                      <LinkButton
                        label="View Cart"
                        fullWidth={true}
                        link={"/customer/dashboard/my-cart"}
                      ></LinkButton>
                    </div>
                  </div>

                  {/* User Icons */}
                  <div className="relative group">
                    <div className="p-3.5 hover:bg-primary hover:text-white group-hover:bg-primary  duration-300 transition-all bg-neutral-200">
                      <div>
                        <TfiUser className="text-2xl group-hover:text-white" />
                      </div>
                    </div>
                    {/* Hover Menu */}
                    <div
                      className="absolute top-[52px] right-0 scale-0 group-hover:scale-100 z-30 bg-white shadow-md w-[120px] 
                    transform group-hover:translate-y-0 transition-transform 
                    duration-500 ease-in-out  group-hover:block"
                    >
                      <div className="flex flex-col items-center justify-center">
                        {user ? (
                          <>
                            <Link
                              className="hover:bg-primary hover:text-white duration-200
                         py-3 px-5 text-start text-base w-full border-b border-primary"
                              to={`/${user.role}/dashboard`}
                            >
                              Dashboard
                            </Link>

                            <button
                              className="hover:bg-primary hover:text-white duration-200
                         py-3 px-5 text-start text-base w-full"
                              onClick={handleLogout}>
                              Log Out
                            </button>

                          </>
                        ) : (
                          <>
                            <Link
                              className="hover:bg-primary hover:text-white duration-200
                         py-3 px-5 text-start text-base w-full border-b border-primary"
                              to="/login"
                            >
                              Login
                            </Link>
                            <Link
                              className="hover:bg-primary hover:text-white duration-200
                         py-3 px-5 text-start text-base w-full border-b border-primary"
                              to="./register"
                            >
                              Register
                            </Link>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:flex-none md:block lg:hidden z-0">
            <Menu>
            <MenuButton
              className="text-2xl md:text-3xl hover:bg-primary transition-all duration-300 hover:text-white bg-[#BAE6FD] p-2 rounded "
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              {isOpenMenu ? <RxCross1 /> : <RxHamburgerMenu />}
            </MenuButton>
            <MobileMenu menuItems={menuItems}/>
          </Menu>
          </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
