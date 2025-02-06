import Loading from '../../../../share/Loading'
import {  Table, TableColumnsType, TableProps } from 'antd';
import { TUsers } from '../../../../../types/categories'
import { toast } from 'sonner';
import { TError } from '../../../../../types/global';
import { useGetUsersQuery, useUserUpdateMutation } from '../../../../../redux/features/user/userApi';
import { Select, Space } from 'antd';

const Users = () => {
  const [updateUser] = useUserUpdateMutation();
  const {data: users, isLoading, isFetching } = useGetUsersQuery(undefined);

  const handleChange = async(value: string) => {
   const getValue = value.split(' ')
   const role = getValue[0]
   const id = getValue[1]
   const info = {role, id}
   const toastId = toast.loading('User Updating, please wait...');
   const result = await updateUser(info);
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
  const dataTable = users?.data?.map(({ _id, firstName, lastName, email, role
  }: TUsers, index: string) => ({
    key: _id,
    firstName,
    lastName,
    email,
    role,
    index: index + 1,
  }));

  const columns: TableColumnsType<TUsers> = [
    {
      title: 'Sr No',
      dataIndex: 'index',
      width: 70,
      align: 'center',
    },
    {
      title: 'First Name',
      key: 'feature_img',
      responsive: ['lg'],
      dataIndex: 'firstName'
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
      responsive: ['md']
    },
    {
      title: 'Role',
      dataIndex: 'role',
      responsive: ['md']
    },
    {
      title: 'Change Role',
      key: 'x',
      align: 'center',
      render: (users) => {
        return (
            <Space wrap>
            <Select
              defaultValue={users?.role}
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                { value: `admin ${users?.key}`, label: 'Admin' },
                { value: `customer ${users.key}`, label: `Customer` },
              ]}
            />
          </Space>
        )
      }
    },
  ];
  const onChange: TableProps<TUsers>['onChange'] = (pagination, filters, sorter, extra) => {
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
        All Users
      </h1>

      <Table<TUsers>
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
export default Users
