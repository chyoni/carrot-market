import { useState } from 'react';

function tailwindClass(...className: string[]) {
  return className.join(' ');
}

const Enter = () => {
  const [method, setMethod] = useState<'email' | 'phone'>('email');
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <h3 className="mt-16 text-3xl font-bold">Enter to Carrot</h3>
      </div>
      <div className="flex items-center justify-center">
        <span className="mt-8 text-sm text-gray-500">Enter using:</span>
      </div>
      <div className="grid grid-cols-2 gap-28 mt-10 border-b">
        <button
          onClick={() => setMethod('email')}
          className={tailwindClass(
            'font-semibold text-gray-500  pb-6',
            method === 'email'
              ? 'border-b-2 border-orange-400 text-orange-400 transition-colors'
              : 'text-gray-400'
          )}
        >
          Email address
        </button>
        <button
          onClick={() => setMethod('phone')}
          className={tailwindClass(
            'font-semibold text-gray-500  pb-6',
            method === 'phone'
              ? 'border-b-2 border-orange-400 text-orange-400 transition-colors'
              : 'text-gray-400'
          )}
        >
          Phone number
        </button>
      </div>
      <div>
        {method === 'email' ? <span>Email address</span> : null}
        {method === 'phone' ? <span>Phone number</span> : null}
      </div>
      <form>
        {method === 'email' ? (
          <input type={'text'} placeholder={'Email'} />
        ) : null}
        {method === 'phone' ? (
          <div>
            <span>+82</span>
            <input type={'text'} placeholder={'Phone number'} />
          </div>
        ) : null}
        <div>
          {method === 'email' ? (
            <button>Get login link</button>
          ) : (
            <button>Get Phone</button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Enter;
