import React, { useEffect, useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineRetweet } from "react-icons/ai";
import { LiaEyeSolid } from "react-icons/lia";
import { Link } from "react-router";
import ProductIconHover from "../../components/ProductIconHover";
import Loading from "../../components/share/Loading";
import { useGetProductsQuery } from "../../redux/features/product/productApi";


const Products = ({ category, searchResult }) => {

    const { data: productData, isLoading, isFetching } = useGetProductsQuery(undefined);
  

  const productFilter = productData?.data?.filter((item) => {
    const matchesSearch =
      searchResult === "" || item.name.toLowerCase().includes(searchResult);
    const matchesCategory = category === "" || item.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <div>
        {isLoading ? (
          <Loading/>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-7">
            {productFilter?.map((product, index) => (
              <div key={index} className="overflow-hidden group">
                {/* Product feature image */}
                <div className="relative  overflow-hidden bg-[#D9D9D9]">
                  <img
                    className="rounded-md group-hover:scale-125 group-hover:rotate-6 w-full transition-all duration-300"
                    src={product.feature}
                    alt="Feature image"
                  />

                 <ProductIconHover product={product}/>

                  <span className="absolute top-3 right-3 py-1 px-3 xl:px-4 font-medium text-sm text-white  bg-[#5AB27E]">
                    New Arival
                  </span>
                </div>
                {/* Product Information */}
                <div className="my-5">
                  <h2 className="text-xl  truncate text-center text-heading font-medium ">
                    {product.title}
                  </h2>
                  {/* Product prices */}
                  <div className="text-center flex items-center justify-center gap-3 mt-5">
                    <span className="text-xl truncate text-center text-primary font-medium ">
                      ${product.price}
                    </span>
                    <span className="text-xl font-normal line-through text-[#888888]">
                      ${product.discount}
                    </span>
                  </div>
                  {/* Add to cart button */}
                  <div className="flex flex-col justify-center items-center mt-5">
                    <Link
                      to={`/product/${product._id}`}
                      className="py-2.5 w-full md:w-auto  md:px-10 lg:py-3 lg:px-12 outline-none border-primary border-2 text-base font-medium text-heading hover:text-white bg-no hover:bg-primary hover:border-primary  duration-300 transition-all text-center"
                    >
                      Bye Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
