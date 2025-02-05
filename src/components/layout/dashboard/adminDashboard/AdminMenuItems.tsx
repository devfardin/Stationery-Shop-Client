import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaHome, FaUsers } from "react-icons/fa";
import { BsBoxSeam, BsCartCheck, BsCartPlus } from "react-icons/bs";
import { MdOutlineAddchart } from "react-icons/md";
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
          link: '/admin/dashboard',
          icon: RxDashboard,
        },
        {
          label:'All Products',
          link:'products',
          icon: BsBoxSeam,
        },
        {
          label: 'Add Product',
          link:'add-product',
          icon: MdOutlineAddchart,
        },
        {
          label: 'All Categories',
          link:'all-categories',
          icon: TfiShoppingCartFull,
        },
        {
          label: 'Add Category',
          link:'add-category',
          icon: BsCartPlus ,
        },
        {
          label: 'Orders',
          link:'orders',
          icon: BsCartCheck,
        },
        {
          label: 'All Users',
          link:'users',
          icon: FaUsers,
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
