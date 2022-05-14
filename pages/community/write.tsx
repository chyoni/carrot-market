import type { NextPage } from 'next';
import TextArea from '../../components/textarea';

const Write: NextPage = () => {
  return (
    <form className="px-4 py-10">
      <TextArea />
      <button className="mt-2 w-full bg-orange-400 hover:bg-orange-500 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none ">
        Summit
      </button>
    </form>
  );
};

export default Write;
