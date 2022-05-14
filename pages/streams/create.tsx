import type { NextPage } from 'next';
import Input from '../../components/input';
import TextArea from '../../components/textarea';

const Create: NextPage = () => {
  return (
    <div className="space-y-5 py-10 px-4">
      <div className="my-5">
        <Input label="Name" type="name" required />
      </div>
      <div className="my-5">
        <Input label="Price" type="price" required />
      </div>
      <div>
        <label className="text-gray-700 text-sm font-medium mb-1 block">
          Description
        </label>
        <div>
          <TextArea />
        </div>
      </div>
      <button
        className="mt-6 bg-orange-400 hover:bg-orange-400 w-full text-white py-2 px-4 
              border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
      >
        Go live
      </button>
    </div>
  );
};

export default Create;
