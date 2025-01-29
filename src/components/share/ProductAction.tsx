import { BsCart3 } from 'react-icons/bs'
import { GrShop } from 'react-icons/gr'
import { toast } from 'sonner';
import QuickViewModal from '../QuickViewModal';
import { TError } from '../../types/global';
import { useAppSelector } from '../../redux/hooks';
import { selectCurrentUser } from '../../redux/features/auth/authSlice';
import { useNavigate } from 'react-router';
import { useAddProductInCartMutation } from '../../redux/features/cart/cartApi';

const ProductAction = ({ productId }: { productId: string }) => {
  const userInfo = useAppSelector(selectCurrentUser)

  const navigate = useNavigate();
  const [addCart] = useAddProductInCartMutation()
  const handleByeNow = (id: string) => {
    toast.info(id)
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
  return (
    <ul className="flex -mb-16 text-pera hover:text-pera z-0 group-hover:-translate-y-20 transition-all duration-500 group-hover:flex items-center justify-center gap-x-2 px-2 md:px-3 lg:px-10">
      <li
        onClick={() => handleByeNow(productId)}
        className="p-3.5  group-scoped bg-white rounded-md group hover:bg-primary transition-all duration-300"
      >
        <GrShop title='Add To Cart' className="text-xl hover-color text-pera transition-all duration-300"
        />
      </li>
      <li onClick={() => handleAddToCart(productId)} className="p-3.5 group-scoped bg-white rounded-md group hover:bg-primary transition-all duration-300">
        <BsCart3 title='Buy Now' className="text-xl hover-color text-pera  transition-all duration-300"
        />
      </li>
      <QuickViewModal productId={productId} />
    </ul>
  )
}

export default ProductAction
