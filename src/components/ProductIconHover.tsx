/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { LiaEyeSolid } from "react-icons/lia";
import { toast } from "sonner";
type TProductId = {
  product: string,
}
const ProductIconHover: React.FC<TProductId> = ( {product}) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(product);
  const handleQuickShow = ( id: string ) => {
    setIsOpen(true);
    console.log(id);
  };

  return (
    <ul className="flex -mb-16 text-pera hover:text-pera z-0 group-hover:-translate-y-20 transition-all duration-500 group-hover:flex items-center justify-center gap-x-2 px-2 md:px-3 lg:px-10">
      <li
        onClick={() => toast.success(product)}
        className="p-3.5  group-scoped bg-white rounded-md group hover:bg-primary transition-all duration-300"
      >
        <BsCart3
          className="text-xl hover-color text-pera transition-all duration-300"
        />
      </li>
      <li
        onClick={() => handleQuickShow( product)}
        className="p-3.5 group-scoped bg-white rounded-md group hover:bg-primary transition-all duration-300"
      >
        <LiaEyeSolid
          className="text-xl hover-color text-pera transition-all duration-300"
        />
      </li>
    </ul>
  );
};

export default ProductIconHover;
