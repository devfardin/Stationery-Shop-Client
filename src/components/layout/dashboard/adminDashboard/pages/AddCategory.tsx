import { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';
import { selectCurrentUser } from '../../../../../redux/features/auth/authSlice';
import { useAddCategoryMutation } from '../../../../../redux/features/category/categoryApi';
import { useAppSelector } from '../../../../../redux/hooks';
import { TError } from '../../../../../types/global';
import STForm from '../../../../form/STForm';
import STInput from '../../../../form/STInput';
import STTextAreat from '../../../../form/STTextAreat';
import SubmitBtn from '../../../../form/SubmitBtn';


const AddCategory = () => {
  const user = useAppSelector(selectCurrentUser);

  const [AddCategory, {isLoading}] = useAddCategoryMutation();
  const handleSubmit = async (data: FieldValues) => {
    const toastId = toast.loading('Creating category, please wait...');
    const categoryData = {
      author: user?.userId,
      name: data.name,
      description: data.description,
      feature: 'feature image path'
    };

    const result = await AddCategory(categoryData);
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
        Create Category
      </h1>
      {/* Add product form */}
      <div className="mt-4">
        <STForm onSubmit={handleSubmit}>
          <STInput name='name' label='Category Name' type='text' />
          <STTextAreat name='description' label='Category Description'
            row={6} />
          <STInput name='feature' label='Category Feature url' type='text' />
          <SubmitBtn disabled={isLoading} dash={true} type='submit' label='Create Category' />
        </STForm>
      </div>

    </div>
  )
}

export default AddCategory



