import React from "react";
import { FaHome } from "react-icons/fa";
import { BsCartCheck} from "react-icons/bs";
import SidebarLink from "../component/SidebarLink";
import { HiOutlineShoppingBag } from "react-icons/hi2";

type AdminMenuItemsProps = {
    isOpen: boolean; // Indicates if the menu is open
  };
const CustomerMenuItems:React.FC<AdminMenuItemsProps> = ({ isOpen }) => {
    const customerMenu = [
        {
          label: "Home",
          link: "/",
          icon: FaHome,
        },
        {
          label: "My Orders",
          link: "my-orders",
          icon: HiOutlineShoppingBag,
        },
        {
          label: "My Cart",
          link: "my-cart",
          icon: BsCartCheck,
        },
        {
          label: "Payment History",
          link: "payment-history",
          icon: BsCartCheck,
        },
        
      ];
  return (
    <div className="flex w-full justify-self-start flex-col gap-3">
    {customerMenu.map((adminLink, index) => (
      <SidebarLink
        key={index}
        to={adminLink.link}
        label={adminLink.label}
        icon={adminLink.icon}
        isOpen={isOpen}
      />
    ))}
  </div>
  )
}


export default CustomerMenuItems
