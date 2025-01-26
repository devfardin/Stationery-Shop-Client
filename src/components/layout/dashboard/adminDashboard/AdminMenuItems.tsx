import React from "react";
import { RxDashboard } from "react-icons/rx";
import { FaHome } from "react-icons/fa";
import { BsBoxSeam, BsCartCheck, BsShop } from "react-icons/bs";
import { MdOutlineAddBusiness, MdOutlineAddchart } from "react-icons/md";
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
          icon: BsBoxSeam,
        },
        {
          label: 'Add Product',
          link:'add-product',
          icon: MdOutlineAddchart,
        },
        {
          label: 'Product Categories',
          link:'product-categories',
          icon: TfiShoppingCartFull,
        },
        {
          label: 'Add Category',
          link:'add-category',
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
