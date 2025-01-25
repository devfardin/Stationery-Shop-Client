/* eslint-disable @typescript-eslint/no-explicit-any */
import Container from "./Container";
import ProductAction from "./ProductAction";
import { Link } from "react-router";

type Products = {
    products: any,
    startQuery?: number,
    endQuery?: number,
    isLoading?: boolean,
}
const ProductCard = ({ products, startQuery, endQuery, isLoading }: Products) => {
  

  if(isLoading) {
    return <>Loading</>
  }
  return (
    <div>
      <Container>
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products?.slice(startQuery, endQuery).map((product) => (
                <div key={product?._id} className="overflow-hidden group">
                  {/* Product feature image */}
                  <div className="relative  overflow-hidden bg-[#D9D9D9] rounded-lg">
                    <img
                      className="rounded-md group-hover:scale-125 group-hover:rotate-6 w-full transition-all duration-300"
                      src={product.featureImg}
                      alt="Feature image"
                    />
                    <ProductAction product={product} />

                    <span className="absolute top-3 right-3 py-1 px-3 xl:px-4 font-normal text-sm text-white  bg-primary">
                      {product?.stock <= 0 ? "Stock Out" : "New Arival"}
                    </span>
                  </div>
                  {/* Product Information */}
                  <div className="my-5">
                    <Link to='/' className="text-base md:text-xl hover:text-primary truncate transition-all duration-300 text-heading font-medium ">
                      {product.name}
                    </Link>
                    {/* Product prices */}
                    <div className="text-center flex items-center gap-3 mt-3">
                      <span className="text-xl truncate text-primary font-medium ">
                        ${product.price}
                      </span>
                      {/* {
                        product.discound > 0 && 
                      } */}

                      <span className="text-xl font-normal line-through text-[#888888]">
                        {
                        product?.discount > 0 && <span> ${product?.discount} </span>
                        }
                      </span>
                    </div>
                   
                  </div>
                </div>
              ))}
            </div>
        </div>
      </Container>
    </div>
  )
};

export default ProductCard;
