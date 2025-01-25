import logo from '../../assets/images/logo.png'
import { TfiReload, TfiUser } from 'react-icons/tfi';
import { BsCart2 } from 'react-icons/bs';
import { IoMdHeartEmpty } from 'react-icons/io';
import { GoSearch } from 'react-icons/go';
import { Link, NavLink } from "react-router"
import Container from '../share/Container';


const Header = () => {
    const menuItems = [
        {
          title: "Home",
          link: "/",
        },
        {
          title: "About Us",
          link: "/about-us",
        },
        {
          title: "Shop",
          link: "/shop",
        },
        {
          title: "Blogs",
          link: "/blogs",
        },
        {
          title: "Contact",
          link: "/contact-us",
        },
        {
          title: "Order Track",
          link: "/order-track",
        },
      ];
  return (
    <div>
      <Container>
      <div className="flex relative bg-white  top-0 left-0 justify-between  items-center py-5 xl:py-">
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
                        ? "text-red-600"
                        : isActive
                        ? "text-lg  font-norma text-primary transition-all duration-300"
                        : "text-lg  font-normal text-black hover:text-primary transition-all duration-300"
                    }
                  >
                    {items.title}
                  </NavLink>
                  ))}
                </ul>
              </div>

              {/* User quick Icon */}
              <div className="flex gap-3 justify-between items-center">
                {/* Search Icons */}
                <div className="p-3.5  lg:p-4 hover:bg-primary duration-300 transition-all group bg-neutral-200">
                  <Link to="/">
                    <GoSearch className="text-xl group-hover:text-white duration-300 transition-all" />
                  </Link>
                </div>

                {/* Compire Icons */}
                <Link
                  to="/compare"
                  className="p-3.5 lg:p-4 hover:bg-primary duration-300 transition-all group bg-neutral-200"
                >
                </Link>
                  <div>
                    <TfiReload className="text-xl  group-hover:text-white duration-300 transition-all" />
                  </div>

                {/* Wishlist Icons */}
                <div className="relative group">
                  <div className="p-3.5 relative lg:p-4 hover:bg-primary duration-300 transition-all group bg-neutral-200">
                    <div>
                      <IoMdHeartEmpty className="text-xl  group-hover:text-white duration-300 transition-all" />
                      <span className="absolute -right-0 top-0.5 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-primary text-center text-[11px] text-white ">
                        0
                      </span>
                    </div>
                  </div>
                  {/* Hover cart */}
                  <div className="absolute group-hover:scale-100 scale-0 delay-150 group-hover:block duration-150 ease-in-out p-5 right-0 z-10 w-[400px] shadow-md bg-white">
                    <h1 className="text-lg font-normal text-neutral-600">
                      No Items In Wishlist
                    </h1>
                    {/* <LinkButton
                      label="Check Out"
                      fullWidth={true}
                      link={"/about-us"}
                    ></LinkButton> */}
                    {/* <LinkButtonOut
                      label={"Wishlist"}
                      fullWidth={true}
                      link={"/wishlist"}
                    ></LinkButtonOut> */}
                  </div>
                </div>

                {/* Cart Icons */}
                <div className="relative group">
                  <div className="p-3.5  group-hover:bg-primary relative lg:p-4 hover:bg-primary duration-300 transition-all group bg-neutral-200">
                    <div>
                      <BsCart2 className="text-xl !z-10 group-hover:text-white duration-300 transition-all" />
                      <span className="absolute duration-300 right-0 top-0.5 flex h-[20px] w-[20px] items-center justify-center rounded-full bg-primary text-center text-[11px] text-white ">
                        {/* { cartItems?.length } */} 10
                      </span>
                    </div>
                  </div>
                  {/* hover Card */}
                  <div className="absolute group-hover:scale-100 scale-0 delay-150 group-hover:block duration-150 ease-in-out p-5 right-0 z-10 w-[400px] shadow-md bg-white">
                    <h1 className="text-lg font-normal text-neutral-600">
                      No Items In Cart
                    </h1>
                    {/* <LinkButton
                      label="Check Out"
                      fullWidth={true}
                      link={"/about-us"}
                    ></LinkButton> */}
                  </div>
                </div>

                {/* User Icons */}
                <div className="relative group">
                  <div className="p-3.5 lg:p-4 hover:bg-primary group-hover:bg-primary  duration-300 transition-all bg-neutral-200">
                    <div>
                      <TfiUser className="text-xl group-hover:text-white duration-300 transition-all" />
                    </div>
                  </div>
                  {/* Hover Menu */}
                  <div
                    className="absolute top-[52px] right-0 scale-0 group-hover:scale-100 z-30 bg-white shadow-md w-[120px] 
                    transform group-hover:translate-y-0 transition-transform 
                    duration-500 ease-in-out  group-hover:block"
                  >
                    {/* <div className="flex flex-col items-center justify-center">
                      {user ? (
                        <>
                         <Link
                          className="hover:bg-primary hover:text-white duration-200
                         py-3 px-5 text-start text-base w-full border-b"
                          to="/dashboard"
                        >
                          Dashboard
                        </Link>

                        <button
                        className="hover:bg-primary hover:text-white duration-200
                         py-3 px-5 text-start text-base w-full"
                        onClick={()=> logOut()}>
                          Log Out
                        </button>

                        </>
                      ) : (
                        <>
                          <Link
                            className="hover:bg-primary hover:text-white duration-200
                        py-3 px-5 text-start text-base font-normal border-b w-full"
                            to="/login"
                          >
                            Login
                          </Link>
                          <Link
                            className="hover:bg-primary hover:text-white duration-200
                         py-3 px-5 text-start text-base w-full"
                            to="./register"
                          >
                            Register
                          </Link>
                        </>
                      )}
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header