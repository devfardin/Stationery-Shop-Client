import STForm from '../../../../form/STForm';
import STInput from '../../../../form/STInput';
import SubmitBtn from '../../../../form/SubmitBtn';
import { FieldValues } from 'react-hook-form';
import STTextAreat from '../../../../form/STTextAreat';
import STInputFile from '../../../../form/STInputFile';

const AddCategory = () => {
  const handleSubmit = (data: FieldValues) => {
    console.log(data);

  }
  return (
    <div className="col-span-5 rounded-md bg-white shadow-md p-5">
      <h1 className="text-2xl font-medium text-heading border-b border-dashBorder pb-2">
          Create Category
        </h1>
        {/* Add product form */}
        <div className="mt-4">
        <STForm onSubmit={handleSubmit}>
        <STInput name='name' label='Category Name' type='text' />
        <STTextAreat name='description' label='Category Description' 
        row={6}/>
        <STInputFile name='featureImg' label='Category Feature'/>
        <SubmitBtn type='submit' label='Create Category' />
      </STForm>
        </div>
      
    </div>
  )
}

export default AddCategory



