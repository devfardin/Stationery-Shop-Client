import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { useGetSingleProductQuery } from '../../redux/features/product/productApi'
import Loading from '../../components/share/Loading'
import PageHeader from '../../components/share/PageHeader'
import Container from '../../components/share/Container'
import { toast } from 'sonner'
import { FiMinus, FiPlus } from 'react-icons/fi'
import SingleUserInfo from '../../components/share/SingleUserInfo'
import { GoGift } from 'react-icons/go'
import { TbTruckReturn } from 'react-icons/tb'
import { useAddProductInCartMutation } from '../../redux/features/cart/cartApi'
import { useAppSelector } from '../../redux/hooks'
import { selectCurrentUser } from '../../redux/features/auth/authSlice'
import { TError } from '../../types/global'

const ProductSingle = () => {
  const navigate = useNavigate();
  const [addCart] = useAddProductInCartMutation()
  const userInfo = useAppSelector(selectCurrentUser)
    const { productId } = useParams();
    const [productQuantity, setProductQuantity] = useState(1);
    const { data: productData, isLoading } = useGetSingleProductQuery(productId)
  // Stock Management
  const isStock = productData?.data?.quantity > 0;
  if (productData?.data?.stock < productQuantity) {
    toast.error("Select Maxiam number");
  }
  const handleByeNow = async (id: string) => {
    const toastId = toast.loading('Item adding to your, please wait...')
    const user = userInfo?.userEmail;
    const product = id;
    const quantity = 1;
    const cartItems = {
      user,
      product,
      quantity
    }
    if(!user) {
      toast.warning('Please log in to purchase a product.')
    }
    const result = await addCart(cartItems)
    if (result?.error) {
      const errorMessage = (result?.error as TError).data?.message;
      toast.error(errorMessage, { id: toastId })
    } else {
      const success = result.data.message;
      toast.success(success, { id: toastId });
      navigate('/checkout')
    }
  }
  const handleAddToCart = async (id: string) => {
      const toastId = toast.loading('Item adding to your, please wait...')
      const user = userInfo?.userEmail;
      const product = id;
      const quantity = 1;
      const cartItems = {
        user,
        product,
        quantity
      }
      if(!user) {
        toast.warning('Please log in to purchase a product.')
      }
      const result = await addCart(cartItems)
      if (result?.error) {
        const errorMessage = (result?.error as TError).data?.message;
        toast.error(errorMessage, { id: toastId })
      } else {
        const success = result.data.message;
        toast.success(success, { id: toastId });
      }
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
              </h1>

              {/* Product status */}
              <div className="my-4 flex gap-2 items-center">
                <span className="text-base font-medium text-pera">Status:</span>
                <span className="text-base font-semibold text-[#198754]">
                  {isStock ? "In Stock " : <span className='text-secondary'>Stock Out</span>}
                </span>
              </div>
              {/* Product Price */}
              <div className="mt-4 flex gap-2 items-center">
                <span className="text-xl font-medium text-black">
                   ${productData?.data?.price}
                </span>
                <span className="text-xl font-medium text-[#888888] line-through px-1">
                  ${productData?.data?.discount > 0 && productData?.data?.discount}
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
                  onClick={() => handleAddToCart(productData?.data?._id)}
                  className="bg-[#333333] py-3.5 px-16 font-medium text-base text-white"
                >
                  Add to Cart
                </button>
                <button onClick={()=>handleByeNow(productData?.data?._id)}
                  className="bg-[#DDDDDD] py-3.5 px-16 font-medium text-base text-heading"
                >
                  Buy Now
                </button>
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
