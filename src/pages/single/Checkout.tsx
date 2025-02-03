import { FieldValues } from "react-hook-form";
import STForm from "../../components/form/STForm";
import Container from "../../components/share/Container"
import Loading from "../../components/share/Loading";
import PageHeader from "../../components/share/PageHeader"
import { selectCurrentUser } from "../../redux/features/auth/authSlice";
import { useGetItemsBaseUserQuery } from "../../redux/features/cart/cartApi";
import { useAppSelector } from "../../redux/hooks";
import STInput from "../../components/form/STInput";
import SubmitBtn from "../../components/form/SubmitBtn";
import { useAddOrderMutation } from "../../redux/features/order/orderApi";
import { TError } from "../../types/global";
import { toast } from "sonner";
import { TCartItem } from "../../types/cart";

const Checkout = () => {
  const userInfo = useAppSelector(selectCurrentUser);
  const [addOrder] = useAddOrderMutation();
  const { data: getCartItems, isFetching } = useGetItemsBaseUserQuery(userInfo?.userEmail);

  
  const handleCheckOut = async (data:FieldValues) => {
    const toastId = toast.loading('Order Creating');
    const shiping = data;

    const porducts = getCartItems.data.map((item: TCartItem)=> { return item.product }
    )
    const checkoutInfo = {
      shiping,
      porducts,
    }
    const result = await addOrder(checkoutInfo)
    console.log(result);
    console.log( getCartItems?.data);
    
    if (result?.error) {
      const errorMessage = (result?.error as TError).data?.message;
      toast.error(errorMessage, { id: toastId })
    } else {
      const success = result.data.message;
      toast.success(success, { id: toastId })
    }
  }
  const calculateTotalPrice = () => {
    return getCartItems?.data?.reduce((total: number, item: { product: { price: number; }; quantity: number; }) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };
  if (isFetching) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loading dash={true} />
      </div>
    )
  }
  return (
    <div>
      <PageHeader page="Check out" />
      <Container>
        <STForm onSubmit={handleCheckOut}>
          <div className="grid grid-cols-1 xl:grid-cols-7 gap-6 justify-between mt-7">
            {/* Cart Data Table */}
            <div className="col-span-full xl:col-span-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between items-center">
                <STInput name="firstName" label="First Name" type="text" />
                <STInput name="lastName" label="Last Name" type="text" />
              </div>
              <STInput name="address" label="address" type="text" />
              <STInput name="Apartment" label="Apartment, suite, etc. (optional)" type="text" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between items-center">
                <STInput name="city" label="City" type="text" />
                <STInput name="postCode" label="Post Code" type="text" />
              </div>
            </div>

            <div className="col-span-full xl:col-span-2">
              <div className="border border-dashBorder px-10 py-8 bg-white">
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-medium text-heading border-b border-dashBorder pb-4">
                  Order Summery
                  </h2>
                  <h2 className="text-lg font-medium text-heading border-b border-dashBorder pb-4 flex justify-between items-center gap-5">
                    Sub Total
                    <span className="text-pera">${calculateTotalPrice().toFixed(2)}</span>
                  </h2>
                  <h2 className="text-lg font-normal text-pera border-b border-dashBorder pb-4 flex justify-between items-center gap-5">
                    Tax (Incl. --%)
                    <span className="text-pera">$00</span>
                  </h2>
                  <h2 className="text-lg font-medium text-heading border-b border-dashBorder pb-4 flex justify-between items-center gap-5">
                    Total Amount
                    <span className="text-pera">${calculateTotalPrice().toFixed(2)}</span>
                  </h2>
                  <SubmitBtn type='submit' label='Make payment' />
              </div>
            </div>
          </div>
        </div>
      </STForm>
      </Container>
    </div>
  )
}

export default Checkout
