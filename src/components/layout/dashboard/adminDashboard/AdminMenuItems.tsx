import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { BsCartCheck, BsShop } from "react-icons/bs";
import { MdOutlineAddBusiness } from "react-icons/md";
import SidebarLink from "../component/SidebarLink";
import { TfiShoppingCartFull } from "react-icons/tfi";

type AdminMenuItemsProps = {
    isOpen: boolean; // Indicates if the menu is open
  };
const AdminMenuItems:React.FC<AdminMenuItemsProps> = ({ isOpen }) => {
    const customerMenu = [
        {
          label: "Home",
          link: "/",
          icon: FaHome,
        },
        {
          label: 'Dashboard',
          link: '/dashboard',
          icon: RxDashboard,
        },
        {
          label:'All Products',
          link:'products',
          icon: BsShop,
        },
        {
          label: 'Add Product',
          link:'add-product',
          icon: MdOutlineAddBusiness,
        },
        {
          label: 'Product Categories',
          link:'product-categories',
          icon: TfiShoppingCartFull,
        },
        {
          label: 'Orders',
          link:'orders',
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

export default AdminMenuItems
