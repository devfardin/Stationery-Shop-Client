import Loading from '../../../../share/Loading'
import { Select, Space, Table, TableColumnsType, TableProps } from 'antd';
import { TCategoryTable } from '../../../../../types/categories'
import { toast } from 'sonner';
import { TError } from '../../../../../types/global';
import { useGetOrdersQuery, useUpdateOrderStatusMutation } from '../../../../../redux/features/order/orderApi';
import { TOrder } from '../../../../../types/Orders';

const Orders = () => {
  const { data: getOrders, isLoading, isFetching } = useGetOrdersQuery(undefined);
  const [updateOrderStatus] = useUpdateOrderStatusMutation();

  const handleChange = async(value: string) => {
    const getValue = value.split(' ')
    const status = getValue[0]
    const id = getValue[1]
    const info = {status, id}
    console.log(info);
    
    const toastId = toast.loading('Updating Order status, please wait...');
    const result = await updateOrderStatus(info);
    if (result?.error) {
      const errorMessage = (result?.error as TError).data?.message;
      toast.error(errorMessage, { id: toastId })
    } else {
      const success = result.data.message;
      toast.success(success, { id: toastId })
      setTimeout(()=> {
        location.reload();
      }, toastId as number)
    }
   };
  const dataTable = getOrders?.data?.map(({ _id, porducts, shiping, status, transation, 
  }: TOrder, index: string) => ({
    key: _id,
    customer: `${shiping.firstName} ${shiping.lastName}`,
    product: porducts?.map((items) => <h1>{items.title}  $ {items.price}</h1>),
    address: shiping.address,
    apartment: shiping.Apartment,
    paymentStatus: transation?.transationStatus,
    transitionId: transation?.id,
    status,
    index: index + 1,
  }));

  const columns: TableColumnsType<TCategoryTable> = [
    {
      title: 'Sr No',
      dataIndex: 'index',
      width: 70,
    },
    {
      title: 'Customer Name',
      key: 'feature_img',
      responsive: ['lg'],
      dataIndex: 'customer'
    },
    {
      title: 'Product Name',
      dataIndex: 'product',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
   
    {
      title: 'Apartment',
      dataIndex: 'apartment',
      responsive: ['md']
    },
    {
      title: 'Payment Status',
      dataIndex: 'paymentStatus',
      responsive: ['md']
    },
    {
      title: 'Status',
      responsive: ['md'],
      align: 'center',
      render: (items) => {
        return (
            <Space wrap>
            <Select
              defaultValue={items?.status}
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: `Pending ${items?.key}`, label: 'Pending' },
                { value: `Paid ${items?.key}`, label: 'Paid' },
                { value: `Shipped ${items?.key}`, label: 'Shipped' },
                { value: `Completed ${items?.key}`, label: 'Completed' },
                { value: `Cancelled ${items?.key}`, label: 'Cancelled' },
                { value: `Failed ${items?.key}`, label: 'Failed' },
              ]}
            />
          </Space>
        )
      }
    },
    {
      title: 'Transition Id',
      dataIndex: 'transitionId',
      responsive: ['md']
    },
  ];
  const onChange: TableProps<TCategoryTable>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  if (isLoading) {
    return <div className="h-screen flex justify-center items-center"> 
    <Loading dash={true} /> 
    </div>
  }
  return (
    <div className="col-span-5 rounded-md bg-white shadow-md p-5">
      <h1 className="text-2xl font-medium text-heading pb-2 mb-3">
        All Orders
      </h1>

      <Table<TCategoryTable>
        pagination={false}
        bordered
        loading={isFetching}
        columns={columns}
        dataSource={dataTable}
        onChange={onChange}
        />
    </div>
  )
}
export default Orders
