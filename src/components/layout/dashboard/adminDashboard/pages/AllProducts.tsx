import { TableColumnsType } from "antd";
import { useGetProductsQuery } from "../../../../../redux/features/product/productApi"
import Loading from "../../../../share/Loading";

const AllProducts = () => {
  const {data: productData, isLoading} = useGetProductsQuery(undefined);

  console.log(productData?.data);
  
 
  interface DataTableItem {
    key: string;
    title: string;
    author: string;
    description: string;
    price: number;
    discount: number;
    quantity: number;
    sku: string;
    category: string;
    brand: string;
    feature: string;
    _id: string;
  }
  const dataTable = productData?.data?.map(({ _id, title, author, description, price,  discount, quantity, sku, category, brand, feature,
  }: DataTableItem, index: string) => ({
     key: _id,
     title,
     author,
     description,
     price,
     discount,
     quantity,
     sku,
     category,
     brand,
     feature,
     index: index + 1,
 }));

 const columns: TableColumnsType<DataTableItem> = [
  {
    title: 'Sr No',
    dataIndex: 'index',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Student id',
    dataIndex: 'id',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    filters: [
      {
          text: 'Male',
          value: 'male'
      },
      {
          text: 'Female',
          value: 'female'
      },
      {
          text: 'Others',
          value: 'others'
      }
    ],
   onFilter: (value, record) => record.gender.indexOf(value as string) == 0
  },
  {
    title: 'Date of birth',
    dataIndex: 'dateOfBirth',
  },
  {
    title: 'Email Address',
    dataIndex: 'email',
  },
  {
    title: 'Contact Number',
    dataIndex: 'contactNo',
  },
  {
    title: 'Emergency  Contact',
    dataIndex: 'emergencyContactNo',
  },
  {
    title: 'Action',
    key: 'x',
    render: (student) => {
      return (
        <Flex gap={10}>
          <StudentDetailes student={ student }/>

          {/* <Button>Blocked</Button> */}
          <BlockStudent studentId={student.id as string}/>
        </Flex>
      )
    }
  },
];

  return (
    <div>
      <Loading dash={true}/>
      All Products
    </div>
  )
}

export default AllProducts
