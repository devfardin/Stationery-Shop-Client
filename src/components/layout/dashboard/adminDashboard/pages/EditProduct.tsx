import STForm from '../../../../form/STForm';
import STInput from '../../../../form/STInput';
import SubmitBtn from '../../../../form/SubmitBtn';
import { FieldValues } from 'react-hook-form';
import STTextAreat from '../../../../form/STTextAreat';
import STInputFile from '../../../../form/STInputFile';
import STSelect from '../../../../form/STSelect';
import { useCategoriesQuery } from '../../../../../redux/features/category/categoryApi';
import { TCategoryOption, TError, TOptionType } from '../../../../../types/global';
import { useAppSelector } from '../../../../../redux/hooks';
import { selectCurrentUser } from '../../../../../redux/features/auth/authSlice';
import { toast } from 'sonner';
import { useParams } from 'react-router';
import { useGetSingleProductQuery } from '../../../../../redux/features/product/productApi';
import Loading from '../../../../share/Loading';
import { Image } from 'antd';

const EditProduct = () => {
  const { data: categories, isLoading, } = useCategoriesQuery(undefined);
  const { productId } = useParams();
  const { data: singleProduct, isLoading: productLoading, } = useGetSingleProductQuery(productId)


  const defaultValu = {
    title: singleProduct?.data?.title,
    description: singleProduct?.data?.description,
    price: singleProduct?.data?.price,
    discount: singleProduct?.data?.discount,
    quantity: singleProduct?.data?.quantity,
    sku: singleProduct?.data?.sku,
    category: singleProduct?.data?.category,
    brand: singleProduct?.data?.brand,
    feature: singleProduct?.data?.feature,
  }
  console.log(singleProduct);

  const handleSubmit = (data: FieldValues) => {
    const updatedProduct = {
      title: data.title,
      description: data.description,
      price: data.price,
      discount: data.discount,
      quantity: data.quantity,
      sku: data.sku,
      category: data.category,
      brand: data.brand,
      feature: data.feature,
    }
  }
  // create categories options
  const categoriesOptions: TCategoryOption[] = categories?.data?.map(
    (item: TOptionType) => ({
      value: item._id,
      label: item.name,
      disabled: isLoading,
    }));

  if (!singleProduct?.status) {
    return <div className="h-screen flex justify-center items-center"> <Loading dash={true} /> </div>
  }
  return (
    <div className="col-span-5 rounded-md bg-white shadow-md p-5">
      <h1 className="text-2xl font-medium text-heading border-b border-dashBorder pb-2">
        Edit Product
      </h1>
      {/* Add product form */}
      <div className="mt-4">
        <STForm onSubmit={handleSubmit} defaultValues={defaultValu}>
          <STInput name='title' label='Product Title' type='text' />
          <STTextAreat name='description' label='Product Description'
            row={6} />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <STInput name='price' label='Product Price' type='text' />
            <STInput name='discount' label='Discount Price' type='text' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <STInput name='quantity' label='Product Quantity' type='text' />
            <STInput name='sku' label='Product Sku' type='text' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <STSelect name='category' label='Product Category' options={categoriesOptions} />
            <STInput name='brand' label='Product Brand' type='text' />
          </div>
          <STInputFile name='featureImg' label='Feature Image' />
          <div>
            <Image
              width={200}
              height={150}
              alt={singleProduct?.data?.title}
              src={singleProduct?.data?.feature}
              placeholder={productLoading} />
          </div>
          <SubmitBtn type='submit' label='Create Product' />
        </STForm>
      </div>
    </div>
  )
}

export default EditProduct
