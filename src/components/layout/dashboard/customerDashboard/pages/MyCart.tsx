import { Image, Table, TableColumnsType, TableProps } from 'antd';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useAppSelector } from '../../../../../redux/hooks';
import { selectCurrentUser } from '../../../../../redux/features/auth/authSlice';
import { useGetItemsBaseUserQuery } from '../../../../../redux/features/cart/cartApi';
import { TCartItem } from '../../../../../types/cart';
import Loading from '../../../../share/Loading';
import LinkButton from '../../../../share/LinkButton';

const MyCart = () => {
    const userInfo = useAppSelector(selectCurrentUser)
    const { data: getCartItems, isFetching, isLoading } = useGetItemsBaseUserQuery(userInfo?.userEmail);
    const dataTable = getCartItems?.data?.map(({ _id, user, product: {title, description, feature, price}, quantity
    }: TCartItem, index: string) => ({
        key: _id,
        title,
        description,
        feature,
        quantity,
        index: index + 1,
    }));

    const columns: TableColumnsType<TCartItem> = [
        {
            title: 'Sr No',
            dataIndex: 'index',
            width: 70,
        },
        {
            title: 'Feature image',
            key: 'feature_img',
            responsive: ['lg'],
            render: (product) => {
                return (
                    <div className="flex justify-center">
                        <Image
                            width={100}
                            height={80}
                            alt={product?.name}
                            src={product?.feature}
                            placeholder={isFetching}
                        />
                    </div>
                )
            }
        },
        {
            title: 'Product',
            dataIndex: 'title',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            responsive: ['md'],
            width: 70
        },
        {
            title: 'Total',
            dataIndex: 'author',
            responsive: ['md']
        },
        {
            title: 'Action',
            key: 'x',
            render: (items) => {
                return (
                    <div>
                        <button
                            // onClick={() => handleCartDelete(cartItem?._id)}
                            className="text-right bg-primary md:bg-transparent p-2 text-white rounded text-2xl md:text-pera hover:text-primary duration-300 transition-all mt-2 md:mt-0"
                        >
                            <RiDeleteBin6Line />
                        </button>
                    </div>
                )
            }
        },
    ];
    const onChange: TableProps<TCartItem>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };

    if (isLoading) {
        return <div className="h-screen flex justify-center items-center">
            <Loading dash={true} />
        </div>
    }

    return (
        <div className="grid grid-cols-1 xl:grid-cols-7 gap-6 justify-between">
            {/* Cart Data Table */}
            <div className="col-span-full xl:col-span-5">
                <Table<TCartItem>
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
                            Cart Total:
                        </h2>

                        <h2 className="text-lg font-medium text-heading border-b border-dashBorder pb-4 flex justify-between items-center gap-5">
                            Sub Total
                            <span className="text-pera">$00</span>
                        </h2>

                        <h2 className="text-lg font-normal text-pera border-b border-dashBorder pb-4 flex justify-between items-center gap-5">
                            Tax (Incl. --%)
                            <span className="text-pera">$00</span>
                        </h2>

                        <h2 className="text-lg font-medium text-heading border-b border-dashBorder pb-4 flex justify-between items-center gap-5">
                            Total Amount
                            <span className="text-pera">$00</span>
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
    )
}

export default MyCart
