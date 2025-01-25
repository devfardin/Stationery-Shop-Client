import { BsCart3 } from 'react-icons/bs'
import { GrShop } from 'react-icons/gr'
import { LiaEyeSolid } from 'react-icons/lia'

const ProductAction = ({product}) => {
  return (
    <ul className="flex -mb-16 text-pera hover:text-pera z-0 group-hover:-translate-y-20 transition-all duration-500 group-hover:flex items-center justify-center gap-x-2 px-2 md:px-3 lg:px-10">
      <li
        // onClick={() => toast.success(product?._id)}
        className="p-3.5  group-scoped bg-white rounded-md group hover:bg-primary transition-all duration-300"
      >
        <GrShop title='Add To Cart'
          className="text-xl hover-color text-pera 
                                        transition-all duration-300"
        />
      </li>
      <li className="p-3.5 group-scoped bg-white rounded-md group hover:bg-primary transition-all duration-300">
        <BsCart3 title='Buy Now'
          className="text-xl hover-color text-pera 
                                        transition-all duration-300"
        />
      </li>
      <li
        // onClick={() => handleQuickShow( product._id )}
        className="p-3.5 group-scoped bg-white rounded-md group hover:bg-primary transition-all duration-300"
      >
        <LiaEyeSolid title='Quick View'
          className="text-xl hover-color text-pera 
                                        transition-all duration-300"
        />
      </li>
      {/* <QuickShowProduct isOpen={isOpen} setIsOpen={setIsOpen} id={product._id}/> */}
    </ul>
  )
}

export default ProductAction
