import { Modal } from 'antd'
import { useState } from 'react'
import { LiaEyeSolid } from 'react-icons/lia';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { toast } from 'sonner';
import { useGetSingleProductQuery } from '../redux/features/product/productApi';
import Loading from './share/Loading';

const QuickViewModal = ({ productId }: { productId: string }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [productQuantity, setProductQuantity] = useState(1);
    const { data: productData, isLoading } = useGetSingleProductQuery(productId)

    // Stock Management
    const isStock = productData?.data?.quantity > 0;

    if (productData?.data?.stock < productQuantity) {
        toast.error("Select Maxiam number");
    }

    const showModal = () => {
        setIsModalOpen(true);
    };
    return (
        <div>
            <li onClick={showModal} className="p-3.5 group-scoped bg-white rounded-md group hover:bg-primary transition-all duration-300">
                <LiaEyeSolid title='Quick View'
                    className="text-xl hover-color text-pera transition-all duration-300"
                />
            </li>
            <Modal
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={null}
                centered
                width={{
                    xs: '90%',
                    sm: '80%',
                    md: '70%',
                    lg: '50%',
                    xl: '45%',
                    xxl: '55%',
                }}
            >
                {
                    isLoading ? <div className="h-screen flex justify-center items-center">
                        <Loading />
                    </div> : 
                    <div className="grid grid-cols-1 md:grid-cols-8 lg:grid-cols-8 gap-12">
                        <div className="col-span-4">
                            <img src={productData?.data?.feature} alt="Product Image" />
                        </div>
                        <div className="col-span-4">
                            <h1 className="text-2xl font-medium text-heading mb-2">
                                {productData?.data?.title}
                            </h1>

                            {/* Product status */}
                            <div className="my-4 flex gap-2 items-center">
                                <span className="text-base font-medium text-pera">
                                    Status:
                                </span>
                                <span className="text-base font-semibold text-[#198754]">
                                    {isStock ? "In Stock " 
                                    : <span className='text-secondary'>Stock Out</span>}
                                </span>
                            </div>
                            {/* Product Price */}
                            <div className="mt-4 flex gap-2 items-center">
                                <span className="text-xl font-medium text-black">
                                    {productData?.data?.price}
                                </span>
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
                                <h1 className="text-base font-medium text-pera">
                                    Quantity:
                                </h1>
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
                                        onClick={() =>
                                            setProductQuantity(productQuantity + 1)
                                        }
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
                                <button className="bg-[#333333] py-3.5 px-16 font-medium text-base text-white">
                                    Add to Cart
                                </button>
                                <button className="bg-[#DDDDDD] py-3.5 px-16 font-medium text-base text-heading">
                                    Buy Now
                                </button>
                            </div>
                            {/* Product Info */}

                            <div className="flex justify-center gap-2 mt-8 flex-col">
                                <div className="flex items-center gap-3">
                                    <span className="text-base font-normal text-pera">
                                        SKU:
                                    </span>
                                    <span className="text-base font-normal text-[#198754]">
                                        {productData?.data?.sku}
                                    </span>
                                </div>

                                <div className=" flex items-center gap-3">
                                    <span className="text-base font-normal text-pera">
                                        Category:
                                    </span>
                                    <span className="text-base font-normal text-[#198754]">
                                        {productData?.data?.category.name}
                                    </span>
                                </div>
                            </div>
                            {/* Line divider */}
                            <div className="border-b border-neutral-300 w-full my-5"></div>
                           
                        </div>
                    </div>
                }
            </Modal>
        </div>
    )
}

export default QuickViewModal
