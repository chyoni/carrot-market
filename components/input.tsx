import React from 'react';

interface InputProps {
  label?: string;
  type: 'name' | 'price' | 'email' | 'phone';
  [key: string]: any;
}

export default function Input({ label, type, ...rest }: InputProps) {
  return (
    <>
      {label ? (
        <label
          htmlFor={type}
          className="text-gray-900 text-sm font-medium mb-1 block"
        >
          {label}
        </label>
      ) : null}
      {type === 'name' ? (
        <div className="rounded-md shadow-sm flex items-center">
          <input
            id={type}
            type="text"
            placeholder="Name"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-md
               placeholder-gray-400 focus:outline-none focus:ring-orange-300 focus:border-orange-300"
            {...rest}
          />
        </div>
      ) : null}
      {type === 'price' ? (
        <div className="rounded-md relative shadow-sm flex items-center">
          <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
            <span className="text-sm text-gray-500">₩</span>
          </div>
          <input
            id={type}
            type="text"
            placeholder="0"
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-md pl-7
               placeholder-gray-400 focus:outline-none focus:ring-orange-300 focus:border-orange-300"
            {...rest}
          />
          <div className="absolute right-0 pr-3 flex items-center justify-center pointer-events-none">
            <span className="text-sm text-gray-500">KRW</span>
          </div>
        </div>
      ) : null}
      {type === 'email' ? (
        <input
          id={type}
          type={'email'}
          className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm
                placeholder-gray-400 focus:outline-none focus:ring-orange-300 focus:border-orange-300"
          {...rest}
        />
      ) : null}
      {type === 'phone' ? (
        <div className="flex">
          <span
            className="flex items-center justify-center px-4 rounded-l-md 
              border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none text-sm"
          >
            +82
          </span>
          <input
            id={type}
            type={'number'}
            placeholder={'Phone number'}
            {...rest}
            className="appearance-none w-full px-3 py-2 border border-gray-300 rounded-md rounded-l-none shadow-sm
                placeholder-gray-400 focus:outline-none focus:ring-orange-300 focus:border-orange-300"
          />
        </div>
      ) : null}
    </>
  );
}
