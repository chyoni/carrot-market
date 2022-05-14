import type { NextPage } from 'next';
import Avatar from '../../components/avatar';
import Input from '../../components/input';

const Edit: NextPage = () => {
  return (
    <div className="px-4 py-10 space-y-5">
      <div className="flex items-center space-x-3">
        <Avatar size="large" />
        <label
          htmlFor="picture"
          className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium hover:ring-2 hover:ring-offset-2  
        hover:ring-orange-400 text-gray-700"
        >
          Change
          <input
            id="picture"
            type={'file'}
            className="hidden"
            accept="image/*"
          />
        </label>
      </div>
      <div className="space-y-1">
        <Input label="Email" type="email" required />
      </div>
      <div className="space-y-1 flex flex-col">
        <Input label="Phone" type="phone" required />
      </div>
      <button
        className="mt-6 bg-orange-400 hover:bg-orange-400 w-full text-white py-2 px-4 
              border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none"
      >
        Update profile
      </button>
    </div>
  );
};

export default Edit;
