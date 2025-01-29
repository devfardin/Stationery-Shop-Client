import { Image, Table, TableColumnsType, TableProps } from 'antd';
import { useAppSelector } from '../../../../../redux/hooks';
import { selectCurrentUser } from '../../../../../redux/features/auth/authSlice';
import { useGetItemsBaseUserQuery } from '../../../../../redux/features/cart/cartApi';
import { TCartItem } from '../../../../../types/cart';
import Loading from '../../../../share/Loading';


const MyOrders = () => {
  const userInfo = useAppSelector(selectCurrentUser);
  const { data: getCartItems, isFetching, isLoading } = useGetItemsBaseUserQuery(userInfo?.userEmail);

  const dataTable = getCartItems?.data?.map(({ _id, product: { title, description, feature, price }, quantity }: TCartItem, index: number) => ({
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
      title: 'Ser No',
      dataIndex: 'index',
      width: 90,
      align: 'center',
    },
    {
      title: 'Feature image',
      key: 'feature_img',
      responsive: ['lg'],
      align: 'center',
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
      title: 'Status',
      dataIndex: 'title',
      align: 'center',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      align: 'center',
    },
    {
      title: 'Quantity',
      responsive: ['md'],
      dataIndex: 'quantity',
      align: 'center'
    },
    {
      title: 'Total',
      dataIndex: 'total',
      responsive: ['md'],
      align: 'center',
    }
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
        My Orders
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
        <div className="border border-dashBorder p-10 bg-white">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-medium text-heading border-b border-dashBorder pb-4">
              Order Summery:
            </h2>

            <h2 className="text-lg font-medium text-heading border-b border-dashBorder pb-4 flex justify-between items-center gap-5">
              Sub Total
              <span className="text-pera">$</span>
            </h2>

            <h2 className="text-lg font-normal text-pera border-b border-dashBorder pb-4 flex justify-between items-center gap-5">
              Tax (Incl. --%)
              <span className="text-pera">$00</span>
            </h2>

            <h2 className="text-lg font-medium text-heading flex justify-between items-center gap-5">
              Total Amount
              <span className="text-pera">$ 00</span>
            </h2>
           
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
export default MyOrders
