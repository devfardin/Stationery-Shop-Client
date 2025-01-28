import { useCategoriesQuery, useCategoryDeleteMutation } from '../../../../../redux/features/category/categoryApi'
import Loading from '../../../../share/Loading'
import { Button, Image, Table, TableColumnsType, TableProps } from 'antd';
import { AiOutlineDelete } from 'react-icons/ai'
import { TCategoryTable } from '../../../../../types/categories'
import { Menu } from '@headlessui/react'
import { toast } from 'sonner';
import { TError } from '../../../../../types/global';

const AllCategores = () => {
  const [deleteCategory] = useCategoryDeleteMutation()

  const handlecategoryDelete = async(id: string) => {
    const toastId = toast.loading('Deleting Category, please wait...');
    const result = await deleteCategory(id);
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
  }
  
    const action = [
      {
        label: 'Delete',
        link: '/delete',
        icon: AiOutlineDelete,
      },
    ]
  const {data: categories, isLoading, isFetching } = useCategoriesQuery(undefined)



  const dataTable = categories?.data?.map(({ _id, name, author, description, feature,
  }: TCategoryTable, index: string) => ({
    key: _id,
    name,
    author: `${author?.firstName} ${author?.lastName}` ,
    description,
    feature,
    index: index + 1,
  }));

  const columns: TableColumnsType<TCategoryTable> = [
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
      title: 'Category Name',
      dataIndex: 'name',
      width: 170,
    },
   
    {
      title: 'Description',
      dataIndex: 'description',
      responsive: ['md']
    },
    {
      title: 'Author',
      dataIndex: 'author',
      responsive: ['md'],
      width: 170,
    },
    {
      title: 'Action',
      key: 'x',
      render: (category) => {
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
                  {
                    action.map(({ label, icon: Icon }) => <Menu.Item>
                      <button onClick={ ()=> handlecategoryDelete(category.key) } className="text-base font-normal flex w-full gap-2 items-center rounded-md px-2 py-1 text-dashPrimary hover:text-primary pointer" >
                        <Icon />
                        {label}
                      </button>
                    </Menu.Item>)
                  }
                </div>
              </Menu.Items>
            </Menu>
          </div>
        )
      }
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
        All Categories
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

export default AllCategores
