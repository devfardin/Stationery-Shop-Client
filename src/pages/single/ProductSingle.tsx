import React, { useState } from 'react'
import { Link, useParams } from 'react-router'
import { useGetSingleProductQuery } from '../../redux/features/product/productApi'
import Loading from '../../components/share/Loading'
import PageHeader from '../../components/share/PageHeader'
import Container from '../../components/share/Container'
import { AiOutlineRetweet } from 'react-icons/ai'
import { IoHeartOutline } from 'react-icons/io5'
import { toast } from 'sonner'
import { FiMinus, FiPlus } from 'react-icons/fi'
import SingleUserInfo from '../../components/share/SingleUserInfo'
import { GoGift } from 'react-icons/go'
import { TbTruckReturn } from 'react-icons/tb'

const ProductSingle = () => {
    const { productId } = useParams();
    const [productQuantity, setProductQuantity] = useState(1);
    const { data: productData, isLoading } = useGetSingleProductQuery(productId)

    console.log(productData?.data);

  // Stock Management
  const isStock = productData?.data?.quantity > 0;

  if (productData?.data?.stock < productQuantity) {
    toast.error("Select Maxiam number");
  }
  const handleAddCart = (id: string) => {
    console.log(id);
  }
    if (isLoading) {
        return <div className="h-screen flex justify-center items-center">
            <Loading />
        </div>
    }
    const ProductName = `${productData.data.title.slice(0, 25)}...`
    return (
        <div>
            <PageHeader page={ProductName}/>
            <div className='mt-14'>
                <Container>
                <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-8 mt-20 gap-12">
            <div className="col-span-4">
              <img src={productData?.data?.feature} alt="Product Image" />
            </div>
            <div className="col-span-4">
              <h1 className="text-3xl font-medium text-heading mb-2">
                {productData?.data?.title}
                {/* <br />
                {data?._id}
                <br />
                {user?.email} */}
              </h1>
              <span className="bg-[#5AB27E] px-2 py-0.5 text-sm font-normal text-white">
                New Arival
              </span>

              {/* Product status */}
              <div className="w-32 my-4 flex justify-between items-center">
                <span className="text-base font-medium text-pera">Status:</span>
                <span className="text-base font-semibold text-[#198754]">
                  {isStock ? "In Stock " : "Stock Out"}
                </span>
              </div>
              {/* Product Price */}
              <div className="w-28 mt-4 flex justify-between items-center">
                <span className="text-xl font-medium text-pera">$7,500</span>
                <span className="text-xl font-medium text-[#888888] line-through">
                  {productData?.data?.discount > 0 && productData?.data?.discount}
                </span>
              </div>
              {/* Product Short Description */}
              <p className="text-pera text-base font-normal my-5">
                {productData?.data?.description}
              </p>
              {/* Product quantity manage */}
              <div className="flex items-center  gap-6">
                <h1 className="text-base font-medium text-pera">Quantity:</h1>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      productQuantity > 1
                        ? setProductQuantity(productQuantity - 1)
                        : ""
                    }
                    className="p-3 bg-[#F1F1F1] outline-none"
                  >
                    <FiMinus className="text-2xl" />
                  </button>
                  <input
                    type="number"
                    value={productQuantity}
                    className="bg-[#F1F1F1] p-2.5 w-[60px] outline-none text-center text-lg font-normal"
                  />
                  <button
                    onClick={() => setProductQuantity(productQuantity + 1)}
                    className="p-3 bg-[#F1F1F1] outline-none"
                  >
                    <FiPlus className="text-2xl" />
                  </button>
                </div>
                <h1 className="text-base font-medium text-[#198754]">
                  Only! {productData?.data?.quantity} Item Left
                </h1>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row gap-5 mt-6">
                <button
                  onClick={() => handleAddCart(productData?.data?._id)}
                  className="bg-[#333333] py-3.5 px-16 font-medium text-base text-white"
                >
                  Add to Cart
                </button>
                <Link to='/'
                  className="bg-[#DDDDDD] py-3.5 px-16 font-medium text-base text-heading"
                >
                  Buy Now
                </Link>
              </div>
              {/* Product Info */}
              <div className="flex justify-center gap-2 mt-8 flex-col">
                <div className="flex items-center gap-3">
                  <span className="text-base font-normal text-pera">SKU: </span>
                  <span className="text-base font-normal text-[#198754]">
                    {productData?.data?.sku}
                  </span>
                </div>

                <div className=" flex items-center gap-3">
                  <span className="text-base font-normal text-pera">
                    Category:
                  </span>
                  <span className="text-base font-normal text-[#198754]">
                    {productData?.data?.category?.name}
                  </span>
                </div>
              </div>
              {/* Line divider */}
              <div className="border-b border-neutral-300 w-full my-5"></div>
              {/* User Info */}
              <div className="mt-10 flex gap-6">
                <SingleUserInfo
                  Icon={GoGift}
                  title="Free Shipping"
                  subTitle="Order over 100$"
                />

                <SingleUserInfo
                  Icon={TbTruckReturn}
                  title="7 Days Return"
                  subTitle="Without any damage"
                />
              </div>
            </div>
          </div>
                </Container>
            </div>

        </div>
    )
}

export default ProductSingle
