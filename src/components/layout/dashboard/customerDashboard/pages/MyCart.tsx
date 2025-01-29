import { Image, Table, TableColumnsType, TableProps } from 'antd';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useAppSelector } from '../../../../../redux/hooks';
import { selectCurrentUser } from '../../../../../redux/features/auth/authSlice';
import { useCartItemDeleteMutation, useCartItemUpdateMutation, useGetItemsBaseUserQuery } from '../../../../../redux/features/cart/cartApi';
import { TCartItem } from '../../../../../types/cart';
import Loading from '../../../../share/Loading';
import LinkButton from '../../../../share/LinkButton';
import { useState, useEffect } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { toast } from 'sonner';
import { TError } from '../../../../../types/global';

const MyCart = () => {
  const userInfo = useAppSelector(selectCurrentUser);
  const { data: getCartItems, isFetching, isLoading } = useGetItemsBaseUserQuery(userInfo?.userEmail);
  const [cartItems, setCartItems] = useState<TCartItem[]>([]);
  const [updateCart] = useCartItemUpdateMutation();
  const [deleteCart] = useCartItemDeleteMutation();
  
  const calculateTotalPrice = () => {
    return cartItems?.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  };
  useEffect(() => {
    if (getCartItems?.data) {
      setCartItems(getCartItems.data);
    }
  }, [getCartItems]);
  const updateQuantity = async(id: string, newQuantity: number) => {
    const toastId = toast.loading('Cart item is updaing. please wait...')
    const updateData = {
      id,
      newQuantity
    }
    const result = await updateCart(updateData);
    if (result?.error) {
      const errorMessage = (result?.error as TError).data?.message;
      toast.error(errorMessage, { id: toastId })
    } else {
      const success = result.data.message;
      toast.success(success, { id: toastId })
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item._id === id ? { ...item, quantity: Math.max(newQuantity, 1) } : item
      )
    );
  };
  const handleProductDelete = async (id: string) => {
    const toastId = toast.loading('Cart item deleting, please wait...')
    const result = await deleteCart(id);
    if (result?.error) {
      const errorMessage = (result?.error as TError).data?.message;
      toast.error(errorMessage, { id: toastId })
    } else {
      const success = result.data.message;
      toast.success(success, { id: toastId })
    }
  }
  const dataTable = cartItems.map(({ _id, product: { title, description, feature, price }, quantity }: TCartItem, index: number) => ({
    key: _id,
    title,
    description,
    feature,
    quantity,
    price: `$ ${price}`,
    total: `$ ${(quantity * price).toFixed(2)}`,
    index: index + 1,
  }));
  const columns: TableColumnsType<typeof dataTable[0]> = [
    {
      title: 'Feature image',
      key: 'feature_img',
      responsive: ['lg'],
      render: (product) => (
        <div className="flex justify-center">
          <Image
            width={100}
            height={80}
            alt={product?.title}
            src={product?.feature}
            placeholder={isFetching}
          />
        </div>
      ),
    },
    {
      title: 'Product',
      dataIndex: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Quantity',
      responsive: ['md'],
      key: 'quantity',
      render: (product) => (
        <div className="flex items-center gap-3 cursor-pointer">
          <button
            onClick={() => updateQuantity(product.key, product.quantity - 1)}
            className="p-2 bg-[#F1F1F1] outline-none"
          >
            <FiMinus className="text-2xl" />
          </button>
          <input
            type="number"
            value={product.quantity}
            onChange={(e) => updateQuantity(product.key, Number(e.target.value))}
            className="bg-[#F1F1F1] p-1.5 w-[55px] outline-none text-center text-lg font-normal"
          />
          <button
            onClick={() => updateQuantity(product.key, product.quantity + 1)}
            className="p-2 bg-[#F1F1F1] outline-none"
          >
            <FiPlus className="text-2xl" />
          </button>
        </div>
      ),
    },
    {
      title: 'Total',
      dataIndex: 'total',
      responsive: ['md'],
    },
    {
      title: 'Action',
      key: 'action',
      render: (product) => (
        <button
          onClick={() => handleProductDelete(product.key)}
          className="text-right bg-primary md:bg-transparent p-2 text-white rounded text-2xl md:text-pera hover:text-primary duration-300 transition-all mt-2 md:mt-0">
          <RiDeleteBin6Line />
        </button>
      ),
    },
  ];
  const onChange: TableProps<typeof dataTable[0]>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <Loading dash={true} />
      </div>
    );
  }
  return (
    <div className="col-span-5 rounded-md bg-white shadow-md p-5">
      <h1 className="text-2xl font-medium text-heading border-b border-dashBorder pb-2">
        My Carts
      </h1>
    <div className="grid grid-cols-1 xl:grid-cols-7 gap-6 justify-between mt-7">
      {/* Cart Data Table */}
      <div className="col-span-full xl:col-span-5">
        <Table
          pagination={false}
          bordered
          loading={isFetching}
          columns={columns}
          dataSource={dataTable}
          onChange={onChange}
        />
      </div>
      <div className="col-span-full xl:col-span-2">
        <div className="border border-dashBorder px-10 py-8 bg-white">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium text-heading border-b border-dashBorder pb-4">
              Cart Total:
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
            <LinkButton
              label="Proceed to Checkout"
              fullWidth={true}
              link="/checkout"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyCart;
