import STForm from '../../../../form/STForm';
import STInput from '../../../../form/STInput';
import SubmitBtn from '../../../../form/SubmitBtn';
import { FieldValues } from 'react-hook-form';
import STTextAreat from '../../../../form/STTextAreat';
import STInputFile from '../../../../form/STInputFile';
import { useAddProductMutation } from '../../../../../redux/features/product/productApi';
import STSelect from '../../../../form/STSelect';
import { useCategoriesQuery } from '../../../../../redux/features/category/categoryApi';
import { TCategoryOption, TError, TOptionType } from '../../../../../types/global';
import { useAppSelector } from '../../../../../redux/hooks';
import { selectCurrentUser } from '../../../../../redux/features/auth/authSlice';
import { toast } from 'sonner';

const AddProduct = () => {

  const [addProduct, {isLoading: buttonDesible}] = useAddProductMutation();
  
  const { data: categories, isLoading } = useCategoriesQuery(undefined)
  const user = useAppSelector(selectCurrentUser);

  // create categories options
  const categoriesOptions: TCategoryOption[] = categories?.data?.map(
    (item: TOptionType) => ({
      value: item._id,
      label: item.name,
      disabled: isLoading,
    }));

  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Creating product, please wait...');
    const productData = {
      title: data.title,
      author: user?.userId,
      description: data.description,
      price: data.price,
      discount: data.discount,
      quantity: data.quantity,
      sku: data.sku,
      category: data.category,
      brand: data.brand,
      feature: data.feature,
    }
    console.log(productData);
    
    const result = await addProduct(productData)
    if (result?.error) {
      const errorMessage = (result?.error as TError).data?.message;
      toast.error(errorMessage, { id: toastId })
    } else {
      const success = result.data.message;
      toast.success(success, { id: toastId })
    }

  }

  return (
    <div className="col-span-5 rounded-md bg-white shadow-md p-5">
      <h1 className="text-2xl font-medium text-heading border-b border-dashBorder pb-2">
        Create Product
      </h1>
      {/* Add product form */}
      <div className="mt-4">
        <STForm onSubmit={handleSubmit} defaultValues={{discount:0}}>
          <STInput name='title' label='Product Title' type='text' />
          <STTextAreat name='description' label='Product Description'
            row={6} />
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <STInput name='price' label='Product Price' type='number' />
            <STInput name='discount' label='Discount Price' type='number' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <STInput name='quantity' label='Product Quantity' type='number' />
            <STInput name='sku' label='Product Sku' type='text' />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <STSelect name='category' label='Product Category' options={categoriesOptions} />
            <STInput name='brand' label='Product Brand' type='text' />
          </div>
          <STInputFile name='featureImg' label='Feature Image' />
          <SubmitBtn disabled={buttonDesible} dash={true} type='submit' label='Create Product' />
        </STForm>
      </div>
    </div>
  )
}

export default AddProduct
