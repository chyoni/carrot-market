import type { NextPage } from 'next';

const Chats: NextPage = () => {
  return (
    <div className="py-10 divide-y-[1px]">
      {[1, 2, 3, 4, 5].map((_, i) => (
        <div className="flex cursor-pointer space-x-2 py-3 px-4">
          <div className="w-10 h-10 rounded-full bg-slate-300" />
          <div>
            <p className="font-medium text-gray-700">Steve Jebs</p>
            <p className="text-sm font-medium text-gray-500">
              See you tomorrow in the corner atg 2pm!
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
