import React, { useState } from 'react'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'
import MobileFilter from './MobileFilter'
import { LiaSearchSolid } from "react-icons/lia"
import { Combobox, Transition } from '@headlessui/react'
import { useGetProductsQuery } from '../../redux/features/product/productApi'
import { useCategoriesQuery } from '../../redux/features/category/categoryApi'
import Loading from '../../components/share/Loading'

const Filter = ({ handelCategory, handleSearch }) => {
    const { data: products, isLoading } = useGetProductsQuery(undefined);
    const { data: categorys, isLoading: loading } = useCategoriesQuery(undefined);



    const [menuOpen, setIsMenuOpen] = useState(false)
    const [query, setQuery] = useState('')
    // const [selected, setSelected] = useState(products[1])



    const filteredPeople =
        query === ''
            ? products
            : products?.data?.filter((product) =>
                product.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )

    if (isLoading && loading) {
        return <div className="h-screen flex justify-center items-center">
            <Loading />
        </div>
    }
    return (
        <div>
            <div className='md:flex-none md:block lg:hidden z-0'>
                <button className='text-2xl md:text-3xl hover:bg-primary transition-all duration-300 hover:text-white bg-[#BAE6FD] p-2  '
                    onClick={() => setIsMenuOpen(!menuOpen)}>
                    {
                        menuOpen ? <RxCross1 /> : <RxHamburgerMenu />
                    }
                </button>
            </div>

            <div className='border hidden lg:block border-[#dddddd] rounded-sm p-3'>
                <h1 className='text-xl font-medium text-heading pb-1 border-b border-[#dddddd]'>Filter</h1>

                <form
                    // onSubmit={handleSearch}
                    className='mt-4 relative'>

                    <input id='text' list='productsSuggest'
                        onChange={handleSearch}
                        type='text' name='search' placeholder='Search Products'
                        className='py-2 px-4 w-full font-normal text-lg text-pera border border-[#dddddd] focus:border-primary rounded outline-none duration-300 transition-all' />
                    <button disabled className='p-3.5 rounded-r-md bg-primary absolute top-0 right-0'>
                        <LiaSearchSolid className='text-white text-lg' />
                    </button>
                </form>
                <div>
                    <div className='mt-4'>
                        <h1 className='text-xl font-medium text-heading pb-1 border-b border-[#dddddd]'>Category</h1>
                        <div className='mt-4'>
                            <h2 onClick={() => handelCategory('')} className='text-base font-normal text-[#888888] mb-3 hover:text-primary duration-300 transition-all cursor-pointer hover:font-semibold flex items-center justify-between gap-5'>All Products <span>{products?.data?.length}</span></h2>
                            {
                                categorys?.data?.map((category, index) => <div key={index} onClick={() => handelCategory(category.name)}>
                                    <div className='flex items-center justify-between gap-5 group'>
                                        <h2 className='text-base font-normal text-[#888888] mb-3 group-hover:text-primary duration-300 transition-all cursor-pointer group-hover:font-semibold'>{category.name}</h2>
                                        <h3 className='text-base font-normal text-pera group-hover:text-primary duration-300 transition-all group-hover:font-semibold cursor-pointer'>
                                            {
                                                products?.data.filter((product) => product?.category?.name === category?.name).length
                                            }
                                        </h3>
                                    </div>
                                </div>)
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter