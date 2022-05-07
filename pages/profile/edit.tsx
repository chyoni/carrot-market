import type { NextPage } from 'next';

const Edit: NextPage = () => {
  return (
    <div className="px-4 py-10 space-y-5">
      <div className="flex items-center space-x-3">
        <div className="w-14 h-14 rounded-full bg-slate-300" />
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
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input
          id="email"
          type={'email'}
          className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                placeholder-gray-400 focus:outline-none focus:ring-orange-300 focus:border-orange-300"
          required
        />
      </div>
      <div className="space-y-1 flex flex-col">
        <label htmlFor="phone" className="text-sm font-medium">
          Phone
        </label>
        <div className="flex">
          <span
            className="flex items-center justify-center px-4 rounded-l-md 
              border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm"
          >
            +82
          </span>
          <input
            id="phone"
            type={'number'}
            placeholder={'Phone number'}
            required
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm
                placeholder-gray-400 focus:outline-none focus:ring-orange-300 focus:border-orange-300"
          />
        </div>
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
