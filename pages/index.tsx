import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 xl:place-content-center py-20 px-20 grid gap-10 xl:grid-cols-3 lg:grid-cols-2 min-h-screen">
      <div className="bg-white p-10 dark:bg-black rounded-3xl shadow-xl flex flex-col justify-between">
        <span className="font-semibold text-3xl dark:text-white">
          Select Item
        </span>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="flex justify-between my-2">
              <span className="text-gray-500 dark:text-gray-50">
                Grey Chair
              </span>
              <span className="font-semibold dark:text-gray-50">$19</span>
            </div>
          ))}
          {['a', 'b', '', 'c'].map((val, i) => (
            <div
              key={i}
              className="flex justify-between my-2 bg-red-300 py-2 empty:hidden"
            >
              {val}
            </div>
          ))}
        </ul>
        <div className="flex justify-between pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">$10</span>
        </div>
        <div
          className="mt-5 bg-blue-400 dark:bg-black dark:border-white dark:border dark:hover:bg-red-300
         text-white p-3 flex items-center justify-center rounded-xl w-1/3 mx-auto"
        >
          Checkout
        </div>
      </div>
      <div className="bg-white overflow-hidden rounded-3xl shadow-xl group">
        <div className="bg-blue-500 p-6 pb-14 xl:pb-52 landscape:bg-red-400 portrait:bg-pink-300">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 relative -top-5 bg-white">
          <div className="flex relative -top-14 items-end justify-between">
            <div className="flex flex-col item-center ">
              <span className="text-sm text-gray-500 ">Orders</span>
              <span className="font-medium">340</span>
            </div>
            <div className="w-24 h-24 rounded-full bg-red-500 group-hover:bg-yellow-300" />
            <div className="flex flex-col item-center ">
              <span className="text-sm text-gray-500 ">Spent</span>
              <span className="font-medium">$340</span>
            </div>
          </div>
          <div className="relative flex flex-col items-center -mt-10 -mb-5">
            <span className="text-lg font-medium">Tony Molloy</span>
            <span className="text-sm text-gray-500">미국</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl lg:col-span-2 xl:col-span-1">
        <div className="flex justify-between items-center mb-5">
          <span>⃪</span>
          <div className="space-x-5">
            <span className="font-semibold">⭐️ 4.9</span>
            <span className="shadow-xl p-2 rounded-md">💗</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-medium text-xl">Swoon Kounge</span>
          <span className="text-xs text-gray-500">Chair</span>
          <div className="mt-3 mb-5 flex justify-between items-center">
            <div className="space-x-2">
              <button className="w-5 h-5 rounded-full bg-yellow-500 focus:ring-2 ring-offset-2 ring-yellow-500 transition" />
              <button className="w-5 h-5 rounded-full bg-indigo-500 focus:ring-2 ring-offset-2 ring-indigo-500 transition" />
              <button className="w-5 h-5 rounded-full bg-teal-500 focus:ring-2 ring-offset-2 ring-teal-500 transition" />
            </div>
            <div className="flex items-center space-x-4">
              <button className=" bg-blue-100 flex justify-center items-center rounded-lg aspect-square w-8 font-medium text-xl text-gray-500">
                -
              </button>
              <span>1</span>
              <button className=" bg-blue-100 flex justify-center items-center rounded-lg aspect-square w-8 font-medium text-xl text-gray-500">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-medium text-2xl">$450</span>
            <button className="bg-blue-500 text-center text-xs text-white rounded-lg py-3 px-5">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  // return (
  //   <form className="flex flex-col space-y-2 bg-blue-500 p-5 focus-within:bg-blue-50">
  //     <input type={'text'} required placeholder="Username" className="peer" />
  //     <span className="hidden peer-invalid:text-red-500 peer-invalid:block">
  //       This input is invalid
  //     </span>
  //     <input type={'password'} required placeholder="Password" />
  //     <input
  //       type={'file'}
  //       className="file:px-3 file:bg-red-300 file:rounded-xl file:border-0 file:text-white file:transition-colors file:cursor-pointer file:hover:text-purple-400
  //       file:hover:bg-white"
  //     />
  //     <input type={'submit'} value="Login" className="bg-white" />
  //   </form>
  // );
};

export default Home;
