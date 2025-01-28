import { Button, Image, Table, TableColumnsType, TableProps } from "antd";
import { useGetProductsQuery, useProductDeleteMutation } from "../../../../../redux/features/product/productApi"
import Loading from "../../../../share/Loading";
import { Menu } from "@headlessui/react";
import { FiEdit } from "react-icons/fi";
import { TDataTableItem } from "../../../../../types/product";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router";
import { toast } from "sonner";
import { TError } from "../../../../../types/global";

const AllProducts = () => {
  const { data: productData, isLoading, isFetching } = useGetProductsQuery(undefined);
  const [deleteProduct] = useProductDeleteMutation();

  // Delete functionalaty
  const handleProductDelete = async(id: string) => {
    const toastId = toast.loading('Deleting Category, please wait...');
    const result = await deleteProduct(id);
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

  const dataTable = productData?.data?.map(({ _id, title, author, description, price, discount, quantity, sku, category, brand, feature,
  }: TDataTableItem, index: string) => ({
    key: _id,
    title,
    author: author?.firstName,
    description,
    price: `$ ${price}`,
    discount: `$${discount}`,
    quantity: `${quantity} Items`,
    sku,
    category: category?.name,
    brand,
    feature,
    index: index + 1,
  }));

  const columns: TableColumnsType<TDataTableItem> = [
    {
      title: 'Sr No',
      dataIndex: 'index',
      width: 70,
    },
    {
      title: 'Feature',
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
      title: 'Product Name',
      dataIndex: 'title',
    },
    {
      title: 'Author',
      dataIndex: 'author',
      responsive: ['lg']
    },
    {
      title: 'Price',
      dataIndex: 'price',
      responsive: ['sm'],
      width: 80,
    },
    {
      title: 'discount',
      dataIndex: 'discount',
      responsive: ['xl'],
      width: 80,
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      responsive: ['sm'],
    },
    {
      title: 'Product Sku',
      dataIndex: 'sku',
      responsive: [ 'xl'],
    },
    {
      title: 'Product Category',
      dataIndex: 'category',
    },
    {
      title: 'Product Brand',
      dataIndex: 'brand',
      responsive: [ 'lg'],
    },
    {
      title: 'Action',
      key: 'x',
      render: (product) => {
        return (
          <div>
            <Menu as="div" className="relative">
              <div>
                <Menu.Button>
                  <div className="flex gap-2 sm:gap-4 items-center">
                    <Button>Action</Button>
                  </div>
                </Menu.Button>
              </div>
              <Menu.Items className="absolute left-0 py-2 mt-2 w-24 origin-top-right divide-y divide-gray-100 rounded-sm bg-white shadow-lg ring-1 ring-black/5 focus:outline-none z-20">
                <div className="px-1 py-1 ">
                 <Menu.Item>
                      <Link to={`/admin/dashboard/edit-product/${product.key}`} className="text-base font-normal flex w-full gap-2 items-center rounded-md px-2 py-1 text-dashPrimary hover:text-primary pointer" >
                        <FiEdit />
                        Edit
                      </Link>
                    </Menu.Item>
                 <Menu.Item>
                 <button onClick={ ()=> handleProductDelete(product.key) } className="text-base font-normal flex w-full gap-2 items-center rounded-md px-2 py-1 text-dashPrimary hover:text-primary pointer" >
                        <AiOutlineDelete />
                        Delete
                      </button>
                    </Menu.Item>
                </div>
              </Menu.Items>
            </Menu>
          </div>
        )
      }
    },
  ];
  const onChange: TableProps<TDataTableItem>['onChange'] = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  if (isLoading && isFetching) {
    return <div className="h-screen flex justify-center items-center"> <Loading dash={true} /> </div>
  }
  return (
    <div className="col-span-5 rounded-md bg-white shadow-md p-5">
      <h1 className="text-2xl font-medium text-heading pb-2 mb-3">
        All Products
      </h1>
      <Table<TDataTableItem>
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

export default AllProducts
