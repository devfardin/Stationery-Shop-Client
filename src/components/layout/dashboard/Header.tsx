import { FiMenu, FiUser } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { Menu } from "@headlessui/react";
import { Link } from "react-router";
import { IoSettingsOutline } from "react-icons/io5";
import { PiSignOut } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io";
import adminAvather from "../../../assets/images/admin.jpg";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { logOut, selectCurrentUser } from "../../../redux/features/auth/authSlice";
import React from "react";

type SidebarProps = {
    isOpen: boolean; 
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  };
const Header: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.toLocaleDateString("default", { month: "long" });
  const day = date.getDate();
 const dispatch = useAppDispatch()
 const user = useAppSelector(selectCurrentUser);

  const handleLogout = () => {
    dispatch(logOut());
    toast.success('Logout success')
  }

  return (
    // Header wrpper Start
    <div className="bg-white flex-1 transition-all duration-150 rounded-lg mb-8 px-5 py-2 !w-full mt-2">
      {/* header innder container star */}
      <div className="flex justify-between items-center gap-5 ">
        {/* Left start */}
        <div className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
            >
          <FiMenu className="text-2xl hover:text-dashPrimary duration-300" />
        </div>

        {/* Right Start */}
        <div className="flex items-center gap-3 md:gap-5">
          <div className="hidden md:block">
            <h2 className="flex items-center gap-2 border border-[#E2E8F0] py-2 px-3 lg:px-4 rounded-sm text-base lg:text-lg font-medium text-dashPrimary">
              <SlCalender className="text-xl" />
              {` ${day} ${month} ${year}`}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <div className=" ">
              <Menu as="div" className="relative">
                <div>
                  <Menu.Button>
                    <div className="flex gap-2 sm:gap-4 items-center">
                      <img
                        className="w-14 h-14 rounded-full"
                        src={adminAvather}
                        alt=""
                      />
                      <div className="hidden sm:flex flex-col justify-start">
                        <span className="text-base lg:text-lg font-normal text-dashPrimary text-left">
                          {user?.role}
                        </span>
                        <h2 className="flex items-center justify-between gap-2 text-base lg:text-lg font-semibold">
                          name <IoIosArrowDown />
                        </h2>
                      </div>
                    </div>
                  </Menu.Button>
                </div>

                <Menu.Items className="absolute right-0 py-2 mt-2 w-44 origin-top-right divide-y divide-gray-100 rounded-sm bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      <Link
                        to="profile"
                        className=" hover:bg-dashPrimary hover:text-white text-base font-normal flex w-full gap-1 items-center rounded-md px-2 py-1 text-dashPrimary"
                      >
                        <FiUser></FiUser>
                        Profile
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <Link
                        to="/profile"
                        className=" hover:bg-dashPrimary hover:text-white text-base font-normal flex w-full gap-1 items-center rounded-md px-2 py-1 text-dashPrimary"
                      >
                        <IoSettingsOutline></IoSettingsOutline>
                        Setting
                      </Link>
                    </Menu.Item>

                    <Menu.Item>
                      <button
                        onClick={handleLogout}
                        className=" hover:bg-dashPrimary hover:text-white text-base font-normal flex w-full gap-1 items-center rounded-md px-2 py-1 text-dashPrimary"
                      >
                        <PiSignOut />
                        Logout
                      </button>
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
