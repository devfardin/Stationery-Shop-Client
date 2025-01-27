import STForm from '../../../../form/STForm';
import STInput from '../../../../form/STInput';
import SubmitBtn from '../../../../form/SubmitBtn';
import { FieldValues } from 'react-hook-form';
import STTextAreat from '../../../../form/STTextAreat';
import STInputFile from '../../../../form/STInputFile';

const AddProduct = () => {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);

  }
  return (
    <div className="col-span-5 rounded-md bg-white shadow-md p-5">
      <h1 className="text-2xl font-medium text-heading border-b border-dashBorder pb-2">
          Create Product
        </h1>
        {/* Add product form */}
        <div className="mt-4">
        <STForm onSubmit={handleSubmit}>
        <STInput name='title' label='Product Title' type='text' />
        <STTextAreat name='description' label='Product Description' 
        row={6}/>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <STInput name='price' label='Product Price' type='text'/>
        <STInput name='discount' label='Discount Price' type='text'/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <STInput name='quantity' label='Product Quantity' type='text'/>
        <STInput name='sku' label='Product Sku' type='text'/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
        <STInput name='category' label='Product Category' type='text'/>
        <STInput name='brand' label='Product Brand' type='text'/>
        </div>
        <STInputFile name='featureImg' label='Feature Image'/>
        <SubmitBtn type='submit' label='Create Product' />
      </STForm>
        </div>
      
    </div>
  )
}

export default AddProduct
